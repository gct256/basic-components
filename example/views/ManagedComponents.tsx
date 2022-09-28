import * as React from "react";

import { Button } from "../../src/components/Button";
import { Checkbox } from "../../src/components/Checkbox";
import { InputList } from "../../src/components/InputList";
import { InputNumber } from "../../src/components/InputNumber";
import { InputRange } from "../../src/components/InputRange";
import { InputText } from "../../src/components/InputText";
import { InputTextArea } from "../../src/components/InputTextArea";
import { RadioGroup } from "../../src/components/RadioGroup";
import { SelectList } from "../../src/components/SelectList";
import { Item } from "../../src/types/Item";

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

/** Props: ManagedComponents */
type ManagedComponentsProps = {
  disabled: boolean;
};

/** View: ManagedComponents */
export const ManagedComponents: React.FC<ManagedComponentsProps> = ({
  disabled,
}: ManagedComponentsProps): React.ReactElement | null => (
  <>
    <Section title="InputText">
      <InputText initialValue="initial value" disabled={disabled} />
    </Section>
    <Section title="InputTextArea">
      <InputTextArea initialValue="initial value" disabled={disabled} />
    </Section>
    <Section title="InputNumber">
      <InputNumber initialValue={42} disabled={disabled} />
    </Section>
    <Section title="InputRange">
      <InputRange initialValue={42} disabled={disabled} />
    </Section>
    <Section title="Checkbox">
      <Checkbox initialChecked disabled={disabled}>
        Checkbox
      </Checkbox>
    </Section>
    <Section title="SelectList">
      <SelectList initialValue="bar" disabled={disabled} items={selectItems} />
    </Section>
    <Section title="SelectList with size">
      <SelectList
        initialValue="bar"
        disabled={disabled}
        items={selectItems}
        size={4}
      />
    </Section>
    <Section title="InputList">
      <InputList
        initialValue="bar"
        disabled={disabled}
        items={radioItems}
        id="inputList"
      />
    </Section>
    <Section title="RadioGroup">
      <RadioGroup
        initialValue="bar"
        name="radio1"
        disabled={disabled}
        items={radioItems}
      />
    </Section>
    <Section title="Button">
      <Button disabled={disabled}>Button</Button>
    </Section>
  </>
);

ManagedComponents.displayName = "ManagedComponents";
