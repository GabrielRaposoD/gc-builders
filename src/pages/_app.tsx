// Modules Import
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { GoogleFonts } from 'next-google-fonts';

// Application Imports
import '@styles/tailwind.css';

const Noop: React.FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps, router }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
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
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800;900&display=swap' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
