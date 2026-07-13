import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Tools from "./components/sections/Tools";
import Steps from "./components/sections/Steps";
import Features from "./components/sections/Features";
import Stats from "./components/sections/Stats";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tools />
        <Steps />
        <Features />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}