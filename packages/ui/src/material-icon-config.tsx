import type { ConfigProviderProps } from "antd";
import CloseIcon from "./material-icons/close";
import ErrorIcon from "./material-icons/error";
import SuccessIcon from "./material-icons/success";
import InfoIcon from "./material-icons/info";
import AlertIcon from "./material-icons/alert";
import ChevronDownIcon from "./material-icons/chevron-down";
import ChevronRightIcon from "./material-icons/chevron-right";
import CheckIcon from "./material-icons/check";
import LoadingIcon from "./material-icons/loading";
import SearchIcon from "./material-icons/search";
import EyeIcon from "./material-icons/eye";
import EyeOffIcon from "./material-icons/eye-off";
import CalendarIcon from "./material-icons/calendar";
import TimeIcon from "./material-icons/time";
import AddIcon from "./material-icons/add";
import MoreIcon from "./material-icons/more";
import HelpIcon from "./material-icons/help";
import BackTopIcon from "./material-icons/back-top";

// Only documented public ConfigProvider icon slots. Explicit component props win.
const statusIcons = {
    successIcon: <SuccessIcon selected />,
    infoIcon: <InfoIcon selected />,
    warningIcon: <AlertIcon selected />,
    errorIcon: <ErrorIcon selected />,
};
export const materialIconConfig: ConfigProviderProps = {
    button: { loadingIcon: <LoadingIcon /> },
    inputSearch: { searchIcon: <SearchIcon /> },
    inputPassword: { iconRender: (visible) => visible ? <EyeIcon /> : <EyeOffIcon /> },
    select: {
        suffixIcon: <ChevronDownIcon />, clearIcon: <ErrorIcon selected />,
        removeIcon: <CloseIcon />, menuItemSelectedIcon: <CheckIcon />,
        loadingIcon: <LoadingIcon />,
    },
    modal: { closeIcon: <CloseIcon />, ...statusIcons },
    drawer: { closeIcon: <CloseIcon /> },
    alert: { closeIcon: <CloseIcon />, ...statusIcons },
    notification: { closeIcon: <CloseIcon /> },
    datePicker: { suffixIcon: <CalendarIcon />, clearIcon: <ErrorIcon selected /> },
    timePicker: { suffixIcon: <TimeIcon />, clearIcon: <ErrorIcon selected /> },
    breadcrumb: { separator: <ChevronRightIcon />, dropdownIcon: <ChevronDownIcon /> },
    tabs: { addIcon: <AddIcon />, removeIcon: <CloseIcon />, moreIcon: <MoreIcon /> },
    collapse: { expandIcon: ({ isActive }) => <ChevronRightIcon rotate={isActive ? 90 : 0} /> },
    form: { tooltip: { icon: <HelpIcon /> } },
    floatButton: { backTopIcon: <BackTopIcon /> },
    // Clear buttons for Input are opt-in per field, so do not set allowClear globally.
};
