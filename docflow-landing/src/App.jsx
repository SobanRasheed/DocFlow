import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Personas from "./components/sections/Personas";
import Solutions from "./components/sections/Solutions";
import LogoCarousel from "./components/sections/LogoCarousel";
import CaseStudies from "./components/sections/CaseStudies";
import Tools from "./components/sections/Tools";
import Steps from "./components/sections/Steps";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Showcase from "./components/sections/Showcase";
import Resources from "./components/sections/Resources";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";

// Section order mirrors cloudinary.com:
// hero → personas → solutions tabs → integrations carousel → trusted-at-scale
// → lifecycle/tools → steps → difference → testimonial → product showcase
// → resources carousel → faq → closing CTA
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Personas />
        <Solutions />
        <LogoCarousel />
        <CaseStudies />
        <Tools />
        <Steps />
        <Features />
        <Testimonials />
        <Showcase />
        <Resources />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
