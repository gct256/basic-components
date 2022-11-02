import { ClassNameValue } from "../types/ClassNameValue";

const join = (...args: ClassNameValue[]): string[] => {
  const names: string[] = [];

  for (const arg of args) {
    if (Array.isArray(arg)) {
      for (const x of join(...arg)) {
        if (!names.includes(x)) names.push(x);
      }
    } else if (typeof arg === "object" && arg !== null) {
      for (const [k, v] of Object.entries(arg)) {
        if (v) {
          for (const x of k.trim().split(/\s+/)) {
            if (x !== "" && !names.includes(x)) names.push(x);
          }
        } else {
          for (const x of k.trim().split(/\s+/)) {
            if (x !== "") {
              const index = names.indexOf(x);

              if (index >= 0) names[index] = "";
            }
          }
        }
      }
    } else if (typeof arg === "string" || typeof arg === "number") {
      for (const x of `${arg}`.trim().split(/\s+/)) {
        if (x !== "" && !names.includes(x)) names.push(x);
      }
    }
  }

  return names;
};

export const joinClassName = (
  ...args: ClassNameValue[]
): string | undefined => {
  const joined = join(...args).filter((x) => x.length > 0);

  return joined.length === 0 ? undefined : joined.join(" ");
};
