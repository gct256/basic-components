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
  onEnterKey?: (currentValue: string) => void;
};

/** View: InputTextArea */
export const InputTextArea: React.FC<
  InputTextAreaProps & React.RefAttributes<HTMLTextAreaElement>
> = React.forwardRef(
  (
    {
      initialValue,
      value,

      name,
      disabled,

      placeholder,

      onChange,
      onEnterKey,
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
    const keyUp = React.useCallback(
      (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          onEnterKey?.(ev.currentTarget.value);
        }
      },
      [onEnterKey],
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
        onKeyUp={keyUp}
      />
    );
  },
);

InputTextArea.displayName = "InputTextArea";
