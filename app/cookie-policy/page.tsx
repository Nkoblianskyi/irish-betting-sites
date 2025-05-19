import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | Best Irish Betting Sites",
  description: "Learn about how we use cookies on our website.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-black">Cookie Policy</h1>

          <div className="prose max-w-4xl">
            <p>Last updated: April 2025</p>

            <p>
              This Cookie Policy explains how BestIrishBettingSite.com utilizes cookies and similar technologies to
              recognize you during website visits. It clarifies what these technologies are, why we use them, and
              outlines your rights to control their implementation.
            </p>

            <h2>1. Understanding Cookies</h2>
            <p>
              Cookies are small data files placed on your computer or mobile device when you visit a website. Website
              owners widely implement cookies to enable site functionality, improve operational efficiency, and generate
              usage analytics.
            </p>

            <h2>2. Cookie Categories We Employ</h2>
            <p>We utilize the following cookie types:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are fundamental to website functionality and cannot be
                disabled in our systems. They typically activate in response to your actions, such as privacy preference
                settings, login attempts, or form completions.
              </li>
              <li>
                <strong>Analytical Cookies:</strong> These cookies enable us to track visitor statistics and traffic
                sources, allowing us to measure and enhance our site's performance. They help us identify which pages
                attract the most interest and monitor how visitors navigate throughout the site.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Our advertising partners may deploy these cookies through our site.
                These companies may use the data to build a profile of your interests and display relevant
                advertisements on other websites you visit.
              </li>
            </ul>

            <h2>3. Cookie Management Options</h2>
            <p>
              You can configure or adjust your web browser controls to accept or decline cookies. Should you choose to
              reject cookies, you may still access our website, though certain functionality and areas may have limited
              accessibility.
            </p>

            <h2>4. Cookie Preference Settings</h2>
            <p>
              You can manage your cookie preferences through our consent banner that appears during your initial site
              visit. You may also update your preferences at any time by selecting the "Cookie Preferences" link located
              in our website footer.
            </p>

            <h2>5. Third-Party Cookie Usage</h2>
            <p>
              Beyond our own cookies, we may employ various third-party cookies to compile website usage statistics and
              deliver targeted advertisements both on and through our website.
            </p>

            <h2>6. Cookie Policy Updates</h2>
            <p>
              We may periodically update this Cookie Policy to reflect changes in our cookie practices or for
              operational, legal, or regulatory reasons. We encourage you to review this Cookie Policy regularly for the
              most current information about our cookie practices.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              If you have questions regarding our cookie practices or other technologies we employ, please contact our
              team at cookies@bestirishbettingsite.com.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
