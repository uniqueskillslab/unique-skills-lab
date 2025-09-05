import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function ThankYou() {
  useEffect(() => {
    // Auto redirect to home page after 10 seconds
    const timer = setTimeout(() => {
      window.location.href = '/'
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Thank You - Unique Skills Lab</title>
        <meta name="description" content="Thank you for contacting Unique Skills Lab. We'll get back to you soon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Thank You Message */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>

            {/* Additional Information */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• We'll review your message and respond via email</li>
                <li>• For urgent inquiries, call us at 0317-6100190</li>
                <li>• Check out our courses while you wait</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link 
                href="/courses"
                className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 inline-block"
              >
                Explore Our Courses
              </Link>
              
              <Link 
                href="/"
                className="w-full border-2 border-primary-500 text-primary-500 py-3 px-6 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors duration-200 inline-block"
              >
                Back to Home
              </Link>
            </div>

            {/* Auto Redirect Notice */}
            <p className="text-xs text-gray-500 mt-6">
              You'll be automatically redirected to the home page in 10 seconds
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Need Immediate Help?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/923296219415"
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                  </svg>
                  <span>WhatsApp: 0329-6219415</span>
                </a>
                <a
                  href="tel:03176100190"
                  className="inline-flex items-center space-x-2 bg-white text-primary-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call: 0317-6100190</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
