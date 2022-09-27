import * as React from "react";

import { ClassNameSet } from "./ClassNameSet";
import { joinClassName } from "./joinClassName";

/** Props: InputNumber */
export type InputNumberProps = {
  initialValue?: number;
  value?: number;

  disabled?: boolean;

  placeholder?: string;

  min?: number;
  max?: number;
  step?: number;

  classNameSet?: ClassNameSet;

  onChange?: (newValue: number) => void;
};

/** View: InputNumber */
export const InputNumber: React.FC<InputNumberProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      disabled,

      placeholder,

      min,
      max,
      step,

      classNameSet,

      onChange,
    }: InputNumberProps,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ): React.ReactElement | null => {
    const [inputValue, setInputValue] = React.useState(`${initialValue ?? ""}`);
    const change = React.useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(ev.currentTarget.valueAsNumber);

        if (value === undefined) setInputValue(ev.currentTarget.value);
      },
      [onChange, value],
    );

    return (
      <input
        ref={forwardedRef}
        type="number"
        disabled={disabled}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        value={value !== undefined ? value : inputValue}
        className={joinClassName(
          classNameSet?.InputNumber?.input?.base,
          disabled ? classNameSet?.InputNumber?.input?.disabled : "",
        )}
        onChange={change}
      />
    );
  },
);

InputNumber.displayName = "InputNumber";
