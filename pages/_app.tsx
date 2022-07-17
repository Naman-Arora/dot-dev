import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        breakpoints: {
          xxs: 0.1,
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
      <NotificationsProvider>
        <ModalsProvider>
          <Component {...pageProps} />
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
