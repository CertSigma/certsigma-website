import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedMarquee from "@/components/TrustedMarquee";
import Services from "@/components/Services";
import PersonaTabs from "@/components/PersonaTabs";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import PinnedScroll from "@/components/PinnedScroll";
import Frameworks from "@/components/Frameworks";
// Ecosystem is intentionally hidden below (not deleted) — see note before <Footer />.
// import Ecosystem from "@/components/Ecosystem";
import Testimonials from "@/components/Testimonials";
// Plans is intentionally hidden below (not deleted) — see note before <Footer />.
// import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <>
      <ClickSpark />
      <Nav />
      <Hero />
      <TrustedMarquee />
      <Services />
      <PersonaTabs />
      <Stats />
      <Process />
      <PinnedScroll />
      <Frameworks />
      {/* Ecosystem section hidden per request — component kept intact in components/Ecosystem.tsx.
          To restore: uncomment the import above and <Ecosystem /> here. */}
      <Testimonials />
      {/* Plans ("Engagements") section hidden per request — component kept intact in components/Plans.tsx.
          To restore: uncomment the import above and <Plans /> here. */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
