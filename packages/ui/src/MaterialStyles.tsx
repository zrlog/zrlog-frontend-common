import MaterialControlsStyle from "./MaterialControlsStyle";

// Mount below the consumer's ConfigProvider, only while Material is selected.
// Semantic classes also reach Ant Design portals without changing their host.
const MaterialStyles = () => (
    <>
        <MaterialControlsStyle />
        <style data-zrlog-material-spin>{`
            .zrlog-material-spin > svg {
                display: block;
                width: 100%;
                height: 100%;
            }
            .zrlog-material-spin[data-indeterminate="true"] > svg {
                animation: zrlog-material-spin-rotate 1.4s linear infinite;
            }
            .zrlog-material-spin[data-indeterminate="true"] circle {
                animation: zrlog-material-spin-sweep 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            @keyframes zrlog-material-spin-rotate {
                to { transform: rotate(360deg); }
            }
            @keyframes zrlog-material-spin-sweep {
                0% { stroke-dasharray: 5 100; stroke-dashoffset: 0; }
                50% { stroke-dasharray: 70 100; stroke-dashoffset: -15; }
                100% { stroke-dasharray: 5 100; stroke-dashoffset: -100; }
            }
            @media (prefers-reduced-motion: reduce) {
                .zrlog-material-spin > svg, .zrlog-material-spin circle {
                    animation: none !important;
                }
            }
        `}</style>
    </>
);

export default MaterialStyles;
