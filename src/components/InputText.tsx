import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ClassNameSet } from "../types/ClassNameSet";

/** Props: InputText */
type InputTextProps = {
  initialValue?: string;
  value?: string;

  disabled?: boolean;

  placeholder?: string;

  classNameSet?: ClassNameSet;

  onChange?: (newValue: string) => void;
};

/** View: InputText */
export const InputText: React.FC<InputTextProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      disabled,

      placeholder,

      classNameSet,

      onChange,
    }: InputTextProps,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ): React.ReactElement | null => {
    const [inputValue, setInputValue] = React.useState(initialValue ?? "");
    const change = React.useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(ev.currentTarget.value);

        if (value === undefined) setInputValue(ev.currentTarget.value);
      },
      [onChange, value],
    );

    return (
      <input
        ref={forwardedRef}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        value={value !== undefined ? value : inputValue}
        className={joinClassName(
          classNameSet?.InputText?.input?.base,
          disabled && classNameSet?.InputText?.input?.disabled,
        )}
        onChange={change}
      />
    );
  },
);

InputText.displayName = "InputText";
