import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { createMetadata } from "@/lib/seo";
import CalculatorShell from "@/components/CalculatorShell";
import HomeCalculator from "@/components/HomeCalculator";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = createMetadata({
  title: "Percentage Calculator – Increase, Decrease & Discount Calculator",
  description:
    "Free percentage calculator to calculate percentage increase, decrease, discounts and percentage values instantly online.",
  path: "",
});

const toolCards = [
  {
    href: "/percentage-increase",
    title: "Percentage Increase",
    description: "Calculate the percentage increase between two values.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    href: "/percentage-decrease",
    title: "Percentage Decrease",
    description: "Calculate the percentage decrease between two values.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
        <polyline points="17 18 23 18 23 12" />
      </svg>
    ),
    color: "text-red-500 bg-red-50",
  },
  {
    href: "/discount-calculator",
    title: "Discount Calculator",
    description: "Calculate the final price after a discount.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    color: "text-blue-500 bg-blue-50",
  },
];

const faqs = [
  {
    q: "What is a percentage?",
    a: "A percentage is a value expressed out of 100.",
  },
  {
    q: "How do you calculate percentage increase?",
    a: "Percentage increase = ((new value - original value) ÷ original value) × 100",
  },
  {
    q: "How do you calculate percentage decrease?",
    a: "Percentage decrease = ((original value - new value) ÷ original value) × 100",
  },
  {
    q: "How do you calculate a discount percentage?",
    a: "Discount percentage = ((original price - sale price) ÷ original price) × 100",
  },
];

function jsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "FastPercentage",
      url: "https://fastpercentage.online",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

export default function HomePage() {
  const schemas = jsonLd();

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CalculatorShell>
        {/* Hero */}
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Percentage Calculator – Increase, Decrease &amp; Discount Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Calculate percentages instantly. Find percentage increase, decrease,
            discounts and more.
          </p>
        </section>

        {/* Calculator */}
        <Suspense>
          <HomeCalculator />
        </Suspense>

        {/* Ad: responsive – natural break after calculator */}
        <AdPlaceholder variant="responsive" />

        {/* Tool cards */}
        <section className="mt-0">
          <div className="grid gap-4 sm:grid-cols-3">
            {toolCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className={`mb-3 inline-flex items-center justify-center rounded-lg p-2 ${card.color}`}>
                  {card.icon}
                </div>
                <h2 className="font-bold text-gray-900">{card.title}</h2>
                <p className="mt-1.5 text-sm text-gray-500">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Ad: rectangle – mid-page break */}
        <AdPlaceholder variant="rectangle" />

        {/* How to Calculate */}
        <section className="mt-0">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            How to Calculate Percentages
          </h2>
          <p className="text-gray-600">
            To calculate a percentage, multiply the number by the percentage and
            divide by 100.
          </p>
          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 font-mono text-sm text-gray-700 shadow-sm">
            <p>Formula: Result = (% × Number) ÷ 100</p>
            <p className="mt-2">
              Example: 20% of 150 = (20 × 150) ÷ 100 = 30
            </p>
          </div>
        </section>

        {/* Ad: responsive – before FAQ, catches mid-scroll users */}
        <AdPlaceholder variant="responsive" />

        {/* FAQ */}
        <section className="mt-0">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
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
