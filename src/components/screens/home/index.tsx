import MainLayout from '@components/layouts/MainLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-2'>
      <p className='text-green-500'>p</p>
    </div>
  );
}

Home.Layout = MainLayout;
