import * as React from "react";

import { Checkbox, ThemeContext, SAMPLE_THEME } from "../../lib";

import { ManagedComponents } from "./ManagedComponents";

/** View: Example */
export const Example: React.FC = (): React.ReactElement | null => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <ThemeContext.Provider value={SAMPLE_THEME}>
      <div className="m-2">
        <Checkbox checked={disabled} onChange={setDisabled}>
          Disabled
        </Checkbox>
      </div>
      <div className="m-2 grid grid-cols-3 gap-8">
        <ManagedComponents disabled={disabled} />
      </div>
    </ThemeContext.Provider>
  );
};

Example.displayName = "Example";
