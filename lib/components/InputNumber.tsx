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
  onEnterKey?: (currentValue: number) => void;
};

/** View: InputNumber */
export const InputNumber: React.FC<
  InputNumberProps & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(
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
      onEnterKey,
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
    const keyUp = React.useCallback(
      (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          onEnterKey?.(ev.currentTarget.valueAsNumber);
        }
      },
      [onEnterKey],
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
        onKeyUp={keyUp}
      />
    );
  },
);

InputNumber.displayName = "InputNumber";
