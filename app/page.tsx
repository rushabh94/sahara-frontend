import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}

