import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Check4Real handles routing-number verification: zero retention, no tracking, TLS-encrypted in transit.",
};

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-8 border-b border-border last:border-b-0">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tighter text-foreground mb-4">
        {title}
      </h2>
      <div className="text-foreground/80 leading-relaxed space-y-4 text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "collect", label: "Information we collect" },
    { id: "use", label: "How we use information" },
    { id: "retention", label: "Data retention" },
    { id: "rate-limit", label: "Rate limiting" },
    { id: "security", label: "Security" },
    { id: "third-party", label: "Third-party services" },
    { id: "cookies", label: "Cookies & tracking" },
    { id: "children", label: "Children's privacy" },
    { id: "disclaimer", label: "Disclaimer & liability" },
    { id: "changes", label: "Changes to this policy" },
    { id: "contact", label: "Contact" },
  ];

  const contactEmail = "dvishnut1@gmail.com";

  return (
    <div className="relative">
      {/* Subtle hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 grid-bg opacity-50"
        />
        <div className="container mx-auto py-16 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest text-foreground text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: <span className="text-foreground">{lastUpdated}</span>
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* TOC */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
              On this page
            </p>
            <nav>
              <ul className="space-y-1 text-sm">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block py-1.5 px-3 -mx-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="lg:col-span-9 max-w-3xl">
            <Section id="overview" title="Overview">
              <p>
                Check4Real ("we", "our", or "us") is committed to protecting your
                privacy. This policy explains how we collect, use, and safeguard
                information when you use our routing-number verification service.
              </p>
              <p>
                Our governing principle is simple:{" "}
                <strong className="text-foreground">we don't keep what we don't need.</strong>{" "}
                Verification is performed in-memory and discarded the moment a
                response is returned.
              </p>
            </Section>

            <Section id="collect" title="Information we collect">
              <h3 className="text-lg font-semibold text-foreground">Routing numbers</h3>
              <p>
                When you use our service, you may enter a routing number for
                verification.{" "}
                <strong className="text-foreground">
                  We do not store, save, or retain routing numbers
                </strong>{" "}
                that you enter. Routing numbers are processed in real time and
                are not saved to any database, file, or storage system.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                No personal information
              </h3>
              <p>
                We do not collect personal information such as names, email
                addresses, phone numbers, account numbers, or any other
                personally identifiable information.
              </p>
            </Section>

            <Section id="use" title="How we use information">
              <h3 className="text-lg font-semibold text-foreground">
                Verification services
              </h3>
              <p>
                Routing numbers you enter are used solely for the purpose of
                verification. They are:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Validated for format and check-digit algorithm</li>
                <li>
                  Sent to our server via{" "}
                  <strong className="text-foreground">HTTPS POST</strong> in a
                  JSON request body — not in the URL — so routing numbers do
                  not appear in standard server access-log paths
                </li>
                <li>
                  Used to query external routing-number directories for bank
                  information
                </li>
                <li>Not stored or retained after the verification completes</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                External API usage
              </h3>
              <p>
                To provide enriched lookups, we use the{" "}
                <a
                  href="https://bankrouting.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-medium"
                >
                  BankRouting.io
                </a>{" "}
                API. When you verify a routing number, it may be sent to this
                third-party service to retrieve bank information. Refer to their
                privacy policy for details on how they handle data.
              </p>
            </Section>

            <Section id="retention" title="Data retention">
              <p>
                <strong className="text-foreground">
                  We do not store any routing numbers or user data.
                </strong>{" "}
                All verification requests are processed in real time, and no
                information is saved to our servers, databases, or any storage
                systems. Once your verification request is complete, the
                routing number is discarded from memory.
              </p>
            </Section>

            <Section id="rate-limit" title="Rate limiting">
              <p>
                To ensure fair usage and prevent abuse, we apply a rate limit of{" "}
                <strong className="text-foreground">
                  10 verification requests per minute, per IP address
                </strong>
                . If you exceed this limit, you'll receive an error message and
                may retry after the rate-limit window resets.
              </p>
            </Section>

            <Section id="security" title="Security">
              <h3 className="text-lg font-semibold text-foreground">
                Encryption in transit
              </h3>
              <p>
                All communication between your browser and our servers is
                encrypted using HTTPS/TLS protocols. Data transmitted during
                verification is protected against interception.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                Server logs
              </h3>
              <p>
                Our hosting provider (Vercel) may log standard server
                information such as IP addresses, request timestamps, HTTP
                method, and request path (for example,{" "}
                <code className="text-sm font-mono text-foreground/80">
                  POST /api/verify
                </code>
                ) for operational purposes. Because verification uses POST
                with a JSON body, routing numbers are{" "}
                <strong className="text-foreground">
                  not recorded in URL-based access logs
                </strong>
                . We do not log request bodies in our application code.
              </p>
              <p>
                Error logs from our API routes contain only generic error
                messages, not routing numbers you submit.
              </p>
            </Section>

            <Section id="third-party" title="Third-party services">
              <p>We use the following third-party services:</p>
              <ul className="space-y-3">
                <li className="rounded-lg border border-border bg-surface p-4">
                  <strong className="text-foreground">Vercel</strong> — Hosting
                  and deployment platform.{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-medium"
                  >
                    Privacy policy →
                  </a>
                </li>
                <li className="rounded-lg border border-border bg-surface p-4">
                  <strong className="text-foreground">BankRouting.io</strong> —
                  Routing-number lookup API.{" "}
                  <a
                    href="https://bankrouting.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-medium"
                  >
                    Privacy policy →
                  </a>
                </li>
              </ul>
            </Section>

            <Section id="cookies" title="Cookies & tracking">
              <p>
                We do not use cookies, tracking pixels, or any other tracking
                technologies. We do not collect analytics data about your usage
                of the service.
              </p>
            </Section>

            <Section id="children" title="Children's privacy">
              <p>
                Our service is not directed to individuals under the age of 13.
                We do not knowingly collect information from children under 13.
                If you believe we have collected information from a child under
                13, please contact us at{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-medium"
                >
                  {contactEmail}
                </a>
                .
              </p>
            </Section>

            <Section id="disclaimer" title="Disclaimer & limitation of liability">
              <p>
                Check4Real is provided for{" "}
                <strong className="text-foreground">informational purposes only</strong>.
                It is not financial, legal, banking, or fraud-prevention advice,
                and it is not a substitute for verification with your bank or
                other qualified professionals.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                No warranties
              </h3>
              <p>
                The service and all results are provided on an{" "}
                <strong className="text-foreground">"as is"</strong> and{" "}
                <strong className="text-foreground">"as available"</strong> basis,
                without warranties of any kind, whether express or implied,
                including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, accuracy,
                completeness, reliability, or non-infringement. We do not
                warrant that the service will be uninterrupted, error-free, or
                free of harmful components, or that verification results will be
                accurate, current, or suitable for any particular decision.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                No guarantee of check authenticity
              </h3>
              <p>
                Routing-number verification confirms structure and, when
                available, directory information about an institution. It does{" "}
                <strong className="text-foreground">not</strong> guarantee that
                a check is genuine, that funds are available, that an account
                exists, or that a transaction will succeed. You are solely
                responsible for any decision to accept, deposit, transfer funds
                based on, or otherwise rely on information from this service.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                Limitation of liability
              </h3>
              <p>
                To the fullest extent permitted by applicable law, the creators,
                operators, contributors, and affiliates of Check4Real (collectively,
                the "Service Providers") shall not be liable for any direct,
                indirect, incidental, special, consequential, exemplary, or punitive
                damages, or any loss of profits, revenue, data, goodwill, or
                business opportunity, arising out of or related to your use of
                (or inability to use) the service, any verification result, any
                reliance on such result, any third-party data source (including
                BankRouting.io or public routing directories), service
                interruptions, or unauthorized access — whether based on
                contract, tort (including negligence), strict liability, or any
                other theory, even if we have been advised of the possibility of
                such damages.
              </p>
              <p>
                Where liability cannot be fully excluded, the total aggregate
                liability of the Service Providers for any claim arising out of
                or relating to the service shall not exceed{" "}
                <strong className="text-foreground">zero U.S. dollars ($0)</strong>
                , or the minimum amount permitted by law, whichever is greater.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                Release and assumption of risk
              </h3>
              <p>
                By using Check4Real, you acknowledge that you use the service at
                your own risk and voluntarily release, discharge, and hold
                harmless the Service Providers from any and all claims, demands,
                causes of action, losses, liabilities, damages, costs, and
                expenses (including reasonable attorneys&apos; fees) arising from
                your use of the service or reliance on any information it
                provides, including claims alleging negligence, omission, or
                misrepresentation, to the maximum extent permitted by law.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                Third-party data
              </h3>
              <p>
                We do not control and are not responsible for the accuracy,
                availability, or policies of third-party services or data sources
                used to provide lookups. Any issues with third-party data are
                subject to those providers&apos; terms and policies.
              </p>

              <h3 className="text-lg font-semibold text-foreground">
                Jurisdiction
              </h3>
              <p>
                Some jurisdictions do not allow certain limitations of liability
                or disclaimers of implied warranties. In those jurisdictions,
                the above limitations apply only to the extent permitted by
                applicable law. Nothing in this section is intended to exclude
                liability that cannot be excluded under law.
              </p>
            </Section>

            <Section id="changes" title="Changes to this policy">
              <p>
                We may update this policy from time to time. Any changes will be
                reflected on this page along with an updated "Last updated"
                date. Please review periodically.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                If you have any questions about this Privacy Policy, the
                disclaimer above, or Check4Real in general, contact us at:
              </p>
              <p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-medium"
                >
                  {contactEmail}
                </a>
              </p>
            </Section>

            <div className="mt-12 pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Return to home
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
