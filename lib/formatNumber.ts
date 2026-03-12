/**
 * Format a number cleanly: remove unnecessary trailing zeros.
 * 30 => "30", 22.5 => "22.5", 22.50 => "22.5", 1.5000 => "1.5"
 */
export function formatNumber(value: number): string {
  return parseFloat(value.toFixed(10)).toString();
}
