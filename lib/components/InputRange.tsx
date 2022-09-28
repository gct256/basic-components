import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";

/** Props: InputRange */
export type InputRangeProps = {
  initialValue?: number;
  value?: number;

  name?: string;
  disabled?: boolean;

  min?: number;
  max?: number;
  step?: number;

  onChange?: (newValue: number) => void;
};

/** View: InputRange */
export const InputRange: React.FC<InputRangeProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      name,
      disabled,

      min,
      max,
      step,

      onChange,
    }: InputRangeProps,
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
      <div
        className={joinClassName(
          theme?.InputRange?.wrapper?.base,
          disabled && theme?.InputRange?.wrapper?.disabled,
        )}
      >
        <input
          ref={forwardedRef}
          type="range"
          name={name}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={value !== undefined ? value : inputValue}
          className={joinClassName(
            theme?.InputRange?.range?.base,
            disabled && theme?.InputRange?.range?.disabled,
          )}
          onChange={change}
        />
        <input
          type="number"
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={value !== undefined ? value : inputValue}
          className={joinClassName(
            theme?.InputRange?.input?.base,
            disabled && theme?.InputRange?.input?.disabled,
          )}
          onChange={change}
        />
      </div>
    );
  },
);

InputRange.displayName = "InputRange";
