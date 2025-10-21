export function formatCurrency(value: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
}

export function formatPercentInt(value: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 0 }).format(value);
}

export function formatAbsDateWithWeekday(date: Date | string, locale = "en-US"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(locale, { weekday: "short", year: "numeric", month: "short", day: "numeric" });
}

const fmt = { formatCurrency, formatPercentInt, formatAbsDateWithWeekday };
export default fmt;