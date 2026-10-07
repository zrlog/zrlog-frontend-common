import { Switch, theme } from "antd";
import type { SwitchProps } from "antd";
import { forwardRef } from "react";
import type { CSSProperties } from "react";
import { useUiIconSet } from "../icon-context";

// Switch exposes an indicator style slot, but no loading-icon render slot.
// Draw the progress ring on that public slot while preserving loading's disabled behavior.
const UiSwitch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    const { token } = theme.useToken();
    if (!material || !props.loading) return <Switch {...props} ref={ref} />;
    return <Switch {...props} ref={ref} loading={false} disabled aria-busy
        style={{ "--zrlog-switch-progress": token.colorPrimary, ...props.style } as CSSProperties}
        classNames={(info) => {
            const original = typeof props.classNames === "function"
                ? props.classNames({ ...info, props: { ...info.props, loading: true } }) : props.classNames;
            return { ...original, indicator: [original?.indicator, "zrlog-switch-pending"].filter(Boolean).join(" ") };
        }} />;
});
UiSwitch.displayName = "UiSwitch";
export default UiSwitch;
