import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";

/** Props: Checkbox */
type CheckboxProps = {
  initialChecked?: boolean;
  checked?: boolean;

  name?: string;
  disabled?: boolean;

  onChange?: (newChecked: boolean) => void;

  children?: React.ReactNode;
};

/** View: Checkbox */
export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  (
    {
      initialChecked,
      checked,

      name,
      disabled,

      onChange,

      children,
    }: CheckboxProps,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ): React.ReactElement | null => {
    const theme = React.useContext(ThemeContext);
    const [inputChecked, setInputChecked] = React.useState(
      initialChecked ?? false,
    );
    const change = React.useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(ev.currentTarget.checked);

        if (checked === undefined) setInputChecked(ev.currentTarget.checked);
      },
      [checked, onChange],
    );

    const currentChecked = checked !== undefined ? checked : inputChecked;

    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label
        className={joinClassName(
          theme?.Checkbox?.wrapper?.base,
          currentChecked && theme?.Checkbox?.wrapper?.checked,
          disabled && theme?.Checkbox?.wrapper?.disabled,
        )}
      >
        <input
          ref={forwardedRef}
          type="checkbox"
          name={name}
          disabled={disabled}
          value="on"
          checked={currentChecked}
          onChange={change}
          className={joinClassName(
            theme?.Checkbox?.input?.base,
            currentChecked && theme?.Checkbox?.input?.checked,
            disabled && theme?.Checkbox?.input?.disabled,
          )}
        />
        <span
          className={joinClassName(
            theme?.Checkbox?.span?.base,
            currentChecked && theme?.Checkbox?.span?.checked,
            disabled && theme?.Checkbox?.span?.disabled,
          )}
        >
          {children}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
