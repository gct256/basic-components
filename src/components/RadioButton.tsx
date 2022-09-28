import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";

/** Props: RadioButton */
type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;

  disabled?: boolean;

  onChange?: (newValue: string) => void;
};

/** View: RadioButton */
export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,

  disabled,

  onChange,
}: RadioButtonProps): React.ReactElement | null => {
  const theme = React.useContext(ThemeContext);
  const change = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      if (ev.currentTarget.checked) {
        onChange?.(value);
      }
    },
    [onChange, value],
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={joinClassName(
        theme?.RadioGroup?.wrapper?.base,
        checked && theme?.RadioGroup?.wrapper?.checked,
        disabled && theme?.RadioGroup?.wrapper?.disabled,
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        className={joinClassName(
          theme?.RadioGroup?.input?.base,
          checked && theme?.RadioGroup?.input?.checked,
          disabled && theme?.RadioGroup?.input?.disabled,
        )}
        onChange={change}
      />
      <span
        className={joinClassName(
          theme?.RadioGroup?.span?.base,
          checked && theme?.RadioGroup?.span?.checked,
          disabled && theme?.RadioGroup?.span?.disabled,
        )}
      >
        {label}
      </span>
    </label>
  );
};

RadioButton.displayName = "RadioButton";
