import { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import { Nav, Expertise, Stack, Portfolio, CtaBand, About, Experience, Articles, Footer, WhatsAppFloat } from './components/Sections.jsx';

export default function App() {
  // Slide cards up as they scroll in (content is never hidden)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } }),
      { rootMargin: '0px 0px -60px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pre'); io.observe(el); }
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Expertise />
        <Stack />
        <Portfolio />
        <CtaBand />
        <About />
        <Experience />
        <Articles />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
