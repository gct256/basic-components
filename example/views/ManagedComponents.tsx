import * as React from "react";

import { Checkbox } from "../../src/components/Checkbox";
import { InputNumber } from "../../src/components/InputNumber";
import { InputRange } from "../../src/components/InputRange";
import { InputText } from "../../src/components/InputText";
import { RadioGroup } from "../../src/components/RadioGroup";
import { SelectList } from "../../src/components/SelectList";
import { Item } from "../../src/types/Item";

import { ExampleClassNameSet } from "./ExampleClassNameSet";
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
  <Section title="Managed components">
    <Section title="InputText">
      <InputText
        initialValue="initial value"
        disabled={disabled}
        classNameSet={ExampleClassNameSet}
      />
    </Section>
    <Section title="InputNumber">
      <InputNumber
        initialValue={42}
        disabled={disabled}
        classNameSet={ExampleClassNameSet}
      />
    </Section>
    <Section title="InputRange">
      <InputRange
        initialValue={42}
        disabled={disabled}
        classNameSet={ExampleClassNameSet}
      />
    </Section>
    <Section title="Checkbox">
      <Checkbox
        initialChecked
        disabled={disabled}
        classNameSet={ExampleClassNameSet}
      >
        Checkbox
      </Checkbox>
    </Section>
    <Section title="SelectList">
      <SelectList
        initialValue="bar"
        disabled={disabled}
        items={selectItems}
        classNameSet={ExampleClassNameSet}
      />
    </Section>
    <Section title="RadioGroup">
      <RadioGroup
        initialValue="bar"
        name="radio1"
        disabled={disabled}
        items={radioItems}
        classNameSet={ExampleClassNameSet}
      />
    </Section>
  </Section>
);

ManagedComponents.displayName = "ManagedComponents";
