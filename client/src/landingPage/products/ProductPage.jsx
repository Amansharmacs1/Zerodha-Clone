import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./rightSection";
import Universe from "./Universe";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductPage() {
   return <>

    <Hero/>
    <hr/>
    <LeftSection imgURL="/media/kite.png" name="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlayStore="" appStore=""/>
    <hr/>
    <RightSection imgURL="/media/console.png" name="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>
    <hr/>
    <LeftSection imgURL="/media/coin.png" name="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlayStore="" appStore=""/>
    <hr/>
    <RightSection imgURL="/media/kiteconnect.png" name="Kite Connect API" desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore=""/>
    <hr/>
    <LeftSection imgURL="/media/varsity.png" name="Varsity mobile" desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlayStore="" appStore=""/>
    <hr/>
    <Universe/>

    </>
}
export default ProductPage;
