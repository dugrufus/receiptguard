import strings from "../copy/strings.json";

export function t(key: string): string {
  const parts = key.split(".");
  let cur: any = strings as any;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = (cur as any)[p];
    else return key;
  }
  return typeof cur === "string" ? cur : key;
}