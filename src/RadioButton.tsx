import * as React from "react";

import { ClassNameSet } from "./ClassNameSet";
import { joinClassName } from "./joinClassName";

/** Props: RadioButton */
type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;

  disabled?: boolean;

  classNameSet?: ClassNameSet;

  onChange?: (newValue: string) => void;
};

/** View: RadioButton */
export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,

  disabled,

  classNameSet,

  onChange,
}: RadioButtonProps): React.ReactElement | null => {
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
        classNameSet?.RadioGroup?.wrapper?.base,
        checked ? classNameSet?.RadioGroup?.wrapper?.checked : "",
        disabled ? classNameSet?.RadioGroup?.wrapper?.disabled : "",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        className={joinClassName(
          classNameSet?.RadioGroup?.input?.base,
          checked ? classNameSet?.RadioGroup?.input?.checked : "",
          disabled ? classNameSet?.RadioGroup?.input?.disabled : "",
        )}
        onChange={change}
      />
      <span
        className={joinClassName(
          classNameSet?.RadioGroup?.span?.base,
          checked ? classNameSet?.RadioGroup?.span?.checked : "",
          disabled ? classNameSet?.RadioGroup?.span?.disabled : "",
        )}
      >
        {label}
      </span>
    </label>
  );
};

RadioButton.displayName = "RadioButton";
