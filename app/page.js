"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeaderComponent from "./components/header/Header";
import HeroBannerComponent from "./components/hero-banner/heroBanner";
import ReliableEfficient from "./components/reliableEfficient/reliableEfficient";
import TextWeFocus from "./components/textWeFocus/textWeFocus";
import PayoutService from "./components/payoutService/payoutService";
import VideoWrap from "./components/videoWrap/videoWrap";
import BuildFuture from "./components/buildFuture/buildFuture";
import ReasonsPartner from "./components/reasonsPartner/reasonsPartner";
import OurExperties from "./components/ourExperties/ourExperties";
import EnhancingPayments from "./components/enhancingPayments/enhancingPayments";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <HeaderComponent />
         <main>
          <section className="pagewrapper">
            <HeroBannerComponent />
            <ReliableEfficient/>
            <TextWeFocus/>
            <PayoutService/>
            <VideoWrap/>
            <BuildFuture/>
            <ReasonsPartner/>
            <OurExperties/>
            <EnhancingPayments/>
        </section>
        </main>
      <Footer/>
      <div className="scroll-top">
        <img src="assets/images/arrow_right.svg" alt="icon" />
      </div>
    </>
  );
}
