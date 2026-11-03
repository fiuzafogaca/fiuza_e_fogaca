import { useRef } from 'react';
import Header from './components/Header/Header.jsx';
import FlyingLogo from './components/FlyingLogo/FlyingLogo.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import PracticeAreas from './components/PracticeAreas/PracticeAreas.jsx';
import Partners from './components/Partners/Partners.jsx';
import Differentials from './components/Differentials/Differentials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import { LOGO_URL } from './data/site.js';

export default function App() {
  // O logo "voa" do slot do Hero até o slot do Header conforme o scroll.
  const heroLogoSlotRef = useRef(null);
  const headerLogoSlotRef = useRef(null);

  return (
    <>
      <FlyingLogo
        src={LOGO_URL}
        heroSlotRef={heroLogoSlotRef}
        headerSlotRef={headerLogoSlotRef}
      />
      <Header logoSlotRef={headerLogoSlotRef} />
      <main className="page">
        <Hero logoSlotRef={heroLogoSlotRef} />
        <About />
        <PracticeAreas />
        <Partners />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
