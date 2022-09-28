import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";
import { Item } from "../types/Item";

import { RadioButton } from "./RadioButton";

/** Props: RadioGroup */
type RadioGroupProps = {
  initialValue?: string;
  value?: string;

  disabled?: boolean;

  name: string;
  items: Item[];

  onChange?: (newValue: string) => void;
};

/** View: RadioGroup */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  initialValue,
  value,

  disabled,

  name,
  items,

  onChange,
}: RadioGroupProps): React.ReactElement | null => {
  const theme = React.useContext(ThemeContext);
  const [inputValue, setInputValue] = React.useState(initialValue ?? "");
  const change = React.useCallback(
    (newValue: string) => {
      onChange?.(newValue);

      if (value === undefined) setInputValue(newValue);
    },
    [onChange, value],
  );

  const currentValue = value !== undefined ? value : inputValue;

  return (
    <div
      className={joinClassName(
        theme?.RadioGroup?.area?.base,
        disabled && theme?.RadioGroup?.area?.disabled,
      )}
    >
      {items.map((item) => (
        <RadioButton
          key={item.value}
          name={name}
          value={item.value}
          label={item.label}
          disabled={disabled}
          checked={currentValue === item.value}
          onChange={change}
        />
      ))}
    </div>
  );
};

RadioGroup.displayName = "RadioGroup";
