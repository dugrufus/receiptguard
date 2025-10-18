export const strings = require('./strings.json');
export function t(key: string): string {
  const parts = key.split('.');
  let cur: any = strings;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) { cur = cur[p]; } else { return key; }
  }
  return typeof cur === 'string' ? cur : key;
}