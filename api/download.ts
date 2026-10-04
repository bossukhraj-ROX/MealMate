import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'
import { issueSignedToken, presignUrl } from '@vercel/blob'

const PDF_PATHNAME = 'MEALMATE PLAN.pdf'

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY

  if (!stripeSecretKey) {
    console.error('STRIPE_SECRET_KEY is not configured')
    return res.status(500).json({ error: 'Server is not properly configured. Please try again later.' })
  }

  const { sessionId } = req.body as { sessionId?: string }

  if (!sessionId || typeof sessionId !== 'string' || sessionId.trim().length === 0) {
    return res.status(400).json({ error: 'Missing payment session. Please return to the home page and try again.' })
  }

  const stripe = new Stripe(stripeSecretKey)

  let session: Stripe.Checkout.Session

  try {
    session = await stripe.checkout.sessions.retrieve(sessionId)
  } catch {
    return res.status(404).json({ error: 'We could not find your payment session. Please check your email for a receipt or try again.' })
  }

  if (session.payment_status !== 'paid') {
    return res.status(402).json({ error: 'Your payment has not been completed. Please complete your purchase to download the meal plan.' })
  }

  try {
    const token = await issueSignedToken({
      pathname: PDF_PATHNAME,
      operations: ['get'],
      validUntil: Date.now() + 10 * 60 * 1000,
    })

    const { presignedUrl } = await presignUrl(token, {
      pathname: PDF_PATHNAME,
      operation: 'get',
      validUntil: Date.now() + 10 * 60 * 1000,
    })

    return res.status(200).json({
      downloadUrl: presignedUrl,
      expiresAt: Date.now() + 10 * 60 * 1000,
    })
  } catch {
    console.error('Failed to generate signed download URL')
    return res.status(500).json({ error: 'We could not prepare your download right now. Please refresh the page or try again in a moment.' })
  }
}
