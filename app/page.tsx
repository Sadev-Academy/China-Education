import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ServicesGrid from '@/components/home/ServicesGrid';
import Programs from '@/components/home/Programs';
import Process from '@/components/home/Process';
import InquiryForm from '@/components/home/InquiryForm';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ServicesGrid />
        <Programs />
        <Process />
        <InquiryForm />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
export const metadata = {
  title: 'Study in China | Premier Admissions & Scholarships Agency',
  description: 'Simplify your path to top-tier Chinese universities. Explore English-taught degrees, Mandarin programs, and fully funded CSC scholarships with expert visa support.',
  keywords: ['study in china', 'china university scholarship', 'csc scholarship agency', 'learn chinese in china', 'study abroad china', 'study in china in english'],
  authors: [{ name: 'ChinaEdu Admissions Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};
