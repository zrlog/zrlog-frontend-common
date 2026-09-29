import MaterialStyles from "./MaterialStyles";
import DeskStyles from "./DeskStyles";
import { getUiThemeDefinition } from "./themes";

export const ThemeStyles = ({ theme }: { theme: string }) => {
    const { id } = getUiThemeDefinition(theme);
    if (id === "default") return <MaterialStyles />;
    if (id === "desk") return <DeskStyles />;
    return null;
};
