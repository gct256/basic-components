import * as React from "react";

import { ClassNameSet } from "./ClassNameSet";
import { joinClassName } from "./joinClassName";

/** Props: Checkbox */
type CheckboxProps = {
  initialChecked?: boolean;
  checked?: boolean;

  disabled?: boolean;

  classNameSet?: ClassNameSet;

  onChange?: (newChecked: boolean) => void;

  children?: React.ReactNode;
};

/** View: Checkbox */
export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  (
    {
      initialChecked,
      checked,

      disabled,

      classNameSet,

      onChange,

      children,
    }: CheckboxProps,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ): React.ReactElement | null => {
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
          classNameSet?.Checkbox?.wrapper?.base,
          currentChecked ? classNameSet?.Checkbox?.wrapper?.checked : "",
          disabled ? classNameSet?.Checkbox?.wrapper?.disabled : "",
        )}
      >
        <input
          ref={forwardedRef}
          type="checkbox"
          disabled={disabled}
          value="on"
          checked={currentChecked}
          onChange={change}
          className={joinClassName(
            classNameSet?.Checkbox?.input?.base,
            currentChecked ? classNameSet?.Checkbox?.input?.checked : "",
            disabled ? classNameSet?.Checkbox?.input?.disabled : "",
          )}
        />
        <span
          className={joinClassName(
            classNameSet?.Checkbox?.span?.base,
            currentChecked ? classNameSet?.Checkbox?.span?.checked : "",
            disabled ? classNameSet?.Checkbox?.span?.disabled : "",
          )}
        >
          {children}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
