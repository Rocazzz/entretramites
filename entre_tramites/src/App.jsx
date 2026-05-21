import "./index.css";

import NavBar        from "./components/NavBar";
import Hero          from "./components/Hero";
import WhatIs        from "./components/Whatis";
import Requirements  from "./components/Requirements";
import Documentation from "./components/Documentation";
import Benefits      from "./components/Benefits";
import Process       from "./components/Process";
import Pricing       from "./components/Pricing";
import Testimonials  from "./components/Testimonials";
import FAQ           from "./components/Faq";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

export default function App() {
  return (
    <>
      {/*
        SEO Meta Tags – add these inside <head> in index.html:
        <title>Visa de Emprendedor en España | Entre Trámites</title>
        <meta name="description" content="Obtén tu visado de emprendedor en España con Entre Trámites. Asesoría 100% online, gestión completa del expediente y seguimiento hasta la aprobación. Ley 14/2013." />
        <meta name="keywords"    content="visa emprendedor España, visado emprendedor, residencia emprendedor España, Ley 14/2013, gestoría extranjería España, Entre Trámites" />
        <link rel="canonical"    href="https://entretramites.com/extranjeria/visa-emprendedor" />
      */}

      <NavBar />

      <main>
        <Hero />
        <WhatIs />
        <Requirements />
        <Documentation />
        <Benefits />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}