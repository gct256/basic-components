import * as React from "react";

import { Checkbox } from "../../src/components/Checkbox";
import { ThemeContext } from "../../src/helpers/ThemeContext";

import { EXAMPLE_THEME } from "./EXAMPLE_THEME";
import { ManagedComponents } from "./ManagedComponents";

/** View: Example */
export const Example: React.FC = (): React.ReactElement | null => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <ThemeContext.Provider value={EXAMPLE_THEME}>
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
