import * as React from "react";

import { DEFAULT_THEME, Theme } from "../types/Theme";

export const ThemeContext = React.createContext<Theme>(DEFAULT_THEME);
