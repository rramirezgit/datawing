// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Precios',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.pricing,
  },
  {
    title: 'Quienes Somos',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.about,
  },
];
