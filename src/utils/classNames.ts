type ClassValue = null | string | number | boolean | undefined | ClassValue[] | { [key: string]: unknown };

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (let i = 0; i < inputs.length; i++) {
    const arg = inputs[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = cn(...arg);
        if (inner) classes.push(inner);
      }
    } else if (argType === "object") {
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        classes.push(arg.toString());
        continue;
      }

      const obj = arg as Record<string, unknown>;

      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}
