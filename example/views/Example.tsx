import * as React from "react";

import { Checkbox, ThemeContext, SAMPLE_THEME } from "../../lib";

import { ManagedComponents } from "./ManagedComponents";

const eventHistory = new Map<number, string>();

/** View: Example */
export const Example: React.FC = (): React.ReactElement | null => {
  const [disabled, setDisabled] = React.useState(false);
  const [serial1, setSerial1] = React.useState(0);
  const [, setSerial2] = React.useState(0);

  const handleEvent = React.useCallback(
    (event: string) => {
      const index = serial1;

      eventHistory.set(index, event);
      setSerial1(serial1 + 1);

      setTimeout(() => {
        eventHistory.delete(index);
        setSerial2(index);
      }, 1000);
    },
    [serial1],
  );

  return (
    <ThemeContext.Provider value={SAMPLE_THEME}>
      <div className="fixed inset-y-0 left-0 w-[20vw] p-4">
        <Checkbox checked={disabled} onChange={setDisabled}>
          Disabled
        </Checkbox>
      </div>
      <div className="ml-[20vw] mr-[20vw] my-4 grid gap-4">
        <ManagedComponents disabled={disabled} onEvent={handleEvent} />
      </div>
      <div className="fixed inset-y-0 right-0 w-[20vw] p-4">
        {Array.from(eventHistory)
          .reverse()
          .map(([i, x]) => (
            <p className="overflow-hidden truncate" key={i}>
              {x}
            </p>
          ))}
      </div>
    </ThemeContext.Provider>
  );
};

Example.displayName = "Example";
