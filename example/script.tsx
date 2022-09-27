import * as React from "react";
import { createRoot } from "react-dom/client";

import { Example } from "./views/Example";

const main = async (): Promise<void> => {
  const container = document.getElementById("container");

  if (container) {
    const root = createRoot(container);

    root.render(<Example />);
  }
};

main().catch(console.error);
