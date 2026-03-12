import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import CalculatorShell from "@/components/CalculatorShell";

export const metadata: Metadata = createMetadata({
  title: "Contact | FastPercentage",
  description: "Contact FastPercentage for general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <CalculatorShell>
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Contact
        </h1>
      </section>
      <div className="mx-auto max-w-2xl space-y-5 text-gray-600 leading-relaxed">
        <p>
          For general inquiries, contact:{" "}
          <a
            href="mailto:hello@fastpercentage.online"
            className="text-blue-600 underline hover:text-blue-700"
          >
            hello@fastpercentage.online
          </a>
        </p>
        <p>
          We aim to respond to all inquiries as quickly as possible. Thank you
          for using FastPercentage.
        </p>
      </div>
    </CalculatorShell>
  );
}
