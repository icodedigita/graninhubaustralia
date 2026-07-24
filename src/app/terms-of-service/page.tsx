import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions for using the ${siteConfig.name} website and services.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" updated="24 July 2026">
      <LegalSection heading="Acceptance of terms">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website
          located at {siteConfig.url} (the &ldquo;Website&rdquo;), operated by{" "}
          {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), an Australian grain
          export business based in {siteConfig.contact.address}. By accessing
          or using the Website, you agree to be bound by these Terms. If you
          do not agree, please do not use the Website.
        </p>
      </LegalSection>

      <LegalSection heading="Nature of the website">
        <p>
          This Website provides general information about {siteConfig.name}
          and our range of pulses, lentils and grains, and allows visitors to
          submit inquiries and quote requests. The Website is not an online
          store — no orders, payments or contracts of sale are concluded
          through the Website. All orders and export contracts are agreed
          separately in writing between {siteConfig.name} and the buyer,
          following an inquiry.
        </p>
      </LegalSection>

      <LegalSection heading="No offer or binding quotation">
        <p>
          Product information, pricing indications, availability and
          specifications displayed on the Website are provided for general
          guidance only and do not constitute a binding offer. Any quotation
          provided in response to an inquiry is subject to confirmation,
          product availability, and formal agreement of quantity, price,
          Incoterms, packaging and delivery terms between the parties.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy of information">
        <p>
          We take reasonable care to ensure information on the Website is
          accurate and current, including product specifications, nutritional
          information and imagery. However, agricultural products vary by
          season and harvest, and specifications for a specific order will be
          confirmed in the relevant sales contract, contract specification
          sheet or certificate of analysis. We do not warrant that all
          information on the Website is complete, accurate or up to date at
          all times.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          All content on the Website — including text, graphics, logos,
          product images and layout — is owned by or licensed to{" "}
          {siteConfig.name} and is protected by Australian and international
          copyright and trademark laws. You may not reproduce, distribute or
          create derivative works from any content on this Website without
          our prior written consent, other than for personal, non-commercial
          reference.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>You agree not to use the Website to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Submit false, misleading or fraudulent inquiries</li>
          <li>Attempt to gain unauthorised access to our systems or data</li>
          <li>Introduce viruses, malware or other harmful code</li>
          <li>Scrape, harvest or misuse content or contact information from the Website</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Third-party links">
        <p>
          The Website may contain links to third-party sites (for example,
          WhatsApp or social media platforms). We are not responsible for the
          content, accuracy or privacy practices of any third-party sites.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the maximum extent permitted by law, {siteConfig.name} excludes
          all liability for any loss or damage arising from your use of, or
          inability to use, the Website, including indirect or consequential
          loss. Nothing in these Terms excludes, restricts or modifies any
          consumer guarantee, right or remedy under the Australian Consumer
          Law that cannot lawfully be excluded.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These Terms are governed by the laws of the State of Victoria,
          Australia, and you submit to the non-exclusive jurisdiction of the
          courts of Victoria, Australia in respect of any dispute arising out
          of or in connection with these Terms or the Website.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these Terms from time to time. Continued use of the
          Website after changes are posted constitutes acceptance of the
          updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <ul className="space-y-1">
          <li>Email: {siteConfig.contact.email}</li>
          <li>Phone: {siteConfig.contact.phoneDisplay}</li>
          <li>Address: {siteConfig.contact.address}</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
