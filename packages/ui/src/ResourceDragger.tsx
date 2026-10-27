import {Button, Card, Grid, Modal, Spin, Upload} from "antd";
import type {UploadProps} from "antd";
import {useEffect, useRef, useState} from "react";
import type {ComponentProps, CSSProperties, ReactNode} from "react";
import FolderIcon from "./icons/folder";

/** The host resolves resource addresses and owns the upload protocol and credentials. */
export interface UploadedResource {
    url: string;
    name?: string;
    size?: number;
    contentType?: string;
}

export interface ResourceUploadContext {
    signal: AbortSignal;
    onProgress: (percent: number) => void;
}

export interface ResourceDraggerProps {
    upload?: (file: File, context: ResourceUploadContext) => Promise<UploadedResource>;
    onSuccess?: (resource: UploadedResource) => void;
    onError?: (error: Error) => void;
    onProgress?: (percent: number) => void;
    onUploadingChange?: (uploading: boolean) => void;
    beforeUpload?: UploadProps["beforeUpload"];
    accept?: string;
    disabled?: boolean;
    children?: ReactNode;
    style?: CSSProperties;
    height?: number;
    title?: ReactNode;
    cardSize?: ComponentProps<typeof Card>["size"];
    cardStyle?: CSSProperties;
    cardBodyStyle?: CSSProperties;
    bodyAspectRatio?: CSSProperties["aspectRatio"];
    getContainer?: () => HTMLElement;
    resourcePicker?: {
        title: ReactNode;
        buttonText: ReactNode;
        disabled?: boolean;
        /** Render a host-connected picker; selection closes the dialog. */
        render: (close: () => void) => ReactNode;
    };
}

/** Shared upload/picker presentation. Networking, validation, messages and persistence stay in the host. */
export function ResourceDragger({
    upload, onSuccess, onError, onProgress, onUploadingChange, beforeUpload,
    accept, disabled, children, style, height, title, cardSize = "small", cardStyle,
    cardBodyStyle, bodyAspectRatio, getContainer, resourcePicker,
}: ResourceDraggerProps) {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const active = useRef<AbortController | null>(null);
    const mounted = useRef(true);
    const screens = Grid.useBreakpoint();
    const narrow = screens.md !== true;

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
            active.current?.abort();
        };
    }, []);

    const customRequest: UploadProps["customRequest"] = upload ? (options) => {
        active.current?.abort();
        const controller = new AbortController();
        active.current = controller;
        setUploading(true);
        onUploadingChange?.(true);
        const current = () => mounted.current && !controller.signal.aborted && active.current === controller;
        void (async () => {
            try {
                const resource = await upload(options.file as File, {
                    signal: controller.signal,
                    onProgress: (percent) => {
                        if (!current()) return;
                        const value = Math.max(0, Math.min(100, percent));
                        options.onProgress?.({percent: value});
                        onProgress?.(value);
                    },
                });
                if (!current()) return;
                options.onSuccess?.(resource);
                onSuccess?.(resource);
            } catch (reason: unknown) {
                if (!current()) return;
                const error = reason instanceof Error ? reason : new Error(String(reason));
                options.onError?.(error);
                onError?.(error);
            } finally {
                if (current()) {
                    active.current = null;
                    setUploading(false);
                    onUploadingChange?.(false);
                }
            }
        })();
        return {abort: () => {
            controller.abort();
            if (mounted.current && active.current === controller) {
                active.current = null;
                setUploading(false);
                onUploadingChange?.(false);
            }
        }};
    } : undefined;

    return <>
        <Card
            title={title}
            size={cardSize}
            style={{display: "inline-block", ...cardStyle}}
            styles={{body: {aspectRatio: bodyAspectRatio, minHeight: 128, minWidth: 128, padding: 8, ...cardBodyStyle}, title: {minWidth: 24}}}
            extra={resourcePicker ? <Button
                disabled={disabled || uploading || resourcePicker.disabled}
                htmlType="button" icon={<FolderIcon/>} type="text" size="small"
                onClick={() => setPickerOpen(true)}
            >{resourcePicker.buttonText}</Button> : null}
        >
            <Spin spinning={uploading}>
                <Upload.Dragger
                    accept={accept} beforeUpload={beforeUpload ?? (upload ? undefined : () => false)}
                    disabled={disabled || uploading} multiple={false} showUploadList={false}
                    customRequest={customRequest} height={height}
                    style={{background: "transparent", border: 0, width: "100%", height: height ?? "100%", ...style}}
                >{children}</Upload.Dragger>
            </Spin>
        </Card>
        {resourcePicker && <Modal
            title={resourcePicker.title} open={pickerOpen} onCancel={() => setPickerOpen(false)}
            footer={null} width={narrow ? "100vw" : screens.lg ? 860 : 720}
            destroyOnHidden getContainer={getContainer}
            style={narrow ? {top: 0, maxWidth: "100vw", paddingBottom: 0} : undefined}
            styles={{body: {height: narrow ? "calc(100dvh - 112px)" : "70vh", minHeight: narrow ? 360 : 420, padding: 0}}}
        >{resourcePicker.render(() => setPickerOpen(false))}</Modal>}
    </>;
}
