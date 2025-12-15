import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200/50 dark:border-gray-700/50 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Check4Real ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, and safeguard information when you use our routing number verification service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Routing Numbers</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When you use our service, you may enter a routing number for verification. <strong>We do not store, 
                  save, or retain routing numbers</strong> that you enter. Routing numbers are processed in real-time 
                  and are not saved to any database, file, or storage system.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">No Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We do not collect personal information such as names, email addresses, phone numbers, account numbers, 
                  or any other personally identifiable information.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Verification Services</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Routing numbers you enter are used solely for the purpose of verification. They are:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Validated for format and check digit algorithm</li>
                  <li>Used to query external routing number databases for bank information</li>
                  <li>Not stored or retained after the verification process completes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">External API Usage</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To provide verification services, we use the BankRouting.io API. When you verify a routing number, 
                  it may be sent to this third-party service to retrieve bank information. Please refer to{' '}
                  <a 
                    href="https://bankrouting.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    BankRouting.io's privacy policy
                  </a>{' '}
                  for information about how they handle data.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Storage and Retention</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>We do not store any routing numbers or user data.</strong> All verification requests are processed 
              in real-time, and no information is saved to our servers, databases, or any storage systems. Once your 
              verification request is complete, the routing number is discarded from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rate Limiting</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To ensure fair usage and prevent abuse, we implement rate limiting on our API. Currently, we allow up to 
              <strong> 10 verification requests per minute per IP address</strong>. If you exceed this limit, you will 
              receive an error message and can retry after the rate limit window resets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Encryption</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  All communication between your browser and our servers is encrypted using HTTPS/TLS protocols. This 
                  ensures that data transmitted during verification is protected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Server Logs</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our hosting provider (Vercel) may log standard server information such as IP addresses, request 
                  timestamps, and error messages for operational purposes. These logs are retained according to Vercel's 
                  data retention policies and do not include routing numbers in error logs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We use the following third-party services:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Vercel</strong> - Hosting and deployment platform. See{' '}
                <a 
                  href="https://vercel.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Vercel's Privacy Policy
                </a>
              </li>
              <li>
                <strong>BankRouting.io</strong> - Routing number lookup API. See{' '}
                <a 
                  href="https://bankrouting.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  BankRouting.io's Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We do not use cookies, tracking pixels, or any other tracking technologies. We do not collect analytics 
              data about your usage of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our service is not directed to individuals under the age of 13. We do not knowingly collect information 
              from children under 13. If you believe we have collected information from a child under 13, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our{' '}
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                website
              </Link>
              .
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

