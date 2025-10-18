export function formatCurrency(centsOrNumber: number, locale = 'en-US', currency = 'USD'): string {
  const val = Math.abs(centsOrNumber) > 1000 && Number.isInteger(centsOrNumber) ? centsOrNumber / 100 : centsOrNumber;
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(val);
}
export function formatPercentInt(value: number): string { return \\%\; }
export function formatAbsDateWithWeekday(date: Date | string, locale = 'en-US'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).format(d);
}