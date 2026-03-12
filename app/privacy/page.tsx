import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import CalculatorShell from "@/components/CalculatorShell";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | FastPercentage",
  description: "Privacy policy for FastPercentage.online.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <CalculatorShell>
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
      </section>
      <div className="mx-auto max-w-2xl space-y-5 text-gray-600 leading-relaxed">
        <p>
          <strong className="text-gray-900">Effective Date:</strong> January 1, 2026
        </p>
        <p>
          FastPercentage.online (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) is committed to protecting your privacy. This Privacy
          Policy explains how we handle information when you use our website.
        </p>

        <h2 className="text-lg font-bold text-gray-900">
          No Account Required
        </h2>
        <p>
          Our calculators are free to use and do not require you to create an
          account or provide any personal information. All calculations are
          performed in your browser.
        </p>

        <h2 className="text-lg font-bold text-gray-900">
          Information We Collect
        </h2>
        <p>
          We do not collect sensitive personal data. No calculation inputs or
          results are stored on our servers.
        </p>

        <h2 className="text-lg font-bold text-gray-900">Analytics</h2>
        <p>
          Our site may use basic analytics tools (such as Google Analytics) to
          understand general usage patterns, including page views and visitor
          counts. This data is anonymized and aggregated.
        </p>

        <h2 className="text-lg font-bold text-gray-900">Advertising</h2>
        <p>
          Our site may display advertisements provided by third-party ad
          networks in the future. These services may use cookies or similar
          technologies to serve relevant ads. You can manage your cookie
          preferences through your browser settings.
        </p>

        <h2 className="text-lg font-bold text-gray-900">Cookies</h2>
        <p>
          We may use cookies for analytics and advertising purposes. Cookies are
          small text files stored on your device. You can disable cookies in your
          browser settings, though this may affect some site functionality.
        </p>

        <h2 className="text-lg font-bold text-gray-900">Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. We are not
          responsible for the privacy practices of other sites.
        </p>

        <h2 className="text-lg font-bold text-gray-900">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:hello@fastpercentage.online"
            className="text-blue-600 underline hover:text-blue-700"
          >
            hello@fastpercentage.online
          </a>
          .
        </p>

        <h2 className="text-lg font-bold text-gray-900">
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
      </div>
    </CalculatorShell>
  );
}
