import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

import 'bootstrap/dist/css/bootstrap.min.css';
function PricingPage() {
    return <>
        <Hero />    
        <OpenAccount/>
        <br/>
        <Brokerage />
    </>

}
export default PricingPage;
