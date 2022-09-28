import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";
import { Item } from "../types/Item";

/** Props: SelectList */
type SelectListProps = {
  initialValue?: string;
  value?: string;

  name?: string;
  disabled?: boolean;

  size?: number;
  items: Item[];

  onChange?: (newValue: string) => void;
};

/** View: SelectList */
export const SelectList: React.FC<SelectListProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      name,
      disabled,

      size,
      items,

      onChange,
    }: SelectListProps,
    forwardedRef: React.ForwardedRef<HTMLSelectElement>,
  ): React.ReactElement | null => {
    const theme = React.useContext(ThemeContext);
    const [inputValue, setInputValue] = React.useState(initialValue ?? "");
    const change = React.useCallback(
      (ev: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(ev.currentTarget.value);

        if (value === undefined) setInputValue(ev.currentTarget.value);
      },
      [onChange, value],
    );

    const currentValue = value !== undefined ? value : inputValue;

    return (
      <div
        className={joinClassName(
          theme?.SelectList?.wrapper?.base,
          disabled && theme?.SelectList?.wrapper?.disabled,
        )}
      >
        <select
          ref={forwardedRef}
          value={currentValue}
          name={name}
          disabled={disabled}
          size={size}
          onChange={change}
          className={joinClassName(
            theme?.SelectList?.select?.base,
            disabled && theme?.SelectList?.select?.disabled,
            size !== undefined && theme?.SelectList?.select?.sized,
          )}
        >
          {items.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className={joinClassName(
                theme?.SelectList?.option?.base,
                item.value === currentValue
                  ? theme?.SelectList?.option?.selected
                  : "",
                disabled && theme?.SelectList?.option?.disabled,
                size !== undefined && theme?.SelectList?.option?.sized,
              )}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

SelectList.displayName = "SelectList";
