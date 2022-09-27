import { ClassName } from "../types/ClassName";

const join = (...args: ClassName[]): string[] => {
  const names: string[] = [];

  for (const arg of args) {
    if (Array.isArray(arg)) {
      names.push(...join(...arg));
    } else if (typeof arg === "object" && arg !== null) {
      for (const [k, v] of Object.entries(arg)) {
        if (v) names.push(...k.trim().split(/\s+/));
      }
    } else if (typeof arg === "string") {
      names.push(...arg.trim().split(/\s+/));
    }
  }

  return names;
};

export const joinClassName = (...args: ClassName[]): string =>
  Array.from(new Set<string>(join(...args))).join(" ");
