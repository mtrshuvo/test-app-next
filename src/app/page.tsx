import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Lab Semantics - Leading AI Research, Development, Consulting, and Custom Tool Creation",
  description: "Lab Semantics specializes in AI research, development, consulting, and custom AI tool creation. Transform your business with cutting-edge AI solutions to optimize operations and drive innovation.",
  keywords: "Lab Semantics, AI research, AI development, AI consulting, custom AI tools, artificial intelligence solutions, AI innovation, business transformation, machine learning, AI software"
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Contact />
      
      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
