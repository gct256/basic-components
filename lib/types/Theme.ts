import { DeepPartial } from "utility-types";

import { ClassNameValue } from "./ClassNameValue";

export type FullTheme = {
  InputText: {
    input: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
  InputTextArea: {
    input: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
  InputNumber: {
    input: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
  InputRange: {
    wrapper: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
    range: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
    input: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
  Checkbox: {
    wrapper: {
      base: ClassNameValue;
      checked: ClassNameValue;
      disabled: ClassNameValue;
    };
    input: {
      base: ClassNameValue;
      checked: ClassNameValue;
      disabled: ClassNameValue;
    };
    span: {
      base: ClassNameValue;
      checked: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
  SelectList: {
    wrapper: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
    select: {
      base: ClassNameValue;
      disabled: ClassNameValue;
      sized: ClassNameValue;
    };
    option: {
      base: ClassNameValue;
      selected: ClassNameValue;
      disabled: ClassNameValue;
      sized: ClassNameValue;
    };
  };
  InputList: {
    input: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
  RadioGroup: {
    area: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
    wrapper: {
      base: ClassNameValue;
      checked: ClassNameValue;
      disabled: ClassNameValue;
    };
    input: {
      base: ClassNameValue;
      checked: ClassNameValue;
      disabled: ClassNameValue;
    };
    span: {
      base: ClassNameValue;
      checked: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
  Button: {
    button: {
      base: ClassNameValue;
      disabled: ClassNameValue;
    };
  };
};

export type Theme = DeepPartial<FullTheme>;

export const DEFAULT_THEME: FullTheme = {
  InputText: {
    input: {
      base: undefined,
      disabled: undefined,
    },
  },
  InputTextArea: {
    input: {
      base: undefined,
      disabled: undefined,
    },
  },
  InputNumber: {
    input: {
      base: undefined,
      disabled: undefined,
    },
  },
  InputRange: {
    wrapper: {
      base: undefined,
      disabled: undefined,
    },
    range: {
      base: undefined,
      disabled: undefined,
    },
    input: {
      base: undefined,
      disabled: undefined,
    },
  },
  Checkbox: {
    wrapper: {
      base: undefined,
      checked: undefined,
      disabled: undefined,
    },
    input: {
      base: undefined,
      checked: undefined,
      disabled: undefined,
    },
    span: {
      base: undefined,
      checked: undefined,
      disabled: undefined,
    },
  },
  SelectList: {
    wrapper: {
      base: undefined,
      disabled: undefined,
    },
    select: {
      base: undefined,
      disabled: undefined,
      sized: undefined,
    },
    option: {
      base: undefined,
      selected: undefined,
      disabled: undefined,
      sized: undefined,
    },
  },
  InputList: {
    input: {
      base: undefined,
      disabled: undefined,
    },
  },
  RadioGroup: {
    area: {
      base: undefined,
      disabled: undefined,
    },
    wrapper: {
      base: undefined,
      checked: undefined,
      disabled: undefined,
    },
    input: {
      base: undefined,
      checked: undefined,
      disabled: undefined,
    },
    span: {
      base: undefined,
      checked: undefined,
      disabled: undefined,
    },
  },
  Button: {
    button: {
      base: undefined,
      disabled: undefined,
    },
  },
};
