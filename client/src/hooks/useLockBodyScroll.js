import { useLayoutEffect } from "react";

/**
 * Locks page scroll while `active` is true (e.g. mobile menu open,
 * lightbox open) without affecting normal vertical scroll behavior
 * once released.
 */
export default function useLockBodyScroll(active) {
  useLayoutEffect(() => {
    if (!active) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);
}
