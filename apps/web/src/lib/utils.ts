/**
 * Minimal className combiner.
 * Matches the named export expected by: import { cn } from "@/lib/utils"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}