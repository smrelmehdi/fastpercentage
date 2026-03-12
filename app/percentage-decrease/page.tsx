import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import CalculatorShell from "@/components/CalculatorShell";
import DecreaseCalculator from "@/components/DecreaseCalculator";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = createMetadata({
  title: "Percentage Decrease Calculator | FastPercentage",
  description: "Calculate percentage decrease between two values instantly.",
  path: "/percentage-decrease",
});

const examples = [
  { from: 100, to: 80, result: "20%" },
  { from: 250, to: 200, result: "20%" },
  { from: 90, to: 45, result: "50%" },
];

const faqs = [
  {
    q: "What is percentage decrease?",
    a: "Percentage decrease measures how much a value has dropped relative to its original value, expressed as a percentage.",
  },
  {
    q: "How do you calculate decrease from two values?",
    a: "Subtract the new value from the original value, divide by the original value, then multiply by 100.",
  },
];

export default function PercentageDecreasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <CalculatorShell>
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Percentage Decrease Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Calculate the percentage decrease between an original value and a new
            value.
          </p>
        </section>

        <DecreaseCalculator />

        {/* Ad: rectangle – after calculator result */}
        <AdPlaceholder variant="rectangle" />

        {/* Explanation */}
        <section className="mt-12">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            How to Calculate Percentage Decrease
          </h2>
          <p className="text-gray-600">
            To calculate percentage decrease, subtract the new value from the
            original value, divide by the original value, then multiply by 100.
          </p>
          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 font-mono text-sm text-gray-700 shadow-sm">
            Formula: ((Original Value - New Value) ÷ Original Value) × 100
          </div>
        </section>

        {/* Examples */}
        <section className="mt-12">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Examples</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {examples.map((ex, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm"
              >
                {ex.from} → {ex.to} = <strong>{ex.result}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Ad: responsive – between examples and FAQ */}
        <AdPlaceholder variant="responsive" />

        {/* FAQ */}
        <section className="mt-0">
          <h2 className="mb-4 text-xl font-bold text-gray-900">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-gray-800">
                  {faq.q}
                </summary>
                <p className="border-t border-gray-100 px-5 py-4 text-sm text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </CalculatorShell>
    </>
  );
}
