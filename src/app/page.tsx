import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Background />
      <Hero />
      <About />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
