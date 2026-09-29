import { theme } from "antd";
import { FastColor } from "@ant-design/fast-color";

// Mounted by MaterialStyles below the consumer ConfigProvider. Every selector targets a semantic class
// supplied by materialComponentConfig, never an independent theme or a field.
const MaterialControlsStyle = () => {
    const { token: t } = theme.useToken();
    const stateHover = new FastColor(t.colorPrimary).setA(0.08).toRgbString();
    const statePressed = new FastColor(t.colorPrimary).setA(0.12).toRgbString();
    return (
        <style data-zrlog-material-controls>{`
        .zrlog-m3-switch.zrlog-m3-switch {
            box-sizing: border-box;
            border: 2px solid ${t.colorBorder};
            background: ${t.colorFillSecondary};
            color: ${t.colorTextSecondary};
            overflow: visible;
        }
        .zrlog-m3-switch.zrlog-m3-switch[aria-checked="true"] {
            border-color: ${t.colorPrimary};
            background: ${t.colorPrimary};
            color: var(--zrlog-m3-on-primary);
        }
        .zrlog-m3-switch.zrlog-m3-switch .zrlog-m3-switch-content.zrlog-m3-switch-content { color: inherit; }
        .zrlog-m3-switch.zrlog-m3-switch:not(:disabled):hover {
            border-color: ${t.colorTextSecondary};
            background: ${t.colorFillSecondary};
        }
        .zrlog-m3-switch.zrlog-m3-switch[aria-checked="true"]:not(:disabled):hover {
            border-color: ${t.colorPrimary};
            background: ${t.colorPrimary};
        }
        .zrlog-m3-switch .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            top: 50%;
            transform: translateY(-50%);
            inset-inline-start: 6px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: ${t.colorBorder};
            transition: width ${t.motionDurationMid}, height ${t.motionDurationMid},
                inset-inline-start ${t.motionDurationMid} ${t.motionEaseInOut}, background-color ${t.motionDurationMid};
        }
        .zrlog-m3-switch[aria-checked="true"] .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            inset-inline-start: calc(100% - 26px);
            width: 24px;
            height: 24px;
            background: var(--zrlog-m3-on-primary);
        }
        .zrlog-m3-switch-small .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            inset-inline-start: 4px;
            width: 12px;
            height: 12px;
        }
        .zrlog-m3-switch-small[aria-checked="true"] .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            inset-inline-start: calc(100% - 18px);
            width: 16px;
            height: 16px;
        }
        .zrlog-m3-switch:not(:disabled):hover .zrlog-m3-switch-handle,
        .zrlog-m3-switch:focus-visible .zrlog-m3-switch-handle {
            box-shadow: 0 0 0 8px ${stateHover};
        }
        .zrlog-m3-switch:not(:disabled):active .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            width: 28px;
            height: 28px;
            inset-inline-start: 0;
        }
        .zrlog-m3-switch[aria-checked="true"]:not(:disabled):active .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            inset-inline-start: calc(100% - 28px);
        }
        .zrlog-m3-switch-small:not(:disabled):active .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            width: 20px;
            height: 20px;
        }
        .zrlog-m3-switch-small[aria-checked="true"]:not(:disabled):active .zrlog-m3-switch-handle.zrlog-m3-switch-handle {
            inset-inline-start: calc(100% - 20px);
        }
        .zrlog-m3-switch:disabled { opacity: 0.38; }
        .zrlog-m3-switch::after {
            content: "";
            position: absolute;
            inset: -6px 0;
            border-radius: inherit;
        }
        .zrlog-m3-switch-small::after { inset-block: -10px; }
        .zrlog-m3-switch:focus-visible {
            outline: ${t.lineWidthFocus}px solid ${t.colorPrimary};
            outline-offset: 3px;
        }
        .zrlog-m3-checkbox-icon::before, .zrlog-m3-radio-icon::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            inset: 50% auto auto 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none;
            transition: background-color ${t.motionDurationFast};
        }
        .zrlog-m3-checkbox { min-height: 40px; align-items: center; }
        .zrlog-m3-checkbox:not(:has(input:disabled)):hover .zrlog-m3-checkbox-icon::before,
        .zrlog-m3-radio:not(:has(input:disabled)):hover .zrlog-m3-radio-icon::before {
            background: ${stateHover};
        }
        .zrlog-m3-checkbox:not(:has(input:disabled)):active .zrlog-m3-checkbox-icon::before,
        .zrlog-m3-radio:not(:has(input:disabled)):active .zrlog-m3-radio-icon::before,
        .zrlog-m3-checkbox:has(input:focus-visible) .zrlog-m3-checkbox-icon::before,
        .zrlog-m3-radio:has(input:focus-visible) .zrlog-m3-radio-icon::before {
            background: ${statePressed};
        }
        .zrlog-m3-checkbox:has(input:focus-visible) .zrlog-m3-checkbox-icon,
        .zrlog-m3-radio:has(input:focus-visible) .zrlog-m3-radio-icon {
            outline: ${t.lineWidthFocus}px solid ${t.colorPrimary};
            outline-offset: 3px;
        }
        .zrlog-m3-radio .zrlog-m3-radio-icon:has(input[type="radio"]) {
            background: transparent;
        }
        .zrlog-m3-checkbox-mixed .zrlog-m3-checkbox-icon.zrlog-m3-checkbox-icon {
            background: ${t.colorPrimary};
            border-color: ${t.colorPrimary};
        }
        .zrlog-m3-checkbox-mixed .zrlog-m3-checkbox-icon.zrlog-m3-checkbox-icon::after {
            width: 10px;
            height: 2px;
            background: var(--zrlog-m3-on-primary);
        }
        .zrlog-m3-checkbox-mixed:has(input:disabled) .zrlog-m3-checkbox-icon.zrlog-m3-checkbox-icon {
            background: ${t.colorTextDisabled};
            border-color: transparent;
        }
        .zrlog-m3-checkbox-mixed:has(input:disabled) .zrlog-m3-checkbox-icon.zrlog-m3-checkbox-icon::after {
            background: ${t.colorBgContainer};
        }
        .zrlog-m3-segmented.zrlog-m3-segmented {
            box-sizing: border-box;
            max-width: 100%;
            border: ${t.lineWidth}px solid ${t.colorBorder};
            padding: 0;
            overflow: hidden;
        }
        .zrlog-m3-segmented .zrlog-m3-segment.zrlog-m3-segment {
            min-width: 0;
            flex: 1 1 auto;
            border-radius: 0;
            box-shadow: none;
        }
        .zrlog-m3-segment + .zrlog-m3-segment {
            border-inline-start: ${t.lineWidth}px solid ${t.colorBorder};
        }
        .zrlog-m3-segmented-vertical .zrlog-m3-segment + .zrlog-m3-segment {
            border-inline-start: 0;
            border-block-start: ${t.lineWidth}px solid ${t.colorBorder};
        }
        .zrlog-m3-segment-label.zrlog-m3-segment-label {
            box-sizing: border-box;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-inline: 16px;
            min-height: 38px;
        }
        .zrlog-m3-segment:has(input:checked) .zrlog-m3-segment-label::before {
            content: "";
            width: 12px;
            height: 12px;
            display: inline-block;
            vertical-align: middle;
            margin-inline-end: 8px;
            background: currentColor;
            clip-path: polygon(0 48%, 14% 34%, 38% 58%, 85% 10%, 100% 25%, 38% 88%);
        }
        .zrlog-m3-segment:has(input:focus-visible) {
            outline: ${t.lineWidthFocus}px solid ${t.colorPrimary};
            outline-offset: -3px;
        }
        .zrlog-m3-segmented-small .zrlog-m3-segment-label.zrlog-m3-segment-label {
            min-height: 30px;
            padding-inline: 12px;
        }
        .zrlog-m3-tab.zrlog-m3-tab { padding-inline: 16px; }
        .zrlog-m3-tab:not(:has([aria-disabled="true"])):hover { background: ${stateHover}; }
        .zrlog-m3-tab:not(:has([aria-disabled="true"])):active { background: ${statePressed}; }
        .zrlog-m3-tab-indicator.zrlog-m3-tab-indicator { border-radius: 3px; }
        .zrlog-m3-chip.zrlog-m3-chip {
            position: relative;
            min-height: 32px;
            padding-inline: 12px;
            font-size: ${t.fontSize}px;
            line-height: 30px;
            font-weight: 500;
            border-radius: 8px;
            vertical-align: middle;
        }
        .zrlog-m3-chip::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: currentColor;
            opacity: 0;
            pointer-events: none;
        }
        .zrlog-m3-chip:not(.zrlog-m3-chip-disabled):hover::before { opacity: 0.08; }
        .zrlog-m3-chip:not(.zrlog-m3-chip-disabled):active::before { opacity: 0.12; }
        .zrlog-m3-chip-close.zrlog-m3-chip-close {
            width: 24px;
            height: 24px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
        .zrlog-m3-chip-close:hover { background: ${t.controlItemBgHover}; }
        .zrlog-m3-slider-handle:focus-visible {
            outline: ${t.lineWidthFocus}px solid ${t.colorPrimary};
            outline-offset: 8px;
        }
        .zrlog-m3-slider.zrlog-m3-slider-disabled .zrlog-m3-slider-handle.zrlog-m3-slider-handle::after {
            background: ${t.colorTextDisabled};
        }
        .zrlog-m3-icon-button.zrlog-m3-icon-button {
            border-radius: 50%;
            padding-inline: 0;
            aspect-ratio: 1;
        }
        .zrlog-m3-tonal-button.zrlog-m3-tonal-button:not(:disabled) {
            background: ${t.colorPrimaryBg};
            color: ${t.colorPrimaryText};
            border-color: transparent;
            box-shadow: none;
        }
        .zrlog-m3-tonal-button.zrlog-m3-tonal-button:not(:disabled):hover { background: ${t.controlItemBgActive}; }
        .zrlog-m3-tonal-button.zrlog-m3-tonal-button:not(:disabled):active { background: ${t.colorPrimaryBgHover}; }
        .zrlog-m3-dialog.zrlog-m3-dialog { padding: 24px; }
        .zrlog-m3-dialog-header.zrlog-m3-dialog-header { margin-bottom: 16px; }
        .zrlog-m3-dialog-footer.zrlog-m3-dialog-footer { margin-top: 24px; }
        .zrlog-m3-close.zrlog-m3-close {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .zrlog-m3-drawer-header.zrlog-m3-drawer-header {
            padding: 20px 24px;
            border-bottom: 0;
            gap: 16px;
        }
        .zrlog-m3-drawer-title.zrlog-m3-drawer-title {
            font-size: ${t.fontSizeHeading4}px;
            font-weight: 500;
            line-height: 1.4;
        }
        .zrlog-m3-drawer-footer.zrlog-m3-drawer-footer { border-top: 0; }
        .zrlog-m3-menu-item.zrlog-m3-menu-item {
            box-sizing: border-box;
            min-height: 48px;
            padding-inline: 16px;
            border-radius: 0;
        }
        @media (prefers-reduced-motion: reduce) {
            .zrlog-m3-switch .zrlog-m3-switch-handle,
            .zrlog-m3-checkbox-icon, .zrlog-m3-checkbox-icon::before, .zrlog-m3-checkbox-icon::after,
            .zrlog-m3-radio-icon, .zrlog-m3-radio-icon::before, .zrlog-m3-radio-icon::after,
            .zrlog-m3-segment, .zrlog-m3-tab-indicator,
            .zrlog-m3-slider-handle::after, .zrlog-m3-progress * {
                transition: none !important;
                animation: none !important;
            }
        }
    `}</style>
    );
};

export default MaterialControlsStyle;
