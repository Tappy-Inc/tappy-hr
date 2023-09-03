import { AppProps } from 'next/app';
import Head from 'next/head';
import { EuiProvider, EuiThemeColorMode } from '@elastic/eui';

import './styles.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { useState } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  const [t, setT] = useState<EuiThemeColorMode>('light');

  return (
    <EuiProvider colorMode={t}>
      <Head>
        <title>Welcome to manpower-request-app!</title>
      </Head>
      <main className="app">
        <button onClick={() => setT(t === 'light' ? 'dark' : 'light')}>
          xxx
        </button>
        <Component {...pageProps} />
      </main>
    </EuiProvider>
  );
}

export default CustomApp;
