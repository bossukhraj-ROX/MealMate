import { useState, useEffect, useCallback } from 'react'
import { Leaf, Download, ArrowRight, CheckCircle2, AlertCircle, Loader2, Home } from 'lucide-react'

type Status = 'loading' | 'success' | 'error'

type ErrorReason = 'missing' | 'invalid' | 'unpaid' | 'expired' | 'server'

const errorMessages: Record<ErrorReason, string> = {
  missing: "We couldn't find your payment details. Please use the link from your email receipt or return to the home page to start again.",
  invalid: 'Your payment session could not be verified. Please check your email for a receipt or try again.',
  unpaid: 'Your payment has not been completed yet. Please complete your purchase to download the meal plan.',
  expired: 'Your download link has expired. Please refresh the page to get a new one, or return to the home page to start again.',
  server: 'Something went wrong on our end. Please try again in a moment, or return to the home page.',
}

export default function SuccessPage() {
  const [status, setStatus] = useState<Status>('loading')
  const [errorReason, setErrorReason] = useState<ErrorReason>('server')
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  const verifyAndFetch = useCallback(async () => {
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id')

    if (!sessionId) {
      setStatus('error')
      setErrorReason('missing')
      return
    }

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      })

      if (!response.ok) {
        if (response.status === 402) {
          setErrorReason('unpaid')
        } else if (response.status === 404) {
          setErrorReason('invalid')
        } else if (response.status === 410) {
          setErrorReason('expired')
        } else {
          setErrorReason('server')
        }
        setStatus('error')
        return
      }

      const data = await response.json()
      setDownloadUrl(data.downloadUrl)
      setStatus('success')
    } catch {
      setErrorReason('server')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    verifyAndFetch()
  }, [verifyAndFetch])

  const goHome = () => {
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Minimal nav */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-600 text-ivory">
            <Leaf size={18} />
          </span>
          <span className="font-serif text-2xl font-bold tracking-tight text-forest-600">
            MEALMATE
          </span>
        </a>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-2xl flex-col items-center justify-center px-6 pb-20 text-center">
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-6">
            <Loader2 size={48} className="animate-spin text-forest-400" />
            <div>
              <h1 className="font-serif text-3xl font-bold text-forest-700">
                Verifying your payment...
              </h1>
              <p className="mt-3 text-base text-forest-500">
                We're confirming everything with Stripe. This only takes a moment.
              </p>
            </div>
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-forest-50">
              <CheckCircle2 size={48} className="text-forest-500" />
            </div>
            <div>
              <h1 className="font-serif text-4xl font-bold text-forest-700 sm:text-5xl">
                Payment successful
              </h1>
              <p className="mt-4 text-lg text-forest-500">
                Your MealMate 7-Day Student Meal Plan is ready.
              </p>
            </div>

            {downloadUrl && (
              <a
                href={downloadUrl}
                download="MEALMATE-7-Day-Meal-Plan.pdf"
                className="btn-primary mt-4 text-lg"
              >
                Download your MealMate plan
                <Download size={20} />
              </a>
            )}

            <div className="mt-6 rounded-xl bg-forest-50 px-6 py-4">
              <p className="text-sm text-forest-500">
                Your download link is valid for 10 minutes. If it expires, just refresh this page to get a new one.
              </p>
            </div>

            <button
              onClick={goHome}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest-400 transition-colors hover:text-forest-600"
            >
              <Home size={16} />
              Back to home
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
              <AlertCircle size={48} className="text-red-500" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-forest-700 sm:text-4xl">
                Something went wrong
              </h1>
              <p className="mt-4 max-w-md text-base text-forest-500">
                {errorMessages[errorReason]}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={verifyAndFetch}
                className="btn-primary"
              >
                Try again
                <ArrowRight size={18} />
              </button>
              <button
                onClick={goHome}
                className="btn-secondary"
              >
                Back to home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
