import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="24 July 2026">
      <LegalSection heading="Overview">
        <p>
          {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to
          protecting your privacy in accordance with the Privacy Act 1988 (Cth) and
          the Australian Privacy Principles (APPs). This policy explains what
          personal information we collect through {siteConfig.url}, how we use
          and store it, and how you can access, correct or complain about the
          handling of your information.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>We collect personal information you provide directly to us, including when you:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Submit an inquiry or quote request form</li>
          <li>Contact us by email, phone or WhatsApp</li>
          <li>Subscribe to updates or communicate with us on social media</li>
        </ul>
        <p>
          This may include your name, company name, email address, phone
          number, country/destination, and the details of your product
          inquiry. We also automatically collect limited technical
          information (such as browser type, device information and general
          location derived from IP address) through standard web server and
          hosting logs.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your information">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To respond to your inquiries and provide quotes or product information</li>
          <li>To process and fulfil export orders, including logistics and customs documentation</li>
          <li>To communicate with you about your account, order or ongoing business relationship</li>
          <li>To improve our website, products and services</li>
          <li>To comply with legal, regulatory and export/customs obligations</li>
        </ul>
        <p>We do not sell or rent your personal information to third parties.</p>
      </LegalSection>

      <LegalSection heading="Disclosure of information">
        <p>We may share your information with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Service providers who help us operate our business, such as our
            website hosting provider (Cloudflare) and email delivery provider,
            solely to the extent needed to provide those services
          </li>
          <li>
            Freight forwarders, customs brokers and shipping lines, where
            necessary to fulfil an export order
          </li>
          <li>Government or regulatory bodies, where required by law</li>
        </ul>
        <p>
          Some of these service providers may process data on servers located
          outside Australia. Where this occurs, we take reasonable steps to
          ensure your information continues to be handled in line with the
          Australian Privacy Principles.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and website analytics">
        <p>
          Our website may use essential cookies required for the site to
          function, and may use analytics tools to understand general traffic
          patterns. You can control or disable cookies through your browser
          settings; doing so may affect some site functionality.
        </p>
      </LegalSection>

      <LegalSection heading="Data security">
        <p>
          We take reasonable technical and organisational steps to protect
          the personal information we hold from misuse, interference, loss,
          and unauthorised access, modification or disclosure. No method of
          transmission over the internet is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          We retain personal information only for as long as necessary to
          fulfil the purposes described in this policy, including any
          legal, accounting or export/customs record-keeping requirements,
          after which it is securely deleted or de-identified.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          Under the Privacy Act 1988 (Cth), you may request access to, or
          correction of, the personal information we hold about you. You may
          also lodge a complaint if you believe we have mishandled your
          information. To make a request or complaint, contact us using the
          details below — we will respond within a reasonable time. If you
          are not satisfied with our response, you may contact the Office of
          the Australian Information Commissioner (OAIC) at{" "}
          <a
            href="https://www.oaic.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-leaf-700 font-medium hover:underline"
          >
            oaic.gov.au
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="International visitors">
        <p>
          If you access our website from outside Australia, your information
          may be transferred to, stored, and processed in Australia. By using
          our website, you consent to this transfer.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time to reflect changes in
          our practices or legal requirements. The &ldquo;Last updated&rdquo; date at
          the top of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          For any privacy-related questions or requests, please contact us:
        </p>
        <ul className="space-y-1">
          <li>Email: {siteConfig.contact.email}</li>
          <li>Phone: {siteConfig.contact.phoneDisplay}</li>
          <li>Address: {siteConfig.contact.address}</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
