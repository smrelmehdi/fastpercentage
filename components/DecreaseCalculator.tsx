"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/formatNumber";
import { calculatePercentageDecrease } from "@/lib/calculations";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

export default function DecreaseCalculator() {
  const [original, setOriginal] = useState("");
  const [newVal, setNewVal] = useState("");

  const orig = parseFloat(original);
  const nv = parseFloat(newVal);
  const hasResult = !isNaN(orig) && !isNaN(nv) && orig !== 0;
  const result = hasResult ? calculatePercentageDecrease(orig, nv) : null;

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="original"
          label="Original Value"
          value={original}
          onChange={setOriginal}
          placeholder="e.g. 100"
        />
        <InputField
          id="newValue"
          label="New Value"
          value={newVal}
          onChange={setNewVal}
          placeholder="e.g. 80"
        />
      </div>
      {hasResult && result !== null ? (
        <ResultCard
          label="Percentage Decrease"
          result={`${formatNumber(result)}%`}
          calculation={`((${formatNumber(orig)} - ${formatNumber(nv)}) ÷ ${formatNumber(orig)}) × 100 = ${formatNumber(result)}%`}
        />
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-gray-200 bg-gray-50 py-10 text-center text-sm text-gray-400">
          Enter values above to calculate percentage decrease
        </div>
      )}
    </div>
  );
}
