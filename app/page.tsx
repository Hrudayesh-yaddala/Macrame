import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import Products from "./_components/Products";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <FAQ />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
