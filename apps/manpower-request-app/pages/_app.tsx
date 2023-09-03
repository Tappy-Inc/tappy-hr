import { AppProps } from 'next/app';
import Head from 'next/head';
import { EuiProvider } from '@elastic/eui';

import './styles.css';
import '@elastic/eui/dist/eui_theme_light.css';


function CustomApp({ Component, pageProps }: AppProps) {
  return (
     <EuiProvider colorMode="light">
      <Head>
        <title>Welcome to manpower-request-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </EuiProvider>
  );
}

export default CustomApp;
