import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import CalculatorShell from "@/components/CalculatorShell";
import IncreaseCalculator from "@/components/IncreaseCalculator";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = createMetadata({
  title: "Percentage Increase Calculator – Calculate % Increase Online",
  description:
    "Free percentage increase calculator. Enter two values and instantly find the % increase between them. Formula: ((New − Old) ÷ Old) × 100. Fast and accurate.",
  path: "/percentage-increase",
});

const examples = [
  { from: 100, to: 120, result: "20%" },
  { from: 80, to: 100, result: "25%" },
  { from: 200, to: 260, result: "30%" },
];

const faqs = [
  {
    q: "What is percentage increase?",
    a: "Percentage increase measures how much a value has grown relative to its original value, expressed as a percentage.",
  },
  {
    q: "How do you calculate increase from two values?",
    a: "Subtract the original value from the new value, divide by the original value, then multiply by 100.",
  },
  {
    q: "What is the formula for percentage increase?",
    a: "The formula is: Percentage Increase = ((New Value − Original Value) ÷ Original Value) × 100.",
  },
  {
    q: "Can percentage increase be more than 100%?",
    a: "Yes. If a value doubles, that is a 100% increase. If it triples, that is a 200% increase. There is no upper limit.",
  },
  {
    q: "What is the difference between percentage increase and percentage points?",
    a: "Percentage increase is relative to the original value. Percentage points measure the absolute difference. Going from 10% to 15% is 5 percentage points, but a 50% relative increase.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fastpercentage.online" },
      { "@type": "ListItem", position: 2, name: "Percentage Increase Calculator", item: "https://fastpercentage.online/percentage-increase" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Calculate Percentage Increase",
    description: "Step-by-step guide to calculating the percentage increase between two numbers.",
    step: [
      { "@type": "HowToStep", name: "Find the difference", text: "Subtract the original value from the new value: New Value − Original Value." },
      { "@type": "HowToStep", name: "Divide by the original value", text: "Divide the difference by the original value." },
      { "@type": "HowToStep", name: "Multiply by 100", text: "Multiply the result by 100 to convert to a percentage." },
    ],
  },
];

export default function PercentageIncreasePage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
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
            Percentage Increase Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Calculate the percentage increase between an original value and a new
            value.
          </p>
        </section>

        <IncreaseCalculator />

        {/* Ad: rectangle – after calculator result */}
        <AdPlaceholder variant="rectangle" />

        {/* Explanation */}
        <section className="mt-12">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            How to Calculate Percentage Increase
          </h2>
          <p className="text-gray-600">
            To calculate percentage increase, subtract the original value from
            the new value, divide by the original value, then multiply by 100.
          </p>
          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 font-mono text-sm text-gray-700 shadow-sm">
            Formula: ((New Value - Original Value) ÷ Original Value) × 100
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
