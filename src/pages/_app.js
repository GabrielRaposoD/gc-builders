// Modules Import
import { DefaultSeo } from 'next-seo';

// Application Imports
import '@styles/tailwind.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={router.route === '/' ? '%s' : '%s | Western HouseWerks'}
        description='Western HouseWerks'
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: process.env.NEXT_PUBLIC_SITE_URL,
          site_name: 'Western HouseWerks',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
