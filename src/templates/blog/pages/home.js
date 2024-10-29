import * as React from "react";
import MainContent from "../components/MainContent";
import Latest from "../components/Latest";
import Carousel from "../components/Carousel";
import ProductLines from "../components/ProductLines";
export default function Home() {
  return (
    <>
      <Carousel />
      <ProductLines/>
      <MainContent />
      <Latest />
    </>
  );
}
