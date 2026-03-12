import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import CalculatorShell from "@/components/CalculatorShell";
import DiscountCalc from "@/components/DiscountCalc";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = createMetadata({
  title: "Discount Calculator | FastPercentage",
  description: "Calculate the final price after a discount instantly.",
  path: "/discount-calculator",
});

const examples = [
  { price: 100, discount: 20, result: 80 },
  { price: 250, discount: 15, result: 212.5 },
  { price: 80, discount: 50, result: 40 },
];

const faqs = [
  {
    q: "What is a discount percentage?",
    a: "A discount percentage is the portion of the original price that is taken off. For example, a 20% discount on $100 means $20 is deducted.",
  },
  {
    q: "How do you calculate the final price after discount?",
    a: "Multiply the original price by (1 minus the discount percentage divided by 100). For example: 100 × (1 - 20/100) = 80.",
  },
];

export default function DiscountCalculatorPage() {
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
            Discount Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Calculate the final sale price after applying a percentage discount.
          </p>
        </section>

        <DiscountCalc />

        {/* Ad: rectangle – after calculator result */}
        <AdPlaceholder variant="rectangle" />

        {/* Explanation */}
        <section className="mt-12">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            How to Calculate a Discount
          </h2>
          <p className="text-gray-600">
            To calculate a discount, multiply the original price by one minus
            the discount percentage divided by 100.
          </p>
          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 font-mono text-sm text-gray-700 shadow-sm">
            Formula: Final Price = Original Price × (1 - Discount% ÷ 100)
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
                {ex.price} with {ex.discount}% off = <strong>{ex.result}</strong>
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
