import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material';
import type { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import { MainLayout } from 'layouts';

import theme from 'styles/theme';
import createEmotionCache from 'styles/createEmotionCache';

const muiCache: EmotionCache | undefined = createEmotionCache();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={muiCache ?? createEmotionCache()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
