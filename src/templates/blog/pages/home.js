import * as React from "react";
import MainContent from "../components/MainContent";
import Latest from "../components/Latest";
import Carousel from "../components/Carousel";
import ProductLines from "../components/ProductLines";
import DifferentiatingFactor from "../components/DifferentiatingFactor"
import Recipe from "../components/Recipe";
import Partners from "../components/Partners";
import News from "../components/News";

export default function Home() {
  return (
    <>
      <Carousel />
      <br/>
      <ProductLines/>
      <br/>
      <DifferentiatingFactor/>
       <br/>
      <Recipe/>
      <br/>
      <Partners/>
      <br/>
      <News/>
      {/* <MainContent />  */}
      {/* <Latest /> */}
    </>
  );
}
