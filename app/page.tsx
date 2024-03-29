import Image from 'next/image';
import ClientImages from '../components/client-images';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <main className='flex min-h-full w-full flex-col items-center bg-background-gradient font-bold text-white lg:h-full'>
      <div className='flex h-full w-full flex-col items-center gap-3'>
        <Logo />
        <HeroSection />
        <ClientImages />
        <Footer />
      </div>
    </main>
  );
}
