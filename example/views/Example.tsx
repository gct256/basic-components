import * as React from "react";

import { Checkbox } from "../../src/components/Checkbox";

import { ManagedComponents } from "./ManagedComponents";

/** View: Example */
export const Example: React.FC = (): React.ReactElement | null => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <div className="m-2">
        <Checkbox checked={disabled} onChange={setDisabled}>
          Disabled
        </Checkbox>
      </div>
      <div className="m-2 grid grid-cols-2 gap-2">
        <ManagedComponents disabled={disabled} />
      </div>
    </>
  );
};

Example.displayName = "Example";
