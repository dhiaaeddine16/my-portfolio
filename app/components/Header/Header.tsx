import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext"; // Adjust path to AppContext

const Header = (props: { finishedLoading: boolean; sectionsRef: any }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);

  // Accessing context
  const context = useContext(AppContext);

  // Ensuring context is not undefined
  if (!context) {
    return <div>Loading...</div>; // You can show a loading spinner or placeholder here
  }

  const { sharedState } = context;
  const scrollSizeY = useRef<number>(0);

  // Safely access portfolio and NavBar properties
  useEffect(() => {
    if (sharedState?.portfolio?.NavBar) {
      if (sharedState.portfolio.NavBar.IntervalEvent == null) {
        sharedState.portfolio.NavBar.IntervalEvent = () => {
          if (scrollSizeY.current === 0) {
            scrollSizeY.current = window.scrollY;
          } else {
            if (window.scrollY > 50) {
              if (window.scrollY > scrollSizeY.current) {
                if (RefNavBar.current) {
                  RefNavBar.current.classList.remove("translate-y-0");
                  RefNavBar.current.classList.add("-translate-y-full");
                }
              } else {
                if (RefNavBar.current) {
                  RefNavBar.current.classList.add("translate-y-0");
                  RefNavBar.current.classList.remove("-translate-y-full");
                }
              }
              scrollSizeY.current = window.scrollY;
            }
          }
        };
      }
    }
  }, [sharedState]);

  // Adding the EventListener for the NavBar
  useEffect(() => {
    if (sharedState?.portfolio?.NavBar?.IntervalEvent) {
      if (sharedState.portfolio.NavBar.scrolling === null) {
        sharedState.portfolio.NavBar.scrolling = true;
        scrollSizeY.current = 0;

        if (typeof window !== "undefined") {
          window.addEventListener("scroll", sharedState.portfolio.NavBar.IntervalEvent as EventListener);
        }
      }
    }

    return () => {
      // Cleanup: Remove the event listener
      if (sharedState?.portfolio?.NavBar?.IntervalEvent) {
        window.removeEventListener("scroll", sharedState.portfolio.NavBar.IntervalEvent as EventListener);
      }
    };
  }, [sharedState]);

  

  // Delaying the show of the header once finished loading
  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 10400);
  }, []);

  return (
    <>
      {/* Mobile visible Navbar component */}
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />

      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: 0 },
        }}
        className={`w-full fixed ${
          ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
        } bg-AAprimary flex justify-between px-6 sm:px-12 py-2 sm:py-4 transition duration-4000 translate-y-0 z-20`}
      >
        {/* Logo A */}
        <Logo finishedLoading={props.finishedLoading} />

        {/* Icon Menu */}
        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />

        {/* Desktop Menu */}
        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};

export default Header;
