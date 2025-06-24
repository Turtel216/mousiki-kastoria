// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ffeaec',
  '#fcd4d7',
  '#f4a7ac',
  '#ec777e',
  '#e64f57',
  '#e3353f',
  '#e22732',
  '#c91a25',
  '#b41220',
  '#9e0419'
];
const theme = createTheme({
  colors: {
    myColor,
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
