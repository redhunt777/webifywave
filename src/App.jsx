import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Projects from "./Components/Projects/Projects";
import AboutUs from "./Components/AboutUs/AboutUs";
import Faqs from "./Components/Faqs/Faqs";
import AnimatedTestimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <div className="relative w-full overflow-x-hidden">
        <div className="absolute top-[32] -right-[32rem] w-[200px] h-[400px] md:w-[600px] md:h-[530px] bg-primary rounded-full opacity-25 filter blur-3xl -z-10" />
        <div className="absolute top-64 -left-[32rem] w-[200px] h-[400px] md:w-[600px] md:h-[530px] bg-primary rounded-full opacity-25 filter blur-3xl -z-10" />
        <Navbar />
        <Hero />
        <Services />
        <AboutUs />
        <Projects />
        <Pricing />
        <AnimatedTestimonials />
        <div className="relative w-full overflow-x-hidden">
          <div className="absolute top-[0] -left-[32rem] w-[200px] h-[400px] md:w-[600px] md:h-[530px] bg-primary rounded-full opacity-25 filter blur-3xl -z-10" />
          <ContactUs />
        </div>
        <div className="relative w-full overflow-x-hidden">
          <div className="absolute top-[0] -right-[32rem] w-[200px] h-[400px] md:w-[600px] md:h-[530px] bg-primary rounded-full opacity-25 filter blur-3xl -z-10" />
          <Faqs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
