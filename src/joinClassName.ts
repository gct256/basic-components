export const joinClassName = (...args: (string | undefined)[]): string =>
  args.filter((x) => x !== undefined && x.length > 0).join(" ");
