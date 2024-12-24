"use client";
import "../styles/globals.css";
import AppContext, { SharedState } from "./components/AppContextFolder/AppContext";
import { useRef, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const timerCookie = useRef<number | undefined>(undefined);
  const windowSizeTrackerRef = useRef<(() => void) | null>(null);
  const mousePositionRef = useRef<(() => void) | null>(null);

  const [sharedState, setSharedState] = useState<SharedState>({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });

  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={{ sharedState, setSharedState }}>
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
};

export default Layout;
