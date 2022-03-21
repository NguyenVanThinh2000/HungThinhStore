import Banner from "../banner";
import SellingProducts from "../sellingProducts";
import Brand from "../brand";
import IphoneBestPrice from "../iphoneBestPrice";
import { useEffect } from "react";
import Poster from "../poster";

import posterSummer from "../image/poster-summer.webp";
import posterNewYear from "../image/poster-new-year.webp";

function Home({ products, productsType }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Banner />
      <SellingProducts products={products} productsType={productsType} />
      <Brand />
      <Poster image={posterSummer} />
      <IphoneBestPrice products={products} />
      <Poster image={posterNewYear} />
      <IphoneBestPrice products={products} />
    </div>
  );
}
export default Home;
