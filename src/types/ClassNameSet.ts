import { ClassName } from "./ClassName";

export type ClassNameSet = {
  InputText?: {
    input?: {
      base?: ClassName;
      disabled?: ClassName;
    };
  };
  InputNumber?: {
    input?: {
      base?: ClassName;
      disabled?: ClassName;
    };
  };
  InputRange?: {
    wrapper?: {
      base?: ClassName;
      disabled?: ClassName;
    };
    range?: {
      base?: ClassName;
      disabled?: ClassName;
    };
    input?: {
      base?: ClassName;
      disabled?: ClassName;
    };
  };
  Checkbox?: {
    wrapper?: {
      base?: ClassName;
      checked?: ClassName;
      disabled?: ClassName;
    };
    input?: {
      base?: ClassName;
      checked?: ClassName;
      disabled?: ClassName;
    };
    span?: {
      base?: ClassName;
      checked?: ClassName;
      disabled?: ClassName;
    };
  };
  SelectList?: {
    wrapper?: {
      base?: ClassName;
      disabled?: ClassName;
    };
    select?: {
      base?: ClassName;
      disabled?: ClassName;
    };
    option?: {
      base?: ClassName;
      selected?: ClassName;
      disabled?: ClassName;
    };
  };
  RadioGroup?: {
    area?: {
      base?: ClassName;
      disabled?: ClassName;
    };
    wrapper?: {
      base?: ClassName;
      checked?: ClassName;
      disabled?: ClassName;
    };
    input?: {
      base?: ClassName;
      checked?: ClassName;
      disabled?: ClassName;
    };
    span?: {
      base?: ClassName;
      checked?: ClassName;
      disabled?: ClassName;
    };
  };
};
