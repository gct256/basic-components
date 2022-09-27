import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ClassNameSet } from "../types/ClassNameSet";
import { Item } from "../types/Item";

import { RadioButton } from "./RadioButton";

/** Props: RadioGroup */
type RadioGroupProps = {
  initialValue?: string;
  value?: string;

  disabled?: boolean;

  name: string;
  items: Item[];

  classNameSet?: ClassNameSet;

  onChange?: (newValue: string) => void;
};

/** View: RadioGroup */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  initialValue,
  value,

  disabled,

  name,
  items,

  classNameSet,

  onChange,
}: RadioGroupProps): React.ReactElement | null => {
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
        classNameSet?.RadioGroup?.area?.base,
        disabled && classNameSet?.RadioGroup?.area?.disabled,
      )}
    >
      {items.map((item) => (
        <RadioButton
          name={name}
          value={item.value}
          label={item.label}
          disabled={disabled}
          checked={currentValue === item.value}
          classNameSet={classNameSet}
          onChange={change}
        />
      ))}
    </div>
  );
};

RadioGroup.displayName = "RadioGroup";
