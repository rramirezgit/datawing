import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
// theme
import { primaryFont } from 'src/theme/typography';
import { textGradient, bgGradient } from 'src/theme/css';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1.1,
  marginBottom: 24,
  letterSpacing: 0,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: `${48 / 16}rem`,
  fontFamily: primaryFont.style.fontFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: `${48 / 16}rem`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        maxWidth: 1000,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
    >
      <m.div variants={varFade().in}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            lineHeight: `${48 / 40}`,
          }}
        >
          La tecnología más avanzada en
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          Topografías
        </StyledTextGradient>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Rastreo, Mapeo y Mucho Más: Soluciones Innovadoras para tus Necesidades
        </Typography>
      </m.div>
    </Stack>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1 }}>
            {renderDescription}
          </Container>
        </StyledWrapper>
      </StyledRoot>

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
