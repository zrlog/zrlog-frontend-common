import { theme } from "antd";

// Component presentation scoped by public App and popup class names.
const DeskStyles = () => {
    const { token } = theme.useToken();
    return <style data-zrlog-desk-style>{`
.zrlog-desk.zrlog-desk a,
.zrlog-desk.zrlog-desk .ant-btn-link,
.zrlog-desk.zrlog-desk.ant-btn-link {
              color: ${token.colorText};
            }
.zrlog-desk.zrlog-desk a:hover,
.zrlog-desk.zrlog-desk .ant-btn-link:not(:disabled):not(.ant-btn-disabled):hover,
.zrlog-desk.zrlog-desk.ant-btn-link:not(:disabled):not(.ant-btn-disabled):hover {
              color: ${token.colorTextSecondary};
            }
.zrlog-desk.zrlog-desk .ant-card,
.zrlog-desk.zrlog-desk.ant-card,
.zrlog-desk.zrlog-desk .ant-table-wrapper .ant-table,
.zrlog-desk.zrlog-desk.ant-table-wrapper .ant-table,
.zrlog-desk.zrlog-desk .ant-list-bordered,
.zrlog-desk.zrlog-desk.ant-list-bordered,
.zrlog-desk.zrlog-desk .ant-collapse,
.zrlog-desk.zrlog-desk.ant-collapse,
.zrlog-desk.zrlog-desk .ant-descriptions-bordered .ant-descriptions-view,
.zrlog-desk.zrlog-desk.ant-descriptions-bordered .ant-descriptions-view {
              border-color: ${token.colorBorder};
              box-shadow: ${token.boxShadowSecondary};
            }
.zrlog-desk.zrlog-desk .ant-card,
.zrlog-desk.zrlog-desk.ant-card {
              border-radius: ${token.borderRadiusLG}px;
              background: linear-gradient(180deg, ${token.colorBgContainer} 0%, rgba(255, 253, 248, 0.96) 100%);
            }
.zrlog-desk.zrlog-desk .ant-card-head,
.zrlog-desk.zrlog-desk.ant-card-head {
              min-height: 44px;
              border-bottom-color: ${token.colorBorderSecondary};
            }
.zrlog-desk.zrlog-desk .ant-card-head-title,
.zrlog-desk.zrlog-desk.ant-card-head-title,
.zrlog-desk.zrlog-desk .ant-modal-title,
.zrlog-desk.zrlog-desk.ant-modal-title,
.zrlog-desk.zrlog-desk .ant-drawer-title,
.zrlog-desk.zrlog-desk.ant-drawer-title {
              color: ${token.colorText};
              font-weight: 650;
            }
.zrlog-desk.zrlog-desk .ant-btn,
.zrlog-desk.zrlog-desk.ant-btn {
              border-radius: ${token.borderRadiusSM}px;
              box-shadow: none;
              font-weight: 560;
            }
.zrlog-desk.zrlog-desk .ant-btn:not(.ant-btn-text):not(.ant-btn-link),
.zrlog-desk.zrlog-desk.ant-btn:not(.ant-btn-text):not(.ant-btn-link) {
              border-color: ${token.colorBorder};
            }
.zrlog-desk.zrlog-desk .ant-btn-primary,
.zrlog-desk.zrlog-desk.ant-btn-primary {
              background: ${token.colorText};
              border-color: ${token.colorText};
              color: ${token.colorWhite};
            }
.zrlog-desk.zrlog-desk .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover,
.zrlog-desk.zrlog-desk.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover,
.zrlog-desk.zrlog-desk .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):focus-visible,
.zrlog-desk.zrlog-desk.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):focus-visible {
              background: ${token.colorPrimary};
              border-color: ${token.colorPrimary};
              color: ${token.colorWhite};
            }
.zrlog-desk.zrlog-desk .ant-btn-variant-text,
.zrlog-desk.zrlog-desk.ant-btn-variant-text,
.zrlog-desk.zrlog-desk .ant-btn-variant-link,
.zrlog-desk.zrlog-desk.ant-btn-variant-link {
              border-radius: ${token.borderRadiusSM}px !important;
            }
.zrlog-desk.zrlog-desk .ant-input,
.zrlog-desk.zrlog-desk.ant-input,
.zrlog-desk.zrlog-desk .ant-input-affix-wrapper,
.zrlog-desk.zrlog-desk.ant-input-affix-wrapper,
.zrlog-desk.zrlog-desk .ant-input-number,
.zrlog-desk.zrlog-desk.ant-input-number,
.zrlog-desk.zrlog-desk .ant-picker,
.zrlog-desk.zrlog-desk.ant-picker,
.zrlog-desk.zrlog-desk .ant-select,
.zrlog-desk.zrlog-desk.ant-select,
.zrlog-desk.zrlog-desk .ant-select-content,
.zrlog-desk.zrlog-desk.ant-select-content,
.zrlog-desk.zrlog-desk .ant-select-selector,
.zrlog-desk.zrlog-desk.ant-select-selector,
.zrlog-desk.zrlog-desk .ant-mentions,
.zrlog-desk.zrlog-desk.ant-mentions,
.zrlog-desk.zrlog-desk .ant-radio-button-wrapper,
.zrlog-desk.zrlog-desk.ant-radio-button-wrapper,
.zrlog-desk.zrlog-desk .ant-upload.ant-upload-drag,
.zrlog-desk.zrlog-desk.ant-upload.ant-upload-drag {
              border-radius: ${token.borderRadiusSM}px !important;
            }
.zrlog-desk.zrlog-desk .ant-input,
.zrlog-desk.zrlog-desk.ant-input,
.zrlog-desk.zrlog-desk .ant-input-affix-wrapper,
.zrlog-desk.zrlog-desk.ant-input-affix-wrapper,
.zrlog-desk.zrlog-desk .ant-input-number,
.zrlog-desk.zrlog-desk.ant-input-number,
.zrlog-desk.zrlog-desk .ant-picker,
.zrlog-desk.zrlog-desk.ant-picker,
.zrlog-desk.zrlog-desk .ant-select,
.zrlog-desk.zrlog-desk.ant-select,
.zrlog-desk.zrlog-desk .ant-select-selector,
.zrlog-desk.zrlog-desk.ant-select-selector {
              background: ${token.colorBgContainer};
              border-color: ${token.colorBorder};
            }
.zrlog-desk.zrlog-desk .ant-form-item-label > label,
.zrlog-desk.zrlog-desk.ant-form-item-label > label {
              color: ${token.colorTextSecondary};
              font-weight: 560;
            }
.zrlog-desk.zrlog-desk .ant-table-wrapper .ant-table,
.zrlog-desk.zrlog-desk.ant-table-wrapper .ant-table {
              border-radius: ${token.borderRadiusLG}px;
              overflow: hidden;
            }
.zrlog-desk.zrlog-desk .ant-table-thead > tr > th,
.zrlog-desk.zrlog-desk.ant-table-thead > tr > th {
              border-bottom-color: ${token.colorBorder};
              color: ${token.colorTextSecondary};
              font-weight: 700;
              letter-spacing: 0;
              text-transform: uppercase;
            }
.zrlog-desk.zrlog-desk .ant-table-tbody > tr > td,
.zrlog-desk.zrlog-desk.ant-table-tbody > tr > td {
              border-bottom-color: ${token.colorBorderSecondary};
            }
.zrlog-desk.zrlog-desk .ant-table-tbody > tr:last-child > td,
.zrlog-desk.zrlog-desk.ant-table-tbody > tr:last-child > td {
              border-bottom-color: transparent;
            }
.zrlog-desk.zrlog-desk .ant-menu,
.zrlog-desk.zrlog-desk.ant-menu {
              background: transparent;
            }
.zrlog-desk.zrlog-desk .ant-menu-item,
.zrlog-desk.zrlog-desk.ant-menu-item,
.zrlog-desk.zrlog-desk .ant-menu-submenu-title,
.zrlog-desk.zrlog-desk.ant-menu-submenu-title {
              border-radius: ${token.borderRadiusSM}px !important;
              font-weight: 560;
            }
.zrlog-desk.zrlog-desk .ant-menu-item-selected,
.zrlog-desk.zrlog-desk.ant-menu-item-selected {
              background: rgba(23, 32, 51, 0.08) !important;
              box-shadow: inset 3px 0 0 ${token.colorText};
            }
.zrlog-desk.zrlog-desk .ant-tabs-tab,
.zrlog-desk.zrlog-desk.ant-tabs-tab {
              font-weight: 560;
            }
.zrlog-desk.zrlog-desk .ant-tag,
.zrlog-desk.zrlog-desk.ant-tag,
.zrlog-desk.zrlog-desk .ant-badge .ant-badge-count,
.zrlog-desk.zrlog-desk.ant-badge .ant-badge-count,
.zrlog-desk.zrlog-desk .ant-segmented,
.zrlog-desk.zrlog-desk.ant-segmented,
.zrlog-desk.zrlog-desk .ant-pagination-item,
.zrlog-desk.zrlog-desk.ant-pagination-item,
.zrlog-desk.zrlog-desk .ant-pagination-prev .ant-pagination-item-link,
.zrlog-desk.zrlog-desk.ant-pagination-prev .ant-pagination-item-link,
.zrlog-desk.zrlog-desk .ant-pagination-next .ant-pagination-item-link,
.zrlog-desk.zrlog-desk.ant-pagination-next .ant-pagination-item-link {
              border-radius: ${token.borderRadiusSM}px;
            }
.zrlog-desk.zrlog-desk .ant-tag,
.zrlog-desk.zrlog-desk.ant-tag {
              border-color: ${token.colorBorder};
              font-weight: 560;
            }
.zrlog-desk.zrlog-desk .ant-tag-blue,
.zrlog-desk.zrlog-desk.ant-tag-blue,
.zrlog-desk.zrlog-desk .ant-tag-cyan,
.zrlog-desk.zrlog-desk.ant-tag-cyan,
.zrlog-desk.zrlog-desk .ant-tag-geekblue,
.zrlog-desk.zrlog-desk.ant-tag-geekblue,
.zrlog-desk.zrlog-desk .ant-tag-processing,
.zrlog-desk.zrlog-desk.ant-tag-processing {
              background: ${token.colorFillSecondary};
              border-color: ${token.colorBorder};
              color: ${token.colorTextSecondary};
            }
.zrlog-desk.zrlog-desk .ant-tag-blue .anticon,
.zrlog-desk.zrlog-desk.ant-tag-blue .anticon,
.zrlog-desk.zrlog-desk .ant-tag-cyan .anticon,
.zrlog-desk.zrlog-desk.ant-tag-cyan .anticon,
.zrlog-desk.zrlog-desk .ant-tag-geekblue .anticon,
.zrlog-desk.zrlog-desk.ant-tag-geekblue .anticon,
.zrlog-desk.zrlog-desk .ant-tag-processing .anticon,
.zrlog-desk.zrlog-desk.ant-tag-processing .anticon {
              color: inherit;
            }
.zrlog-desk.zrlog-desk .ant-alert,
.zrlog-desk.zrlog-desk.ant-alert,
.zrlog-desk.zrlog-desk .ant-message-notice-content,
.zrlog-desk.zrlog-desk.ant-message-notice-content,
.zrlog-desk.zrlog-desk .ant-notification-notice,
.zrlog-desk.zrlog-desk.ant-notification-notice,
.zrlog-desk.zrlog-desk .ant-popover-inner,
.zrlog-desk.zrlog-desk.ant-popover-inner,
.zrlog-desk.zrlog-desk .ant-dropdown-menu,
.zrlog-desk.zrlog-desk.ant-dropdown-menu,
.zrlog-desk.zrlog-desk .ant-picker-dropdown .ant-picker-panel-container,
.zrlog-desk.zrlog-desk.ant-picker-dropdown .ant-picker-panel-container,
.zrlog-desk.zrlog-desk .ant-select-dropdown,
.zrlog-desk.zrlog-desk.ant-select-dropdown,
.zrlog-desk.zrlog-desk .ant-modal-container,
.zrlog-desk.zrlog-desk.ant-modal-container,
.zrlog-desk.zrlog-desk .ant-modal-content,
.zrlog-desk.zrlog-desk.ant-modal-content,
.zrlog-desk.zrlog-desk .ant-drawer-container,
.zrlog-desk.zrlog-desk.ant-drawer-container,
.zrlog-desk.zrlog-desk .ant-drawer-content,
.zrlog-desk.zrlog-desk.ant-drawer-content {
              border: ${token.lineWidth}px ${token.lineType} ${token.colorBorder};
              border-radius: ${token.borderRadiusLG}px !important;
              box-shadow: ${token.boxShadow};
            }
.zrlog-desk.zrlog-desk .ant-modal-header,
.zrlog-desk.zrlog-desk.ant-modal-header,
.zrlog-desk.zrlog-desk .ant-drawer-header,
.zrlog-desk.zrlog-desk.ant-drawer-header,
.zrlog-desk.zrlog-desk .ant-modal-footer,
.zrlog-desk.zrlog-desk.ant-modal-footer,
.zrlog-desk.zrlog-desk .ant-drawer-footer,
.zrlog-desk.zrlog-desk.ant-drawer-footer {
              background: ${token.colorBgContainer};
              border-color: ${token.colorBorderSecondary};
            }
.zrlog-desk.zrlog-desk .ant-modal-close,
.zrlog-desk.zrlog-desk.ant-modal-close,
.zrlog-desk.zrlog-desk .ant-drawer-close,
.zrlog-desk.zrlog-desk.ant-drawer-close,
.zrlog-desk.zrlog-desk .ant-color-picker-trigger,
.zrlog-desk.zrlog-desk.ant-color-picker-trigger,
.zrlog-desk.zrlog-desk .ant-float-btn-body,
.zrlog-desk.zrlog-desk.ant-float-btn-body,
.zrlog-desk.zrlog-desk .ant-back-top-content,
.zrlog-desk.zrlog-desk.ant-back-top-content {
              border-radius: ${token.borderRadiusSM}px !important;
            }
.zrlog-desk.zrlog-desk .ant-statistic-title,
.zrlog-desk.zrlog-desk.ant-statistic-title,
.zrlog-desk.zrlog-desk .ant-typography-secondary,
.zrlog-desk.zrlog-desk.ant-typography-secondary {
              color: ${token.colorTextSecondary};
            }
.zrlog-desk.zrlog-desk .ant-divider,
.zrlog-desk.zrlog-desk.ant-divider {
              border-color: ${token.colorBorderSecondary};
            }
`}</style>;
};
export default DeskStyles;
