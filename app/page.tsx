import Nav          from "@/components/Nav";
import Hero         from "@/components/Hero";
import Scoreboard   from "@/components/Scoreboard";
import StitchDivider from "@/components/StitchDivider";
import About        from "@/components/About";
import Schedule     from "@/components/Schedule";
import Sponsors     from "@/components/Sponsors";
import Gallery      from "@/components/Gallery";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Scoreboard />
        <StitchDivider />
        <About />
        <StitchDivider />
        <Schedule />
        <StitchDivider />
        <Sponsors />
        <StitchDivider />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
