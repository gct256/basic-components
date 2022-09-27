import * as React from "react";

import { Checkbox } from "../../src/Checkbox";
import { InputNumber } from "../../src/InputNumber";
import { InputRange } from "../../src/InputRange";
import { InputText } from "../../src/InputText";
import { Item } from "../../src/Item";
import { RadioGroup } from "../../src/RadioGroup";
import { SelectList } from "../../src/SelectList";

import { Section } from "./Section";

const selectItems: Item[] = [
  { value: "", label: "(Select)" },
  { value: "foo", label: "Foo" },
  { value: "bar", label: "Bar" },
  { value: "baz", label: "Baz" },
];

const radioItems: Item[] = [
  { value: "foo", label: "Foo" },
  { value: "bar", label: "Bar" },
  { value: "baz", label: "Baz" },
];

/** View: Example */
export const Example: React.FC = (): React.ReactElement | null => {
  const [disabled, setDisabled] = React.useState(false);
  const [inputTextValue, setInputTextValue] = React.useState("value");
  const [inputNumberValue, setInputNumberValue] = React.useState(42);
  const [inputRangeValue, setInputRangeValue] = React.useState(42);
  const [checked, setChecked] = React.useState(false);
  const [selectListValue, setSelectListValue] = React.useState("bar");
  const [radioGroupValue, setRadioGroupValue] = React.useState("bar");

  return (
    <>
      <Checkbox checked={disabled} onChange={setDisabled}>
        Disabled
      </Checkbox>

      <Section title="InputText (managed)">
        <InputText initialValue="initial value" disabled={disabled} />
      </Section>
      <Section title="InputText (unmanaged)">
        <InputText
          value={inputTextValue}
          onChange={setInputTextValue}
          disabled={disabled}
        />
      </Section>
      <Section title="InputNumber (managed)">
        <InputNumber initialValue={42} disabled={disabled} />
      </Section>
      <Section title="InputNumber (unmanaged)">
        <InputNumber
          value={inputNumberValue}
          onChange={setInputNumberValue}
          disabled={disabled}
        />
      </Section>
      <Section title="InputRange (managed)">
        <InputRange initialValue={42} disabled={disabled} />
      </Section>
      <Section title="InputRange (unmanaged)">
        <InputRange
          value={inputRangeValue}
          onChange={setInputRangeValue}
          disabled={disabled}
        />
      </Section>

      <Section title="Checkbox (managed)">
        <Checkbox initialChecked disabled={disabled}>
          Checkbox
        </Checkbox>
      </Section>
      <Section title="Checkbox (unmanaged)">
        <Checkbox checked={checked} onChange={setChecked} disabled={disabled}>
          Checkbox
        </Checkbox>
      </Section>

      <Section title="SelectList (managed)">
        <SelectList initialValue="bar" items={selectItems} />
      </Section>
      <Section title="SelectList (unmanaged)">
        <SelectList
          value={selectListValue}
          onChange={setSelectListValue}
          items={selectItems}
        />
      </Section>

      <Section title="RadioGroup (managed)">
        <RadioGroup initialValue="bar" name="radio1" items={radioItems} />
      </Section>
      <Section title="RadioGroup (unmanaged)">
        <RadioGroup
          value={radioGroupValue}
          name="radio2"
          items={radioItems}
          onChange={setRadioGroupValue}
        />
      </Section>
    </>
  );
};

Example.displayName = "Example";
