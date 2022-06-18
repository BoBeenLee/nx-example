import { AppProps } from 'next/app';
import React from 'react';
import { GlobalCSS } from '@bbl-nx/styles';
import { NextPage } from 'next';
import Head from 'next/head';
import { getMetadata } from '@bbl-nx/constants';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from 'react-query';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type Props = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (props: Props) => {
  const { Component, pageProps } = props;
  const TargetComponent = Component;
  const getLayout = Component.getLayout ?? ((page) => page);
  const metadata = getMetadata();
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <React.Fragment>
      <Head>
        <title>{metadata.title}</title>
        <meta name="theme-color" content={metadata.themeColor} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.metaImage} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <GlobalCSS />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<TargetComponent {...pageProps} />)}
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default MyApp;
