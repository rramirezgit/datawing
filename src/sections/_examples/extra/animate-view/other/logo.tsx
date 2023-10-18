import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// components
// ----------------------------------------------------------------------

export default function Logo() {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.text.primary;

  return (
    <Box
      component={m.svg}
      viewBox="0 0 730 141"
      sx={{
        width: 240,
        height: 240,
        strokeWidth: 4,
        padding: 2,
      }}
    >
      <svg width="730" height="141" viewBox="0 0 730 141" fill="none">
        <g>
          <path
            d="M 39.4 7.2 H 1.3 V 108.2 H 39.4 C 69.1 108.2 90.7 87 90.7 57.7 C 90.7 28.4 69.1 7.2 39.4 7.2 Z M 38.9 88 H 23.1 V 27.6 H 38.9 C 56.3 27.6 68.3 39.8 68.3 57.7 C 68.3 75.3 56.3 88 38.9 88 Z"
            fill="#eb5117"
          />
          <path
            d="M 170.4 30.3 L 168.2 37.7 C 161.4 31.8 152.6 28.1 142.5 28.1 C 119.1 28.1 101.6 45.7 101.6 69.2 C 101.6 92.8 119.1 110.5 142.5 110.5 C 152.5 110.5 161.1 107 167.8 101.1 L 169.6 108.2 H 186.1 V 30.3 H 170.4 Z M 144.2 90.6 C 131.9 90.6 123 81.4 123 69.2 C 123 57 131.9 47.9 144.2 47.9 C 156.5 47.9 165.5 57 165.5 69.2 C 165.5 81.5 156.5 90.6 144.2 90.6 Z"
            fill="#eb5117"
          />
          <path
            d="M 244.6 89.5 C 236.8 89.5 232.5 85.1 232.5 77.6 V 47.3 H 253.7 V 30.3 H 232.2 V 10.1 H 228.1 L 197.4 42.7 V 47.3 H 211.4 V 80.5 C 211.4 97.7 221.9 108.2 239.1 108.2 H 254.1 V 89.5 H 244.6 Z"
            fill="#eb5117"
          />
          <path
            d="M 332.1 30.3 L 329.9 37.7 C 323.1 31.8 314.3 28.1 304.2 28.1 C 280.8 28.1 263.4 45.7 263.4 69.2 C 263.4 92.8 280.8 110.5 304.2 110.5 C 314.2 110.5 322.9 107 329.5 101.1 L 331.4 108.2 H 347.8 V 30.3 H 332.1 Z M 306 90.6 C 293.7 90.6 284.7 81.4 284.7 69.2 C 284.7 57 293.7 47.9 306 47.9 C 318.2 47.9 327.2 57 327.2 69.2 C 327.2 81.5 318.2 90.6 306 90.6 Z"
            fill="#eb5117"
          />
          <path
            d="M 483.4 7.3 L 463.9 74.3 L 436.8 8.4 H 429.4 L 402.8 74.5 L 382.9 7.3 H 359.8 L 391.6 108.2 H 411.1 L 433 51.7 L 455.5 108.2 H 475 L 506.2 7.3 H 483.4 Z"
            fill={PRIMARY_LIGHT}
          />
          <path
            d="M 518.5 19.9 H 539.4 V 0.5 H 518.5 V 19.9 Z M 518.5 108.2 H 539.6 V 30.3 H 518.5 V 108.2 Z"
            fill={PRIMARY_LIGHT}
          />
          <path
            d="M 604.1 28.6 C 593.6 28.6 584.2 33 578.3 40 L 574.2 30.3 H 559.8 V 108.2 H 580.9 V 67.4 C 580.9 54.8 587.5 47 598.4 47 C 607.5 47 611.9 52.7 611.9 64.5 V 108.2 H 633 V 61 C 633 41.3 621.9 28.6 604.1 28.6 Z"
            fill={PRIMARY_LIGHT}
          />
          <path
            d="M 715.3 30.3 L 711.9 38.1 C 705.1 31.9 696.1 28.1 686 28.1 C 664.2 28.1 647.2 45.5 647.2 67.2 C 647.2 89.2 664.2 106.3 686 106.3 C 694.4 106.3 702 103.7 708.2 99.4 V 102.3 C 708.2 113.7 699.4 120.6 688.8 120.6 C 681 120.6 672.7 117 670.3 109.9 H 649.3 C 652.9 127.7 668 138.5 689 138.5 C 713.7 138.5 728.9 123.6 728.9 99.3 V 30.5 L 715.3 30.3 Z M 688.5 87.4 C 676.9 87.4 668.5 78.9 668.5 67.4 C 668.5 55.7 676.9 47.2 688.5 47.2 C 700 47.2 708.4 55.7 708.4 67.4 C 708.4 78.9 700 87.4 688.5 87.4 Z"
            fill={PRIMARY_LIGHT}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_605_25413"
            x="-0.0632812"
            y="0"
            width="730.127"
            height="140.127"
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
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_605_25413" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_605_25413"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_605_25413">
            <rect width="728" height="138" fill="white" transform="translate(1)" />
          </clipPath>
        </defs>
        <ellipse cx="441" cy="34" rx="0" ry="0" fill="rgb(255, 255, 255)" />
      </svg>
    </Box>
  );
}
