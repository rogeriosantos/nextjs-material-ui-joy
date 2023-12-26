'use client';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ThemeRegistry from './ThemeRegistry';

export default function RootLayout({ children }) {
  const materialTheme = materialExtendTheme();
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <ThemeRegistry options={{ key: 'joy' }}>
          <CssBaseline />
          {children}
        </ThemeRegistry>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
