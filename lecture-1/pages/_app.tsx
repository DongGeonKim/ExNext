import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';

declare global {
  interface Window {
    naver: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
