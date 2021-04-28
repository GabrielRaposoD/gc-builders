// Modules Import

// Components Import
import Footer from '@components/Footer';
import Header from '@components/Header';

export default function MainLayout({ children }) {
  return (
    <div className='max-w-screen relative flex flex-col items-start justify-start w-full h-full min-h-screen bg-white'>
      <Header />

      {children}
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
}
