export function calculatePercentage(percent: number, number: number): number {
  return (percent * number) / 100;
}

export function calculatePercentageIncrease(
  original: number,
  newValue: number
): number {
  return ((newValue - original) / original) * 100;
}

export function calculatePercentageDecrease(
  original: number,
  newValue: number
): number {
  return ((original - newValue) / original) * 100;
}

export function calculateDiscount(
  price: number,
  discountPercent: number
): { finalPrice: number; savings: number } {
  const finalPrice = price * (1 - discountPercent / 100);
  const savings = price - finalPrice;
  return { finalPrice, savings };
}

export function calculateWhatPercent(part: number, whole: number): number {
  return (part / whole) * 100;
}

export function calculatePercentageChange(from: number, to: number): number {
  return ((to - from) / from) * 100;
}
