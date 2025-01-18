
import Fonts from "@/app/components/fonts";

import Hero from "@/app/components/Hero";
import Products from "./products/page";
import Top_sell from "./products/sell";
import Dress from "@/app/components/dress";
import CustomerCarousel from "@/app/components/couresel";



export default function Home() {
  return (
    <div >
       
       <Hero/>
       <Fonts/>
       <Products/>
       <Top_sell/>
       <Dress/>
       <CustomerCarousel/>
    </div>  
  );
}
 