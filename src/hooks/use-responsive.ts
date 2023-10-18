// @mui
import { useTheme, Breakpoint } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

type ReturnType = boolean;

type Query = 'up' | 'down' | 'between' | 'only';

type Value = Breakpoint | number;

/* este hook se encarga de 
  - up: si el ancho de la pantalla es mayor o igual al breakpoint
  - down: si el ancho de la pantalla es menor o igual al breakpoint
  - between: si el ancho de la pantalla esta entre los dos breakpoints
  - only: si el ancho de la pantalla es igual al breakpoint

  breakpoints: 
    - xs: 0px
    - sm: 600px
    - md: 960px
    - lg: 1280px
    - xl: 1920px

  ejemplo de uso:
    const isMobile = useResponsive('down', 'sm');
    const isTablet = useResponsive('between', 'sm', 'md');
    const isDesktop = useResponsive('up', 'lg');

  ejemplo de uso con breakpoints:
    const isMobile = useResponsive('down', theme.breakpoints.values.sm);
    const isTablet = useResponsive('between', theme.breakpoints.values.sm, theme.breakpoints.values.md);
    const isDesktop = useResponsive('up', theme.breakpoints.values.lg);
*/

export function useResponsive(query: Query, start?: Value, end?: Value): ReturnType {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Value));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Value));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Value, end as Value));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

// ----------------------------------------------------------------------

type BreakpointOrNull = Breakpoint | null;

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
