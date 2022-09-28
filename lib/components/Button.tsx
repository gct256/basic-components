import * as React from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";

/** Props: Button */
type ButtonProps = {
  disabled?: boolean;

  onClick?: () => void;

  children?: React.ReactNode;
};

/** View: Button */
export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
}: ButtonProps): React.ReactElement | null => {
  const theme = React.useContext(ThemeContext);

  return (
    <button
      type="button"
      disabled={disabled}
      className={joinClassName(
        theme?.Button?.button?.base,
        disabled && theme?.Button?.button?.disabled,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
