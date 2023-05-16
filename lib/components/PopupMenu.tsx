import * as React from "react";
import { useEffect } from "react";

import { joinClassName } from "../helpers/joinClassName";
import { ThemeContext } from "../helpers/ThemeContext";
import { Item } from "../types/Item";

/** Props: PopupMenu */
type PopupMenuProps = {
  name?: string;
  disabled?: boolean;

  items: Item[];

  buttonLabel?: string;

  onChange?: (newValue: string) => void;
};

/** View: PopupMenu */
export const PopupMenu: React.FC<PopupMenuProps> = ({
  name,
  disabled,

  buttonLabel,

  items,

  onChange,
}: PopupMenuProps): React.ReactElement | null => {
  const theme = React.useContext(ThemeContext);
  const ref = React.useRef<HTMLSelectElement>(null);
  const change = React.useCallback(
    (ev: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(ev.currentTarget.value);

      // eslint-disable-next-line no-param-reassign
      ev.currentTarget.selectedIndex = -1;
    },
    [onChange],
  );

  useEffect(() => {
    if (ref.current) ref.current.selectedIndex = -1;
  }, []);

  return (
    <div
      className={joinClassName(
        "relative",
        theme?.PopupMenu?.wrapper?.base,
        disabled && theme?.PopupMenu?.wrapper?.disabled,
      )}
    >
      <button
        tabIndex={-1}
        type="button"
        className={joinClassName(
          theme?.PopupMenu?.button?.base,
          disabled && theme?.PopupMenu?.button?.disabled,
        )}
      >
        {buttonLabel}
      </button>
      <select
        ref={ref}
        name={name}
        disabled={disabled}
        onChange={change}
        className="absolute inset-0 appearance-none opacity-0"
      >
        {items.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className={joinClassName(
              theme?.PopupMenu?.option?.base,
              disabled && theme?.PopupMenu?.option?.disabled,
            )}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

PopupMenu.displayName = "PopupMenu";
