import { useBreakpoints } from "@vueuse/core";

export function useAppBreakpoints() {
  const breakpoints = useBreakpoints({
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  });

  const isMobile = breakpoints.smaller("tablet");
  const isTablet = breakpoints.between("tablet", "desktop");
  const isDesktop = breakpoints.greater("desktop");

  return { isMobile, isTablet, isDesktop };
}
