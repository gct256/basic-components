import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ClassNameSet } from "../types/ClassNameSet";
import { Item } from "../types/Item";

/** Props: SelectList */
type SelectListProps = {
  initialValue?: string;
  value?: string;

  disabled?: boolean;

  size?: number;
  items: Item[];

  classNameSet?: ClassNameSet;

  onChange?: (newValue: string) => void;
};

/** View: SelectList */
export const SelectList: React.FC<SelectListProps> = React.forwardRef(
  (
    {
      initialValue,
      value,

      disabled,

      size,
      items,

      classNameSet,

      onChange,
    }: SelectListProps,
    forwardedRef: React.ForwardedRef<HTMLSelectElement>,
  ): React.ReactElement | null => {
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
          classNameSet?.SelectList?.wrapper?.base,
          disabled && classNameSet?.SelectList?.wrapper?.disabled,
        )}
      >
        <select
          ref={forwardedRef}
          value={currentValue}
          disabled={disabled}
          size={size}
          onChange={change}
          className={joinClassName(
            classNameSet?.SelectList?.select?.base,
            disabled && classNameSet?.SelectList?.select?.disabled,
          )}
        >
          {items.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className={joinClassName(
                classNameSet?.SelectList?.option?.base,
                item.value === currentValue
                  ? classNameSet?.SelectList?.option?.selected
                  : "",
                disabled && classNameSet?.SelectList?.option?.disabled,
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
