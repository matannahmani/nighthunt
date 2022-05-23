import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { useMediaQuery } from '@mui/material';
import '../src/main.css';
import theme from '../src/theme';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       breakpoints: {
  //         values: {
  //           xs: 0,
  //           fold: 300,
  //           sm: 600,
  //           md: 900,
  //           lg: 1200,
  //           xl: 1536,
  //         },
  //       },
  //       typography: {
  //         fontFamily: [
  //           '-apple-system',
  //           'BlinkMacSystemFont',
  //           '"Segoe UI"',
  //           'Roboto',
  //           '"Helvetica Neue"',
  //           'Arial',
  //           'sans-serif',
  //           '"Apple Color Emoji"',
  //           '"Segoe UI Emoji"',
  //           '"Segoe UI Symbol"',
  //           '"Caesar Dressing, cursive"',
  //         ].join(','),
  //       },

  //       palette: {
  //         mode: 'dark',
  //       },
  //     }),
  //   [prefersDarkMode]
  // );
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
