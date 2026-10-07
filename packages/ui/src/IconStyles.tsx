export const IconStyles = () => <style data-zrlog-icon-style>{`
    .zrlog-icon[data-spin="true"] { animation: zrlog-icon-spin 1s linear infinite; }
    .zrlog-switch-pending::after {
        content: ""; position: absolute; inset: 20%; box-sizing: border-box;
        border: 2px solid var(--zrlog-switch-progress); border-inline-end-color: transparent;
        border-radius: 50%; animation: zrlog-icon-spin 1.4s linear infinite;
    }
    @keyframes zrlog-icon-spin { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) {
        .zrlog-icon[data-spin="true"], .zrlog-switch-pending::after { animation: none; }
    }
`}</style>;
