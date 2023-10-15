// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// routes
import { RouterLink } from 'src/routes/components';

type Props = {
  sx?: SxProps<Theme>;
  title: string;
  path: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

export default function NavButton({ sx, title, path, variant, color }: Props) {
  return (
    <Button
      component={RouterLink}
      href={path}
      variant={variant}
      sx={{ mr: 1, ...sx }}
      color={color}
    >
      {title}
    </Button>
  );
}
