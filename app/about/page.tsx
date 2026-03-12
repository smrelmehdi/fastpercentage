import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import CalculatorShell from "@/components/CalculatorShell";

export const metadata: Metadata = createMetadata({
  title: "About | FastPercentage",
  description:
    "Learn about FastPercentage — a free online percentage calculator for everyday math.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <CalculatorShell>
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          About FastPercentage
        </h1>
      </section>
      <div className="mx-auto max-w-2xl space-y-5 text-gray-600 leading-relaxed">
        <p>
          FastPercentage is a free online percentage calculator website built for
          fast, everyday calculations. Whether you need to find a simple
          percentage, calculate a percentage increase or decrease, or figure out
          a discount, FastPercentage makes it quick and easy.
        </p>
        <p>
          Our tools are designed to be lightweight, mobile-friendly, and
          accessible to everyone. No sign-up required — just open the page and
          start calculating.
        </p>
        <p>
          FastPercentage covers the most common percentage calculations people
          need on a daily basis:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>Basic percentage calculations</li>
          <li>Percentage increase between two values</li>
          <li>Percentage decrease between two values</li>
          <li>Discount and sale price calculations</li>
        </ul>
        <p>
          We believe that useful tools should be simple, fast, and free. Thank
          you for using FastPercentage.
        </p>
      </div>
    </CalculatorShell>
  );
}
