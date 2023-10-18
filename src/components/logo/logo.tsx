import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.text.primary;

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 40,
          height: 40,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <svg width="69" height="32" viewBox="0 0 69 32" fill="none">
          <g>
            <path
              d="M11.0925 1.90527H1.06934V28.4824H11.0925C18.9135 28.4824 24.5701 22.9014 24.5701 15.1938C24.5701 7.48629 18.9135 1.90527 11.0925 1.90527ZM10.9768 23.1661H6.80161V7.2594H10.9768C15.5346 7.2594 18.6844 10.4848 18.6844 15.1938C18.6844 19.825 15.5346 23.1661 10.9768 23.1661Z"
              fill="#EB5117"
            />
            <path
              d="M61.5007 2L56.3735 19.6551L49.2354 2.30252H47.3001L40.3133 19.6929L35.0748 2H29L37.3526 28.5771H42.4776L48.25 13.6937L54.1713 28.5771H59.2985L67.4999 2H61.5007Z"
              fill={PRIMARY_LIGHT}
            />
          </g>
          <defs>
            <filter
              id="filter0_d_832_15713"
              x="-0.0632812"
              y="0"
              width="70.1266"
              height="34.1266"
              filterUnits="userSpaceOnUse"
            >
              <feFlood result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.06328" />
              <feGaussianBlur stdDeviation="0.531641" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_832_15713"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_832_15713"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
