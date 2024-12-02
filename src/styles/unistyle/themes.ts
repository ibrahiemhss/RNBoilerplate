import { themeColors } from 'styles/unistyle/colors';

export const lightTheme = {
  colors: Object.keys(themeColors).reduce(
    (acc, key) => {
      acc[key] = themeColors[key as keyof typeof themeColors].light;
      return acc;
    },
    {} as Record<string, string>,
  ),
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors: Object.keys(themeColors).reduce(
    (acc, key) => {
      acc[key] = themeColors[key as keyof typeof themeColors].dark;
      return acc;
    },
    {} as Record<string, string>,
  ),
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;
