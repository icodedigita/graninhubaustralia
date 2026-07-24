import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `Export logistics, Incoterms, lead times and documentation for ${siteConfig.name} orders.`,
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage title="Shipping Policy" updated="24 July 2026">
      <LegalSection heading="Overview">
        <p>
          {siteConfig.name} exports pulses, lentils and grains from Australia
          to buyers worldwide. This page explains how our shipping and export
          logistics process generally works. Because every order is confirmed
          individually, the specific terms for your order — Incoterm,
          quantity, packaging, vessel/container details and delivery
          timeframe — are set out in the sales contract or order confirmation
          agreed between you and {siteConfig.name}, not on this website.
        </p>
      </LegalSection>

      <LegalSection heading="Export terms (Incoterms)">
        <p>
          We ship under internationally recognised Incoterms® (2020),
          typically including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>FOB (Free on Board)</strong> — goods loaded onto the
            shipping vessel at an Australian port; buyer arranges onward
            freight and insurance
          </li>
          <li>
            <strong>CFR / CIF (Cost and Freight / Cost, Insurance and
            Freight)</strong> — we arrange and cover freight (and, for CIF,
            marine insurance) to the destination port
          </li>
          <li>
            <strong>EXW (Ex Works)</strong> — goods made available for
            collection from our facility, with the buyer arranging all
            transport
          </li>
        </ul>
        <p>
          The applicable Incoterm for your order will be confirmed in writing
          before shipment.
        </p>
      </LegalSection>

      <LegalSection heading="Packaging &amp; container options">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Bulk container (loose loaded, food-grade liners available)</li>
          <li>25kg / 50kg woven PP bags</li>
          <li>Jumbo (bulk) bags of approximately 500kg&ndash;1,000kg</li>
          <li>Custom private-label bagging on request, subject to minimum order quantities</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Lead times">
        <p>
          Typical lead time from confirmed order and deposit to vessel
          loading is generally 2&ndash;6 weeks, depending on product, packaging
          format, container/vessel availability and destination port. Peak
          harvest and shipping seasons may extend lead times. Estimated
          shipment and arrival dates provided in a quote or order
          confirmation are indicative only and not guaranteed delivery dates,
          as international freight is subject to factors outside our
          control (see &ldquo;Delays outside our control&rdquo; below).
        </p>
      </LegalSection>

      <LegalSection heading="Export documentation">
        <p>
          Depending on the destination country&rsquo;s import requirements, we
          arrange and provide relevant export documentation, which may
          include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Commercial invoice and packing list</li>
          <li>Bill of lading</li>
          <li>Certificate of origin</li>
          <li>Phytosanitary certificate</li>
          <li>Fumigation certificate (where required)</li>
          <li>Certificate of analysis / quality certificate</li>
        </ul>
        <p>
          Buyers are responsible for confirming any additional
          import permits, licences or documentation required by their own
          country&rsquo;s customs authority.
        </p>
      </LegalSection>

      <LegalSection heading="Customs, duties &amp; import compliance">
        <p>
          Unless otherwise agreed in writing (for example, under a
          DDP arrangement), the buyer is responsible for import clearance,
          duties, taxes and any charges applied by the destination country.
          We recommend buyers confirm import requirements for pulses and
          grains with their local customs authority before placing an order.
        </p>
      </LegalSection>

      <LegalSection heading="Quality &amp; inspection">
        <p>
          All shipments are prepared to the specifications agreed in the
          sales contract. Where agreed, pre-shipment inspection or
          third-party quality certification (e.g. SGS) can be arranged at
          the buyer&rsquo;s request, generally at the buyer&rsquo;s cost unless
          otherwise negotiated.
        </p>
      </LegalSection>

      <LegalSection heading="Delays outside our control">
        <p>
          {siteConfig.name} is not liable for delays or losses caused by
          events outside our reasonable control, including but not limited
          to port congestion, vessel/container shortages, adverse weather,
          customs delays, strikes, or other force majeure events. We will
          keep buyers informed of any known delays affecting their shipment.
        </p>
      </LegalSection>

      <LegalSection heading="Damaged or short shipments">
        <p>
          Any claim relating to shortage, damage or quality discrepancy on
          arrival should be reported to us in writing within the timeframe
          specified in the sales contract, together with supporting
          documentation (such as photos, survey reports or bill of lading
          discrepancy notes), so we can investigate with our freight and
          insurance partners.
        </p>
      </LegalSection>

      <LegalSection heading="Contact our logistics team">
        <p>
          For shipping quotes, lead times or logistics questions on a
          specific order, please get in touch:
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
