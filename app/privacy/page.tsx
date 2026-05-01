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
    { id: "changes", label: "Changes to this policy" },
    { id: "contact", label: "Contact" },
  ];

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
                information such as IP addresses, request timestamps, and error
                messages for operational purposes. These logs are retained per
                Vercel's data-retention policies and do not include routing
                numbers in error logs.
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
                13, please contact us.
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
                If you have any questions about this Privacy Policy, please
                reach out via the{" "}
                <Link
                  href="/"
                  className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-medium"
                >
                  Check4Real homepage
                </Link>
                .
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
