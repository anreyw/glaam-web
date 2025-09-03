import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Background />
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
