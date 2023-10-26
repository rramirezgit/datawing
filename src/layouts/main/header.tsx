// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
// routes
import { paths } from 'src/routes/paths';
import Logo from 'src/sections/_examples/extra/animate-view/other/logo';

import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { SettingsButton, HeaderShadow } from '../_common';
import NavButton from '../_common/navButton';
// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          background: theme.palette.mode === 'dark' ? '#222222' : '#fff 0.05%',
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Box sx={{ flexGrow: 1 }} />

          <Stack alignItems="center" direction={{ xs: 'row' }}>
            {/* <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            /> */}

            {mdUp && <NavButton title="Login" path={paths.dashboard.root} variant="outlined" />}
            {mdUp && (
              <NavButton title="Cotizar" path={paths.quote} variant="contained" color="primary" />
            )}
            {mdUp && (
              <NavButton
                title="Dashboard"
                path={paths.dashboard.root}
                variant="contained"
                color="secondary"
              />
            )}

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
