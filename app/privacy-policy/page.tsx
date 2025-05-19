import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | Best Irish Betting Sites",
  description: "Read our privacy policy to understand how we collect and use your data.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-black">Privacy Policy</h1>

          <div className="prose max-w-4xl">
            <p>Last updated: May 2025</p>

            <p>
              At BestIrishBettingSite.com, safeguarding your privacy remains our paramount concern. This Privacy Policy
              outlines our practices regarding the collection, utilization, and protection of your information when you
              visit our website.
            </p>

            <h2>1. Information Collection Practices</h2>
            <p>We may gather the following categories of information:</p>
            <ul>
              <li>
                <strong>Personal Identifiers:</strong> When subscribing to our newsletter or contacting our team, we may
                collect your name and email address.
              </li>
              <li>
                <strong>Usage Statistics:</strong> We automatically gather data regarding your interactions with our
                website, including pages visited, time spent viewing content, and referring websites.
              </li>
              <li>
                <strong>Cookies and Related Technologies:</strong> We employ cookies to optimize your browsing
                experience. For additional details, please consult our Cookie Policy.
              </li>
            </ul>

            <h2>2. Information Utilization</h2>
            <p>We utilize collected information for various purposes, including:</p>
            <ul>
              <li>Operating and maintaining our website infrastructure</li>
              <li>Enhancing website functionality and user experience</li>
              <li>Distributing newsletters and marketing communications (with your explicit consent)</li>
              <li>Addressing your inquiries and service requests</li>
              <li>Analyzing usage patterns to refine our content and service offerings</li>
            </ul>

            <h2>3. Information Sharing Practices</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              explicit consent, except under the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist in our website operations</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>

            <h2>4. Data Protection Measures</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information. However, no data transmission method over the Internet or electronic storage system can
              guarantee 100% security, and we cannot provide absolute assurance regarding data protection.
            </p>

            <h2>5. Your Data Rights</h2>
            <p>
              Depending on your geographic location, you may possess certain rights regarding your personal information,
              including:
            </p>
            <ul>
              <li>The right to access your stored personal information</li>
              <li>The right to rectify inaccurate or incomplete data</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>

            <h2>6. Privacy Policy Updates</h2>
            <p>
              We may periodically update our Privacy Policy to reflect changes in our practices or regulatory
              requirements. We will notify you of any significant changes by posting the revised Privacy Policy on this
              page and updating the "Last updated" date.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              If you have questions or concerns regarding this Privacy Policy, please contact our privacy team at
              privacy@bestirishbettingsite.com.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
