import Head from "next/head";
import { Box, Text, AspectRatio } from "@chakra-ui/react";
import { ToggleColor } from "../components/toggleColor";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Header } from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CTA />
      <Footer />
    </>
  );
}
