import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import { getUiThemeDefinition } from "./themes";
import type { UiIconSet } from "./themes";
import { IconStyles } from "./IconStyles";

const IconContext = createContext<UiIconSet>("material-symbols-rounded");

export const UiIconProvider = ({ theme, children }: PropsWithChildren<{ theme?: string | null }>) => (
    <IconContext.Provider value={getUiThemeDefinition(theme).iconSet}>
        <IconStyles />
        {children}
    </IconContext.Provider>
);

export const useUiIconSet = () => useContext(IconContext);
