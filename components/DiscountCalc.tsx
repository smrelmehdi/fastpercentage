"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/formatNumber";
import { calculateDiscount } from "@/lib/calculations";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

export default function DiscountCalc() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const p = parseFloat(price);
  const d = parseFloat(discount);
  const hasResult = !isNaN(p) && !isNaN(d);
  const discountResult = hasResult ? calculateDiscount(p, d) : null;

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="price"
          label="Original Price"
          value={price}
          onChange={setPrice}
          placeholder="e.g. 100"
        />
        <InputField
          id="discount"
          label="Discount (%)"
          value={discount}
          onChange={setDiscount}
          placeholder="e.g. 20"
        />
      </div>
      {hasResult && discountResult ? (
        <ResultCard
          label="Final Price"
          result={formatNumber(discountResult.finalPrice)}
          calculation={`${formatNumber(p)} × (1 - ${formatNumber(d)} ÷ 100) = ${formatNumber(discountResult.finalPrice)}`}
          extra={{ label: "You Save", value: formatNumber(discountResult.savings) }}
        />
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-gray-200 bg-gray-50 py-10 text-center text-sm text-gray-400">
          Enter values above to calculate the discounted price
        </div>
      )}
    </div>
  );
}
