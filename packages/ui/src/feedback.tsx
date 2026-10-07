import { App, message } from "antd";
import { isValidElement, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import type { MessageInstance, ArgsProps, ConfigOptions } from "antd/es/message/interface";
import type { NotificationInstance } from "antd/es/notification/interface";
import { useFeedbackIcons } from "./feedback-icons";

// Preserve Ant Design's overloads, explicit icons, close functions and thenables.
type IconSource = Record<string, ReactNode> | (() => Record<string, ReactNode>);
const currentIcons = (source: IconSource) => typeof source === "function" ? source() : source;

export const withMessageIcons = (api: MessageInstance, source: IconSource): MessageInstance => {
    if (typeof source !== "function" && !Object.keys(source).length) return api;
    const result = { ...api };
    for (const type of ["success", "error", "info", "warning", "loading"] as const) {
        result[type] = (content, ...rest) => {
            const icons = currentIcons(source);
            if (!Object.keys(icons).length) return api[type](content, ...rest);
            const config: ArgsProps = content && typeof content === "object" && !isValidElement(content) && "content" in content
                ? content : { content: content as ReactNode };
            return api[type]({ ...config, icon: config.icon === undefined ? icons[type] : config.icon }, ...rest);
        };
    }
    result.open = (config) => {
        const icons = currentIcons(source);
        return api.open(!Object.keys(icons).length ? config : { ...config,
            icon: config.icon === undefined ? icons[config.type ?? "info"] : config.icon });
    };
    return result;
};

export const withNotificationIcons = (api: NotificationInstance, source: IconSource): NotificationInstance => {
    if (typeof source !== "function" && !Object.keys(source).length) return api;
    const result = { ...api };
    for (const type of ["success", "error", "info", "warning"] as const) {
        result[type] = (config) => {
            const icons = currentIcons(source);
            return api[type](!Object.keys(icons).length ? config : { ...config,
                icon: config.icon === undefined ? icons[type] : config.icon });
        };
    }
    result.open = (config) => {
        const icons = currentIcons(source);
        return api.open(!Object.keys(icons).length ? config : { ...config,
            icon: config.icon === undefined && config.type ? icons[config.type] : config.icon });
    };
    return result;
};

export const useUiMessage = (config?: ConfigOptions): ReturnType<typeof message.useMessage> => {
    const [api, holder] = message.useMessage(config);
    const icons = useFeedbackIcons();
    const latest = useRef(icons);
    latest.current = icons;
    // Theme changes must not change the API identity and restart host data effects.
    return [useMemo(() => withMessageIcons(api, () => latest.current), [api]), holder];
};

export const useUiApp = (): ReturnType<typeof App.useApp> => {
    const app = App.useApp();
    const icons = useFeedbackIcons();
    const latest = useRef(icons);
    latest.current = icons;
    // Notification configuration can change App's context object independently of message.
    const themedMessage = useMemo(() => withMessageIcons(app.message, () => latest.current), [app.message]);
    const themedNotification = useMemo(() => withNotificationIcons(app.notification, () => latest.current), [app.notification]);
    return useMemo(() => ({ ...app,
        message: themedMessage,
        notification: themedNotification,
    }), [app, themedMessage, themedNotification]);
};
