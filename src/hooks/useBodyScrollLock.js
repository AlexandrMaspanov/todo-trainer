import { useLayoutEffect } from "react";

export function useBodyScrollLock(enabled = true) {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;

        if (enabled) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [enabled]);
}
