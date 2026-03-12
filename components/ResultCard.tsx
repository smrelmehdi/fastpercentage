"use client";

import { useState } from "react";

interface ResultCardProps {
  label: string;
  result: string;
  calculation: string;
  extra?: { label: string; value: string };
}

export default function ResultCard({
  label,
  result,
  calculation,
  extra,
}: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 text-center">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-3 text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl">
        {result}
      </p>
      {extra && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">{extra.label}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {extra.value}
          </p>
        </div>
      )}
      <div className="mx-auto mt-6 max-w-md rounded-lg bg-gray-50 px-4 py-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Calculation
        </p>
        <p className="mt-1 font-mono text-sm text-gray-700">{calculation}</p>
      </div>
      <button
        onClick={handleCopy}
        className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
      >
        {copied ? (
          <>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy result
          </>
        )}
      </button>
    </div>
  );
}
