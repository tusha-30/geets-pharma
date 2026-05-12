import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Businesses from "@/components/Businesses";
import GlobalPresence from "@/components/GlobalPresence";
import Research from "@/components/Research";
import Sustainability from "@/components/Sustainability";
import News from "@/components/News";
import CareersCTA from "@/components/CareersCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Businesses />
      <GlobalPresence />
      <Research />
      <Sustainability />
      <News />
      <CareersCTA />
    </>
  );
}
