import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";

/** Props: InputNumber */
export type InputNumberProps = {
  initialValue?: number;
  value?: number;

  name?: string;
  disabled?: boolean;

  placeholder?: string;

  min?: number;
  max?: number;
  step?: number;

  onChange?: (newValue: number) => void;
};

/** View: InputNumber */
export const InputNumber: React.FC<InputNumberProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      name,
      disabled,

      placeholder,

      min,
      max,
      step,

      onChange,
    }: InputNumberProps,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ): React.ReactElement | null => {
    const theme = React.useContext(ThemeContext);
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
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        value={value !== undefined ? value : inputValue}
        className={joinClassName(
          theme?.InputNumber?.input?.base,
          disabled && theme?.InputNumber?.input?.disabled,
        )}
        onChange={change}
      />
    );
  },
);

InputNumber.displayName = "InputNumber";
