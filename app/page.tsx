import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
