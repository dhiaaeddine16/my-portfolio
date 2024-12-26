"use client";
import Startup from "./components/WebsiteStarter/StartupLogo/Startup";
import Header from "./components/Header/Header";
const ThisCantBeReached = dynamic(() => import("./components/WebsiteStarter/ThisSiteCantBeReached/ThisCantBeReached"), { ssr: false });
import { useContext, useEffect, useState, useRef } from "react";
import AppContext from "./components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import dynamic from 'next/dynamic';
import MyName from "./components/Home/MyName/MyName";
import SocialMediaArround from "./components/Home/SocialMediaArround/SocialMediaArround";
import Skills from "./components/Home/Skills/Skills";
import Projects from "./components/Home/Projects/Projects";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);

  // Context variable
  const context = useContext(AppContext);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safely clear the interval if `timerCookieRef` is not null/undefined
    if (context?.sharedState.userdata.timerCookieRef.current !== undefined) {
      clearInterval(context.sharedState.userdata.timerCookieRef.current);
    }

    if (typeof window !== "undefined") {
      // Safely remove event listeners
      if (context?.sharedState.userdata.windowSizeTracker.current) {
        window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      }
      if (context?.sharedState.userdata.mousePositionTracker.current) {
        window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      }
      if (context?.sharedState.typing.eventInputLostFocus) {
        window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      }
      if (context?.sharedState.typing.keyboardEvent) {
        document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
      }
    }

    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);

    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);

      if (context) {
        context.sharedState.finishedLoading = true;
        context.setSharedState({ ...context.sharedState });
      }
    }, 10400);
  }, [context]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("Website is rendering...");
  const meta = {
    title: "Abdellatif Anaflous - Software Engineer",
    description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
    image: "/titofCercle.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        {context?.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
        {context?.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
        <Header finishedLoading={context?.sharedState.finishedLoading ?? false} sectionsRef={homeRef} />
        <MyName finishedLoading={context?.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context?.sharedState.finishedLoading} />
        {context?.sharedState.finishedLoading ? <Skills/>  : <></>}
        {context?.sharedState.finishedLoading ? <Projects /> : <></>}
         
      </div>
    </>
  );
}
