import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | Best Irish Betting Sites",
  description: "Learn about our mission to provide the most reliable information on Irish betting sites.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">About bestirishbettingsite.com</h1>

          <div className="prose max-w-4xl">
            <h2>Our Purpose</h2>
            <p>
              At 10IrishBettingSites.com, we're committed to guiding Irish bettors toward the best online betting
              platforms. With a crowded market of sportsbooks, our goal is to streamline your decision-making by
              highlighting only the most reliable and high-value options.
            </p>

            <h2>What We Offer</h2>
            <p>
              Our experts rigorously analyze each betting site, focusing on critical aspects like welcome offers, odds
              competitiveness, range of sports, user experience, payout efficiency, customer service, and security
              measures. Every site we recommend undergoes thorough, hands-on evaluation.
            </p>
            <p>
              We exclusively promote platforms licensed under Irish regulations, ensuring they meet strict standards for
              safety, fairness, and responsible gambling.
            </p>

            <h2>Our Core Principles</h2>
            <ul>
              <li>
                <strong>Clarity:</strong> We provide straightforward explanations of how we assess and rank betting
                sites.
              </li>
              <li>
                <strong>Objectivity:</strong> Our reviews remain unbiased, unaffected by any affiliate partnerships.
              </li>
              <li>
                <strong>Reliability:</strong> We regularly update our recommendations to reflect the latest industry
                trends.
              </li>
              <li>
                <strong>Safe Betting:</strong> We advocate for responsible gambling and connect users to support
                resources when necessary.
              </li>
            </ul>

            <h2>Who We Are</h2>
            <p>
              Our team comprises sports fans, tech specialists, and iGaming experts united by a passion for delivering
              valuable insights. Drawing on deep industry knowledge and a love for betting, we provide practical
              guidance tailored to Irish punters.
            </p>

            <h2>How We Sustain Our Work</h2>
            <p>
              Access to our content is entirely free. We fund our operations through affiliate commissions earned when
              users join betting sites via our links. This model enables us to maintain a premium service without any
              cost to you.
            </p>
            <p>
              Rest assured, our partnerships never influence our evaluations. Our rankings are driven purely by the
              quality and performance of each platform.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
