// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
import Image from 'next/image';
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
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo/logo_full.svg"
            alt="logo"
            width={119}
            height={36}
            style={{ margin: '0 20px' }}
          />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Box sx={{ flexGrow: 1 }} />

          <Stack alignItems="center" direction={{ xs: 'row' }}>
            <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            />

            {mdUp && <NavButton title="Login" path={paths.dashboard.root} />}
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
