import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Hero from "./Hero";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
   return <>

    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>



    </>
}
export default HomePage;
