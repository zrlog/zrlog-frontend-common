import { Typography } from "antd";
import { forwardRef } from "react";
import type { ComponentProps, ComponentRef } from "react";
import { useUiIconSet } from "../icon-context";
import CopyIcon from "../material-icons/copy";
import CheckIcon from "../material-icons/check";

const useCopyIcons = <T extends { copyable?: ComponentProps<typeof Typography.Text>["copyable"] }>(props: T): T => {
    const material = useUiIconSet() === "material-symbols-rounded";
    if (!material || !props.copyable) return props;
    return { ...props, copyable: {
        icon: [<CopyIcon key="copy" />, <CheckIcon key="copied" />],
        ...(typeof props.copyable === "object" ? props.copyable : {}),
    } };
};

const UiTypography = forwardRef<ComponentRef<typeof Typography>, ComponentProps<typeof Typography>>((props, ref) =>
    <Typography {...props} ref={ref} />);
const Text = forwardRef<ComponentRef<typeof Typography.Text>, ComponentProps<typeof Typography.Text>>((props, ref) =>
    <Typography.Text {...useCopyIcons(props)} ref={ref} />);
const Paragraph = forwardRef<ComponentRef<typeof Typography.Paragraph>, ComponentProps<typeof Typography.Paragraph>>((props, ref) =>
    <Typography.Paragraph {...useCopyIcons(props)} ref={ref} />);
const Title = forwardRef<ComponentRef<typeof Typography.Title>, ComponentProps<typeof Typography.Title>>((props, ref) =>
    <Typography.Title {...useCopyIcons(props)} ref={ref} />);
const Link = forwardRef<ComponentRef<typeof Typography.Link>, ComponentProps<typeof Typography.Link>>((props, ref) =>
    <Typography.Link {...useCopyIcons(props)} ref={ref} />);
UiTypography.displayName = "UiTypography";
Text.displayName = "UiText";
Paragraph.displayName = "UiParagraph";
Title.displayName = "UiTitle";
Link.displayName = "UiLink";
export default Object.assign(UiTypography, { Text, Paragraph, Title, Link }) as typeof Typography;
