import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  lighter: '#FFE0B2',
  light: '#FFB74D',
  main: '#FF9800', // Saffron
  dark: '#F57C00',
  darker: '#E65100',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#C8E6C9',
  light: '#81C784',
  main: '#4CAF50', // Green
  dark: '#388E3C',
  darker: '#2E7D32',
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#B3E5FC',
  light: '#4FC3F7',
  main: '#0288D1', // Blue (Ashoka Chakra)
  dark: '#0277BD',
  darker: '#01579B',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#B3E5FC',
  light: '#4FC3F7',
  main: '#0288D1', // Blue (Ashoka Chakra)
  dark: '#0277BD',
  darker: '#01579B',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#   ',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
