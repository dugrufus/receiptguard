import strings from './strings.json';
export function t(key: string): string {
  const parts = key.split('.');
  let cur: any = strings as any;
  for (const p of parts) { if (cur && p in cur) { cur = cur[p]; } else { return key; } }
  return typeof cur === 'string' ? cur : key;
}
export default t;