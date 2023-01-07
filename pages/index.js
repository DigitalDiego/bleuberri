import React from "react";
import Head from "next/head";
import {
  Hero,
  LargestAndGreatest,
  OurCommunity,
  FindArtwork,
  Collections,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>BleuBerri</title>
        <link rel="shortcut icon" href="/bleuberri.svg" type="image/x-icon" />
      </Head>
      <Hero />
      <LargestAndGreatest />
      <OurCommunity />
      <FindArtwork />
      <Collections />
      <Footer />
    </>
  );
}
