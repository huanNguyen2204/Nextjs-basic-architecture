import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// import { NextPage } from 'next';
// import type { AppProps } from 'next/app';
// import { ReactElement, ReactNode } from 'react';
// import { AppProvider } from '@/providers/app';
// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };
// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };
// const App = ({
// Component,
//   pageProps,
// }: AppPropsWithLayout) => {
//   const getLayout =
//     Component.getLayout ?? ((page) => page);
//   const pageContent = getLayout(
//     <Component {...pageProps} />
// );
//   return <AppProvider>{pageContent}</AppProvider>;
// };
// export default App;
