import "./index.css";

import NavBar        from "./components/Navbar";
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