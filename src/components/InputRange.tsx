import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ClassNameSet } from "../types/ClassNameSet";

/** Props: InputRange */
export type InputRangeProps = {
  initialValue?: number;
  value?: number;

  disabled?: boolean;

  min?: number;
  max?: number;
  step?: number;

  classNameSet?: ClassNameSet;

  onChange?: (newValue: number) => void;
};

/** View: InputRange */
export const InputRange: React.FC<InputRangeProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      disabled,

      min,
      max,
      step,

      classNameSet,

      onChange,
    }: InputRangeProps,
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
      <div
        className={joinClassName(
          classNameSet?.InputRange?.wrapper?.base,
          disabled && classNameSet?.InputRange?.wrapper?.disabled,
        )}
      >
        <input
          ref={forwardedRef}
          type="range"
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={value !== undefined ? value : inputValue}
          className={joinClassName(
            classNameSet?.InputRange?.range?.base,
            disabled && classNameSet?.InputRange?.range?.disabled,
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
            classNameSet?.InputRange?.input?.base,
            disabled && classNameSet?.InputRange?.input?.disabled,
          )}
          onChange={change}
        />
      </div>
    );
  },
);

InputRange.displayName = "InputRange";
