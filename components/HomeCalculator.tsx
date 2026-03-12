"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { formatNumber } from "@/lib/formatNumber";
import {
  calculatePercentage,
  calculateWhatPercent,
  calculatePercentageChange,
} from "@/lib/calculations";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const QUICK_PERCENTAGES = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100];

type Mode = "percent-of" | "what-percent" | "percent-change";

const MODES: { id: Mode; label: string; short: string }[] = [
  { id: "percent-of", label: "What is X% of Y?", short: "% of Number" },
  { id: "what-percent", label: "X is what % of Y?", short: "X is what %" },
  { id: "percent-change", label: "% Increase / Decrease", short: "% Change" },
];

const EXAMPLES: Record<
  Mode,
  { label: string; result: string; a: string; b: string }[]
> = {
  "percent-of": [
    { label: "10% of 200", result: "20", a: "10", b: "200" },
    { label: "20% of 150", result: "30", a: "20", b: "150" },
    { label: "15% of 80",  result: "12", a: "15", b: "80"  },
    { label: "25% of 400", result: "100", a: "25", b: "400" },
    { label: "50% of 90",  result: "45", a: "50", b: "90"  },
    { label: "5% of 500",  result: "25", a: "5",  b: "500" },
  ],
  "what-percent": [
    { label: "30 of 150",  result: "20%",   a: "30",  b: "150" },
    { label: "15 of 60",   result: "25%",   a: "15",  b: "60"  },
    { label: "45 of 180",  result: "25%",   a: "45",  b: "180" },
    { label: "12 of 48",   result: "25%",   a: "12",  b: "48"  },
    { label: "7 of 28",    result: "25%",   a: "7",   b: "28"  },
    { label: "200 of 800", result: "25%",   a: "200", b: "800" },
  ],
  "percent-change": [
    { label: "100 → 120", result: "+20%",  a: "100", b: "120" },
    { label: "80 → 100",  result: "+25%",  a: "80",  b: "100" },
    { label: "200 → 150", result: "−25%",  a: "200", b: "150" },
    { label: "50 → 75",   result: "+50%",  a: "50",  b: "75"  },
    { label: "90 → 63",   result: "−30%",  a: "90",  b: "63"  },
    { label: "40 → 52",   result: "+30%",  a: "40",  b: "52"  },
  ],
};

function EmptyState({
  mode,
  onSelect,
}: {
  mode: Mode;
  onSelect: (a: string, b: string) => void;
}) {
  const examples = EXAMPLES[mode];
  return (
    <div className="mt-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Try an example
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {examples.map((ex) => (
          <button
            key={ex.label}
            onClick={() => onSelect(ex.a, ex.b)}
            className="cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-left transition-all hover:border-blue-300 hover:bg-white hover:shadow-sm"
          >
            <span className="block text-xs text-gray-500">{ex.label}</span>
            <span className="mt-0.5 block text-base font-bold text-blue-600">
              {ex.result}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HomeCalculator() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<Mode>("percent-of");

  // Mode 1: % of number
  const [pct1, setPct1] = useState("");
  const [num1, setNum1] = useState("");

  // Mode 2: X is what % of Y
  const [part, setPart] = useState("");
  const [whole, setWhole] = useState("");

  // Mode 3: % change
  const [fromVal, setFromVal] = useState("");
  const [toVal, setToVal] = useState("");

  useEffect(() => {
    const p = searchParams.get("percent");
    const n = searchParams.get("number");
    if (p) setPct1(p);
    if (n) setNum1(n);
  }, [searchParams]);

  const p1 = parseFloat(pct1);
  const n1 = parseFloat(num1);
  const hasResult1 = !isNaN(p1) && !isNaN(n1);
  const result1 = hasResult1 ? calculatePercentage(p1, n1) : null;

  const partNum = parseFloat(part);
  const wholeNum = parseFloat(whole);
  const hasResult2 = !isNaN(partNum) && !isNaN(wholeNum) && wholeNum !== 0;
  const result2 = hasResult2 ? calculateWhatPercent(partNum, wholeNum) : null;

  const fromNum = parseFloat(fromVal);
  const toNum = parseFloat(toVal);
  const hasResult3 = !isNaN(fromNum) && !isNaN(toNum) && fromNum !== 0;
  const result3 = hasResult3 ? calculatePercentageChange(fromNum, toNum) : null;

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {/* Mode tabs */}
        <div className="flex border-b border-gray-200">
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex-1 cursor-pointer px-3 py-3.5 text-sm font-medium transition-colors ${
                mode === m.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              <span className="hidden sm:block">{m.label}</span>
              <span className="block sm:hidden">{m.short}</span>
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8">
          {mode === "percent-of" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                id="pct1"
                label="Percentage (%)"
                value={pct1}
                onChange={setPct1}
                placeholder="e.g. 20"
              />
              <InputField
                id="num1"
                label="Number"
                value={num1}
                onChange={setNum1}
                placeholder="e.g. 150"
              />
            </div>
          )}

          {mode === "what-percent" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                id="part"
                label="Value (X)"
                value={part}
                onChange={setPart}
                placeholder="e.g. 30"
              />
              <InputField
                id="whole"
                label="Total (Y)"
                value={whole}
                onChange={setWhole}
                placeholder="e.g. 150"
              />
            </div>
          )}

          {mode === "percent-change" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                id="from"
                label="Original Value"
                value={fromVal}
                onChange={setFromVal}
                placeholder="e.g. 100"
              />
              <InputField
                id="to"
                label="New Value"
                value={toVal}
                onChange={setToVal}
                placeholder="e.g. 120"
              />
            </div>
          )}

          {mode === "percent-of" &&
            (hasResult1 && result1 !== null ? (
              <ResultCard
                label={`${formatNumber(p1)}% of ${formatNumber(n1)}`}
                result={formatNumber(result1)}
                calculation={`(${formatNumber(p1)} × ${formatNumber(n1)}) ÷ 100 = ${formatNumber(result1)}`}
              />
            ) : (
              <EmptyState
                mode="percent-of"
                onSelect={(a, b) => { setPct1(a); setNum1(b); }}
              />
            ))}

          {mode === "what-percent" &&
            (hasResult2 && result2 !== null ? (
              <ResultCard
                label={`${formatNumber(partNum)} is what % of ${formatNumber(wholeNum)}`}
                result={`${formatNumber(result2)}%`}
                calculation={`(${formatNumber(partNum)} ÷ ${formatNumber(wholeNum)}) × 100 = ${formatNumber(result2)}%`}
              />
            ) : (
              <EmptyState
                mode="what-percent"
                onSelect={(a, b) => { setPart(a); setWhole(b); }}
              />
            ))}

          {mode === "percent-change" &&
            (hasResult3 && result3 !== null ? (
              <ResultCard
                label={`${result3 >= 0 ? "Increase" : "Decrease"} from ${formatNumber(fromNum)} to ${formatNumber(toNum)}`}
                result={`${result3 >= 0 ? "+" : ""}${formatNumber(result3)}%`}
                calculation={`((${formatNumber(toNum)} - ${formatNumber(fromNum)}) ÷ ${formatNumber(fromNum)}) × 100 = ${formatNumber(result3)}%`}
              />
            ) : (
              <EmptyState
                mode="percent-change"
                onSelect={(a, b) => { setFromVal(a); setToVal(b); }}
              />
            ))}
        </div>
      </div>

      {/* Quick percentages – mode 1 only */}
      {mode === "percent-of" && !isNaN(n1) && n1 > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            Quick Percentages
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {QUICK_PERCENTAGES.map((qp) => {
              const qResult = calculatePercentage(qp, n1);
              return (
                <button
                  key={qp}
                  onClick={() => setPct1(String(qp))}
                  className="cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <span className="block text-sm font-semibold text-blue-600">
                    {qp}%
                  </span>
                  <span className="mt-0.5 block text-xs text-gray-500">
                    of {formatNumber(n1)}
                  </span>
                  <span className="mt-1 block text-base font-bold text-gray-900">
                    {formatNumber(qResult)}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
