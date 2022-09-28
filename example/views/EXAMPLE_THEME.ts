import { Theme } from "../../src/types/Theme";

export const EXAMPLE_THEME: Theme = {
  InputText: {
    input: {
      base: [
        "w-full h-8 px-1",
        "border border-gray-500",
        "focus:outline-none focus:ring focus:bg-yellow-100",
      ],
      disabled: ["opacity-30"],
    },
  },
  InputTextArea: {
    input: {
      base: [
        "w-full p-1",
        "resize-y",
        "border border-gray-500",
        "focus:outline-none focus:ring focus:bg-yellow-100",
      ],
      disabled: ["opacity-30"],
    },
  },
  InputNumber: {
    input: {
      base: [
        "w-full h-8 px-1",
        "border border-gray-500",
        "focus:outline-none focus:ring focus:bg-yellow-100",
        "text-right",
      ],
      disabled: ["opacity-30"],
    },
  },
  InputRange: {
    wrapper: {
      base: ["w-full", "flex items-center gap-x-2"],
      disabled: ["opacity-30"],
    },
    range: {
      base: [
        "h-8",
        "flex-grow",
        "focus:outline-none focus:ring focus:bg-yellow-100",
      ],
    },
    input: {
      base: [
        "h-8 px-1",
        "border border-gray-500",
        "focus:outline-none focus:ring focus:bg-yellow-100",
        "text-right",
      ],
    },
  },

  Checkbox: {
    wrapper: {
      base: [
        "min-h-8 pr-2",
        "flex items-center",
        "relative",
        "focus-within:ring",
      ],
      disabled: ["opacity-30"],
    },
    input: {
      base: [
        "absolute",
        "left-0 top-0",
        "w-0 h-0",
        "opacity-0",
        "focus:outline-none",
      ],
    },
    span: {
      base: [
        "pl-2 relative",
        "flex items-center gap-x-2",
        "before:content-['']",
        "before:flex before:flex-shrink-0 before:justify-center before:items-center",
        "before:w-[1em] before:h-[1em]",
        "before:border before:border-black",
      ],
      checked: [
        "after:absolute after:left-2 after:ml-[0.125em] after:inset-x-0",
        "after:content-['']",
        "after:w-[0.75em] after:h-[0.5em]",
        "after:border-black after:border-l-[3px] after:border-b-[3px]",
        "after:-rotate-45 after:-translate-y-[0.125em]",
      ],
    },
  },

  SelectList: {
    wrapper: {
      disabled: ["opacity-30"],
    },
    select: {
      base: [
        "w-full h-8",
        "border border-black",
        "focus:outline-none focus:ring focus:bg-yellow-100",
      ],
      sized: ["h-auto", "rounded-none"],
    },
    option: {
      sized: ["h-9", "flex items-center"],
    },
  },

  InputList: {
    input: {
      base: [
        "w-full h-8 px-1",
        "border border-gray-500",
        "focus:outline-none focus:ring focus:bg-yellow-100",
      ],
      disabled: ["opacity-30"],
    },
  },

  RadioGroup: {
    area: {
      base: ["flex flex-wrap gap-2"],
      disabled: ["opacity-30"],
    },
    wrapper: {
      base: [
        "min-h-8 pr-2",
        "flex items-center",
        "relative",
        "focus-within:ring",
      ],
    },
    input: {
      base: [
        "absolute",
        "left-0 top-0",
        "w-0 h-0",
        "opacity-0",
        "focus:outline-none",
      ],
    },
    span: {
      base: [
        "pl-2 relative",
        "flex items-center gap-x-2",
        "before:content-['']",
        "before:flex before:flex-shrink-0 before:justify-center before:items-center",
        "before:w-[1em] before:h-[1em]",
        "before:rounded-full",
        "before:border before:border-black",
      ],
      checked: [
        "after:absolute after:left-2 after:ml-[0.25em] after:inset-x-0",
        "after:content-['']",
        "after:w-[0.5em] after:h-[0.5em]",
        "after:rounded-full",
        "after:bg-black",
      ],
    },
  },
  Button: {
    button: {
      base: [
        "h-8 px-1",
        "border border-gray-500",
        "focus:outline-none focus:ring",
      ],
      disabled: ["opacity-30"],
    },
  },
};
