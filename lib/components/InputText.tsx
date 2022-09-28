import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";

/** Props: InputText */
type InputTextProps = {
  initialValue?: string;
  value?: string;

  name?: string;
  disabled?: boolean;

  placeholder?: string;

  onChange?: (newValue: string) => void;
};

/** View: InputText */
export const InputText: React.FC<InputTextProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      name,
      disabled,

      placeholder,

      onChange,
    }: InputTextProps,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ): React.ReactElement | null => {
    const theme = React.useContext(ThemeContext);
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
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        value={value !== undefined ? value : inputValue}
        className={joinClassName(
          theme?.InputText?.input?.base,
          disabled && theme?.InputText?.input?.disabled,
        )}
        onChange={change}
      />
    );
  },
);

InputText.displayName = "InputText";
