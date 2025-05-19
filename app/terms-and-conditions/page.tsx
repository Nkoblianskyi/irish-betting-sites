import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms and Conditions | Best Irish Betting Sites",
  description: "Read our terms and conditions for using the Best Irish Betting Sites website.",
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

          <div className="prose max-w-4xl">
            <p>Last updated: April 2023</p>

            <p>
              Please review these Terms and Conditions thoroughly before accessing or using the BestIrishBettingSite.com
              website.
            </p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or utilizing our website, you acknowledge and agree to be bound by these Terms and Conditions
              and our Privacy Policy. Should you disagree with any portion of these terms, you must refrain from
              accessing the website.
            </p>

            <h2>2. Informational Purpose</h2>
            <p>
              The information provided on BestIrishBettingSite.com is intended solely for general informational
              purposes. While we endeavor to maintain current and accurate information, we offer no representations or
              warranties, whether express or implied, regarding the completeness, accuracy, reliability, suitability, or
              availability of the information, products, services, or related graphics contained within the website.
            </p>

            <h2>3. Age Verification</h2>
            <p>
              Our website is designed exclusively for individuals who have reached at least 18 years of age. By
              utilizing our website, you confirm that you meet or exceed this age requirement.
            </p>

            <h2>4. External Website Links</h2>
            <p>
              Our website may contain links to external websites that operate independently from our control. We cannot
              guarantee the accuracy, relevance, timeliness, or completeness of information presented on these external
              websites.
            </p>

            <h2>5. Affiliate Relationship Disclosure</h2>
            <p>
              BestIrishBettingSite.com participates in affiliate partnerships with various betting operators. We may
              receive commission payments when you follow our links to these sites and subsequently register or make
              deposits. This arrangement does not influence our reviews or recommendations, which remain based on
              comprehensive research and objective testing.
            </p>

            <h2>6. Intellectual Property Rights</h2>
            <p>
              Unless otherwise specified, BestIrishBettingSite.com and/or its licensors maintain ownership of all
              intellectual property rights for materials presented on the website. All intellectual property rights
              remain reserved.
            </p>

            <h2>7. Liability Limitations</h2>
            <p>
              Under no circumstances shall BestIrishBettingSite.com, or any of its officers, directors, or employees,
              bear liability for anything arising from or connected with your use of this website.
            </p>

            <h2>8. Terms Modification</h2>
            <p>
              We reserve the right to modify these terms at any time at our discretion. We will notify users of any
              substantive changes by updating the "Last updated" date displayed at the top of this page.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have questions or require clarification regarding these Terms and Conditions, please contact our
              team at info@bestirishbettingsite.com.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
