/**
 * Combines class names, filtering out falsy values.
 * Lightweight alternative to clsx — no extra dependency.
 */
export function cn(
  ...classes: Array<string | number | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
