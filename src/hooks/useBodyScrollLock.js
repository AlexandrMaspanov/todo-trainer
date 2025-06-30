import { useLayoutEffect } from "react";

export function useBodyScrollLock(enabled = true) {
    useLayoutEffect(() => {
        if (!enabled) return;

        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [enabled]);
}
