import {Alert, Breadcrumb, Button, Empty, Grid, Menu, Select, Spin, Typography, theme} from "antd";
import {useEffect, useRef, useState} from "react";
import type {CSSProperties, ReactNode} from "react";
import Input from "./antd/Input";
import FolderIcon from "./icons/folder";
import FileIcon from "./icons/file";
import AppsIcon from "./icons/apps";
import ListIcon from "./icons/list";

export interface ResourceEntry {
    path: string;
    name: string;
    type: string;
    size?: number;
}

export interface ResourcePickerLabels {
    title: string;
    searchPlaceholder: string;
    empty: string;
    searchEmpty: string;
    grid: string;
    list: string;
    retry: string;
}

export interface ResourcePickerProps<T extends ResourceEntry> {
    entries: T[];
    roots: T[];
    path: string;
    search: string;
    viewMode: "grid" | "list";
    labels: ResourcePickerLabels;
    onPathChange: (path: string) => void;
    onSearchChange: (search: string) => void;
    onViewModeChange: (view: "grid" | "list") => void;
    onSelect: (entry: T) => void;
    canOpen?: (entry: T) => boolean;
    canSelect?: (entry: T) => boolean;
    renderIcon?: (entry: T) => ReactNode;
    renderPreview?: (entry: T) => ReactNode;
    formatSize?: (size: number) => string;
    disabled?: boolean;
    loading?: boolean;
    error?: ReactNode;
    onRetry?: () => void;
    style?: CSSProperties;
}

/** Controlled resource browser. The host supplies data, permissions, localization and persistence. */
export function ResourcePicker<T extends ResourceEntry>({
    entries, roots, path, search, viewMode, labels, onPathChange, onSearchChange,
    onViewModeChange, onSelect, canOpen = (entry) => entry.type === "directory",
    canSelect = (entry) => entry.type === "file", renderIcon, renderPreview,
    formatSize, disabled = false, loading = false, error, onRetry, style,
}: ResourcePickerProps<T>) {
    const {token} = theme.useToken();
    const screens = Grid.useBreakpoint();
    const narrow = screens.md !== true;
    const [draft, setDraft] = useState(search);
    const timer = useRef<ReturnType<typeof setTimeout>>();
    const composing = useRef(false);
    const searchChange = useRef(onSearchChange);
    searchChange.current = onSearchChange;
    const clearTimer = () => {
        if (timer.current !== undefined) clearTimeout(timer.current);
        timer.current = undefined;
    };
    useEffect(() => {clearTimer(); setDraft(search);}, [search]);
    useEffect(() => clearTimer, []);
    const scheduleSearch = (value: string) => {
        setDraft(value);
        clearTimer();
        if (!composing.current) {
            timer.current = setTimeout(() => searchChange.current(value.trim()), value.trim() ? 500 : 0);
        }
    };
    const navigate = (next: string) => {
        clearTimer();
        setDraft("");
        onSearchChange("");
        onPathChange(next);
    };
    const activeRoot = [...roots].sort((a, b) => b.path.length - a.path.length)
        .find((root) => path === root.path || path.startsWith(root.path.replace(/\/$/, "") + "/"));
    const crumb = (key: string, title: string) => ({key, title: <Button
        type="link" size="small" disabled={disabled} onClick={() => navigate(key)}
        style={{padding: 0, height: "auto", whiteSpace: "normal", textAlign: "start"}}
    >{title}</Button>});
    const breadcrumbs = [crumb("", labels.title)];
    if (activeRoot?.path) {
        breadcrumbs.push(crumb(activeRoot.path, activeRoot.name));
        const parts = path.substring(activeRoot.path.length).split("/").filter(Boolean);
        parts.forEach((part, index) => breadcrumbs.push(crumb(
            activeRoot.path.replace(/\/$/, "") + "/" + parts.slice(0, index + 1).join("/"), part)));
    }
    const icon = (entry: T) => renderIcon?.(entry) ?? (canOpen(entry) ? <FolderIcon/> : <FileIcon/>);
    const border = `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`;

    return <div style={{display: "flex", minHeight: 0, height: "100%", overflow: "hidden", border,
        borderRadius: token.borderRadiusLG, background: token.colorBgContainer, ...style}}>
        {!narrow && roots.length > 0 && <nav aria-label={labels.title} style={{width: 200, flexShrink: 0,
            padding: token.paddingSM, overflow: "auto", borderInlineEnd: border, background: token.colorFillQuaternary}}>
            <Menu
                selectedKeys={[activeRoot?.path ?? ""]} mode="inline" inlineIndent={0}
                style={{borderInlineEnd: 0, background: "transparent"}} disabled={disabled}
                items={roots.map((root) => ({key: root.path, icon: icon(root), label: root.name}))}
                onClick={({key}) => navigate(key)}
            />
        </nav>}
        <div style={{flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: token.marginSM,
                padding: token.padding, borderBottom: border}}>
                <Input.Search
                    aria-label={labels.searchPlaceholder} placeholder={labels.searchPlaceholder}
                    allowClear value={draft} disabled={disabled}
                    style={{flex: "1 1 180px", minWidth: 0}}
                    onChange={(event) => scheduleSearch(event.target.value)}
                    onSearch={(value) => {clearTimer(); searchChange.current(value.trim());}}
                    onCompositionStart={() => {composing.current = true; clearTimer();}}
                    onCompositionEnd={(event) => {composing.current = false; scheduleSearch(event.currentTarget.value);}}
                />
                {narrow && <Select
                    aria-label={labels.title} value={activeRoot?.path ?? ""} disabled={disabled}
                    onChange={navigate} style={{minWidth: 136, flex: "1 1 136px"}}
                    options={[{value: "", label: labels.title}, ...roots.map((root) => ({value: root.path, label: root.name}))]}
                />}
                <Button disabled={disabled} icon={viewMode === "grid" ? <ListIcon/> : <AppsIcon/>}
                    onClick={() => onViewModeChange(viewMode === "grid" ? "list" : "grid")}
                >{viewMode === "grid" ? labels.list : labels.grid}</Button>
            </div>
            <Breadcrumb items={breadcrumbs} style={{padding: token.paddingSM, borderBottom: border, overflowWrap: "anywhere"}}/>
            <div aria-busy={loading} style={{flex: 1, minHeight: 0, overflow: "auto", padding: token.padding,
                background: token.colorBgLayout, overscrollBehavior: "contain"}}>
                {error ? <Alert type="error" showIcon title={error} action={onRetry ?
                    <Button onClick={onRetry} disabled={loading}>{labels.retry}</Button> : undefined}/>
                    : loading ? <div style={{display: "grid", placeItems: "center", minHeight: 160}}><Spin/></div>
                    : entries.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={search ? labels.searchEmpty : labels.empty}/>
                    : <div style={viewMode === "grid" ? {display: "grid",
                        gridTemplateColumns: `repeat(auto-fill, minmax(${narrow ? 112 : 144}px, 1fr))`, gap: token.marginSM} : undefined}>
                        {entries.map((entry) => {
                            const openable = canOpen(entry);
                            const selectable = !disabled && (openable || canSelect(entry));
                            const grid = viewMode === "grid";
                            return <button key={entry.path} type="button" disabled={!selectable} aria-label={entry.name}
                                onClick={() => openable ? navigate(entry.path) : onSelect(entry)}
                                style={{display: "flex", flexDirection: grid ? "column" : "row", alignItems: "center",
                                    justifyContent: grid ? "center" : "flex-start", gap: token.marginXS, width: "100%",
                                    minWidth: 0, minHeight: grid ? 100 : 42, padding: token.paddingSM,
                                    borderTop: grid ? border : 0, borderLeft: grid ? border : 0,
                                    borderRight: grid ? border : 0, borderBottom: border, borderRadius: grid ? token.borderRadius : 0,
                                    background: token.colorBgContainer, color: token.colorText,
                                    cursor: selectable ? "pointer" : "default", opacity: selectable ? 1 : token.opacityLoading,
                                    font: "inherit", textAlign: grid ? "center" : "start"}}>
                                <span style={{fontSize: grid ? 28 : 20, display: "flex", alignItems: "center",
                                    justifyContent: "center", maxWidth: "100%", overflow: "hidden"}}>
                                    {grid ? renderPreview?.(entry) ?? icon(entry) : icon(entry)}
                                </span>
                                <Typography.Text ellipsis={{tooltip: entry.name}} style={{width: grid ? "100%" : undefined,
                                    flex: grid ? undefined : 1, minWidth: 0, color: "inherit"}}>{entry.name}</Typography.Text>
                                {!grid && !openable && formatSize && typeof entry.size === "number" &&
                                    <Typography.Text type="secondary" style={{whiteSpace: "nowrap"}}>{formatSize(entry.size)}</Typography.Text>}
                            </button>;
                        })}
                    </div>}
            </div>
        </div>
    </div>;
}
