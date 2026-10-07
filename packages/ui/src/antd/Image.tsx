import { Image } from "antd";
import type { ImageProps } from "antd";
import { cloneElement, isValidElement } from "react";
import { useUiIconSet } from "../icon-context";
import RotateLeftIcon from "../material-icons/rotate-left";
import RotateRightIcon from "../material-icons/rotate-right";
import ZoomInIcon from "../material-icons/zoom-in";
import ZoomOutIcon from "../material-icons/zoom-out";
import FlipIcon from "../material-icons/flip";
import CloseIcon from "../material-icons/close";

type PreviewOptions = Exclude<ImageProps["preview"], boolean | undefined>;
const defaultIcons = {
    rotateLeft: <RotateLeftIcon />, rotateRight: <RotateRightIcon />,
    zoomIn: <ZoomInIcon />, zoomOut: <ZoomOutIcon />,
    flipX: <FlipIcon />, flipY: <FlipIcon rotate={90} />,
};
const actionNames = ["flipY", "flipX", "rotateLeft", "rotateRight", "zoomOut", "zoomIn"] as const;
const renderActions = (overrides: PreviewOptions["icons"]): NonNullable<PreviewOptions["actionsRender"]> =>
    (original, info) => {
        const glyphs = { ...defaultIcons, ...overrides };
        // Ant Design replaces preview.icons internally. Its public actionsRender slot
        // exposes complete buttons; keep their handlers, labels and disabled state.
        return isValidElement(original) ? cloneElement(original, undefined, ...actionNames.map((name) => {
            const button = info.icons[`${name}Icon`];
            return isValidElement(button) ? cloneElement(button, { key: name }, glyphs[name]) : button;
        })) : original;
    };

const UiImage = (props: ImageProps) => {
    const material = useUiIconSet() === "material-symbols-rounded";
    const preview = material && props.preview !== false ? {
        ...(typeof props.preview === "object" ? props.preview : {}),
        actionsRender: typeof props.preview === "object" && (props.preview.actionsRender ?? props.preview.toolbarRender)
            || renderActions(typeof props.preview === "object" ? props.preview.icons : undefined),
        closeIcon: typeof props.preview === "object" && props.preview.closeIcon !== undefined
            ? props.preview.closeIcon : <CloseIcon />,
    } : props.preview;
    return <Image {...props} preview={preview} />;
};
export default Object.assign(UiImage, { PreviewGroup: Image.PreviewGroup });
