import { darkTheme, lightTheme } from 'styles/unistyle/themes';
import { UnistylesRegistry } from 'react-native-unistyles';
import { breakpoints } from 'styles/unistyle/breakpoints';
import { fontFamilyPlugin } from 'styles/unistyle/plugins';

type AppBreakpoints = typeof breakpoints;

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    // initialTheme: UnistylesRuntime.themeName || 'light',
    initialTheme: 'light',
    plugins: [fontFamilyPlugin],
  });
