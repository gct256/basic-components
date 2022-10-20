import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";
import { Item } from "../types/Item";

/** Props: InputList */
type InputListProps = {
  initialValue?: string;
  value?: string;

  name?: string;
  disabled?: boolean;

  placeholder?: string;

  id: string;
  items: Item[];

  onChange?: (newValue: string) => void;
  onEnterKey?: (currentValue: string) => void;
};

/** View: InputList */
export const InputList: React.FC<
  InputListProps & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(
  (
    {
      initialValue,
      value,

      name,
      disabled,

      placeholder,

      id,
      items,

      onChange,
      onEnterKey,
    }: InputListProps,
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
    const keyUp = React.useCallback(
      (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          onEnterKey?.(ev.currentTarget.value);
        }
      },
      [onEnterKey],
    );

    return (
      <>
        <input
          ref={forwardedRef}
          type="text"
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={value !== undefined ? value : inputValue}
          className={joinClassName(
            theme?.InputList?.input?.base,
            disabled && theme?.InputList?.input?.disabled,
          )}
          onChange={change}
          onKeyUp={keyUp}
          list={id}
        />
        <datalist id={id}>
          {items.map((item) => (
            <option key={item.value}>{item.label}</option>
          ))}
        </datalist>
      </>
    );
  },
);

InputList.displayName = "InputList";
