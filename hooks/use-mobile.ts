import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Hook to detect if the current viewport is mobile-sized.
 * Returns undefined during SSR/initial render to prevent hydration mismatches,
 * then updates to the actual value after mount.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

/**
 * Hook that returns a safe boolean value for mobile detection.
 * Defaults to false during SSR/initial render.
 * Use this when you need a guaranteed boolean value.
 */
export function useIsMobileSafe(defaultValue = false) {
  const isMobile = useIsMobile();
  return isMobile ?? defaultValue;
}
