import { theme } from "antd";
import { useMemo } from "react";
import type { ReactNode } from "react";
import { useUiIconSet } from "./icon-context";
import SuccessIcon from "./material-icons/success";
import ErrorIcon from "./material-icons/error";
import InfoIcon from "./material-icons/info";
import AlertIcon from "./material-icons/alert";
import LoadingIcon from "./material-icons/loading";

export const useFeedbackIcons = () => {
    const material = useUiIconSet() === "material-symbols-rounded";
    const { token } = theme.useToken();
    return useMemo<Record<string, ReactNode>>(() => material ? {
        success: <SuccessIcon selected style={{ color: token.colorSuccess }} />,
        error: <ErrorIcon selected style={{ color: token.colorError }} />,
        info: <InfoIcon selected style={{ color: token.colorInfo }} />,
        warning: <AlertIcon selected style={{ color: token.colorWarning }} />,
        loading: <LoadingIcon style={{ color: token.colorPrimary }} />,
    } : {}, [material, token.colorSuccess, token.colorError, token.colorInfo, token.colorWarning, token.colorPrimary]);
};
