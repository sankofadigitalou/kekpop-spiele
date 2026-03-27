import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Media from "@/components/Media";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <About />
      <Games />
      <Media />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
}
