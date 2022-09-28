import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";

/** Props: InputTextArea */
type InputTextAreaProps = {
  initialValue?: string;
  value?: string;

  name?: string;
  disabled?: boolean;

  placeholder?: string;

  onChange?: (newValue: string) => void;
};

/** View: InputTextArea */
export const InputTextArea: React.FC<InputTextAreaProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      name,
      disabled,

      placeholder,

      onChange,
    }: InputTextAreaProps,
    forwardedRef: React.ForwardedRef<HTMLTextAreaElement>,
  ): React.ReactElement | null => {
    const theme = React.useContext(ThemeContext);
    const [inputValue, setInputValue] = React.useState(initialValue ?? "");
    const change = React.useCallback(
      (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(ev.currentTarget.value);

        if (value === undefined) setInputValue(ev.currentTarget.value);
      },
      [onChange, value],
    );

    return (
      <textarea
        ref={forwardedRef}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        value={value !== undefined ? value : inputValue}
        className={joinClassName(
          theme?.InputTextArea?.input?.base,
          disabled && theme?.InputTextArea?.input?.disabled,
        )}
        onChange={change}
      />
    );
  },
);

InputTextArea.displayName = "InputTextArea";
