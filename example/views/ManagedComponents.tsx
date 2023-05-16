import * as React from "react";

import {
  Button,
  Checkbox,
  InputList,
  InputNumber,
  InputRange,
  InputText,
  InputTextArea,
  RadioGroup,
  SelectList,
  PopupMenu,
  Item,
} from "../../lib";

import { Section } from "./Section";

const selectItems: Item[] = [
  { value: "", label: "(Select)" },
  { value: "foo", label: "Foo" },
  { value: "bar", label: "Bar" },
  { value: "baz", label: "Baz Baz Baz Baz Baz Baz Baz Baz Baz Baz" },
];

const radioItems: Item[] = [
  { value: "foo", label: "Foo" },
  { value: "bar", label: "Bar" },
  { value: "baz", label: "Baz Baz Baz Baz Baz Baz Baz Baz Baz Baz" },
];

/** Props: ManagedComponents */
type ManagedComponentsProps = {
  disabled: boolean;
  onEvent: (event: string) => void;
};

/** View: ManagedComponents */
export const ManagedComponents: React.FC<ManagedComponentsProps> = ({
  disabled,
  onEvent,
}: ManagedComponentsProps): React.ReactElement | null => (
  <>
    <Section title="InputText">
      <InputText
        initialValue="initial value"
        disabled={disabled}
        onChange={(x) => onEvent(`InputText.onChange: ${x}`)}
        onEnterKey={(x) => onEvent(`InputText.onEnterKey: ${x}`)}
      />
    </Section>
    <Section title="InputTextArea">
      <InputTextArea
        initialValue="initial value"
        disabled={disabled}
        onChange={(x) => onEvent(`InputTextArea.onChange: ${x}`)}
      />
    </Section>
    <Section title="InputNumber">
      <InputNumber
        initialValue={42}
        disabled={disabled}
        onChange={(x) => onEvent(`InputNumber.onChange: ${x}`)}
        onEnterKey={(x) => onEvent(`InputNumber.onEnterKey: ${x}`)}
      />
    </Section>
    <Section title="InputRange">
      <InputRange
        initialValue={42}
        disabled={disabled}
        onChange={(x) => onEvent(`InputRange.onChange: ${x}`)}
        onEnterKey={(x) => onEvent(`InputRange.onEnterKey: ${x}`)}
      />
    </Section>
    <Section title="Checkbox">
      <Checkbox
        initialChecked
        disabled={disabled}
        onChange={(x) => onEvent(`Checkbox.onChange: ${x}`)}
      >
        Checkbox
      </Checkbox>
    </Section>
    <Section title="SelectList">
      <SelectList
        initialValue="bar"
        disabled={disabled}
        items={selectItems}
        onChange={(x) => onEvent(`SelectList.onChange: ${x}`)}
      />
    </Section>
    <Section title="SelectList with size">
      <SelectList
        initialValue="bar"
        disabled={disabled}
        items={selectItems}
        size={4}
        onChange={(x) => onEvent(`SelectList.onChange: ${x}`)}
      />
    </Section>
    <Section title="PopupMenu">
      <PopupMenu
        disabled={disabled}
        buttonLabel="Popup menu"
        items={selectItems}
        onChange={(x) => onEvent(`SelectList.onChange: ${x}`)}
      />
    </Section>
    <Section title="InputList">
      <InputList
        initialValue="bar"
        disabled={disabled}
        items={radioItems}
        id="inputList"
        onChange={(x) => onEvent(`InputList.onChange: ${x}`)}
        onEnterKey={(x) => onEvent(`InputList.onEnterKey: ${x}`)}
      />
    </Section>
    <Section title="RadioGroup">
      <RadioGroup
        initialValue="bar"
        name="radio1"
        disabled={disabled}
        items={radioItems}
        onChange={(x) => onEvent(`RadioGroup.onChange: ${x}`)}
      />
    </Section>
    <Section title="Button">
      <Button disabled={disabled} onClick={() => onEvent("Button.onClick")}>
        Button
      </Button>
    </Section>
  </>
);

ManagedComponents.displayName = "ManagedComponents";
