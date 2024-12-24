import { createContext, Dispatch, SetStateAction, MutableRefObject } from "react";

// Define the shape of the shared state
interface PortfolioState {
  NavBar: {
    IntervalEvent: (() => void) | null;
    scrolling: boolean | null;
    scrollSizeY: number | null;
  };
  Scrolling: {
    IntervalEvent: (() => void) | null;
  };
}

interface UserData {
  timerCookieRef: MutableRefObject<number | undefined>;
  windowSizeTracker: MutableRefObject<(() => void) | null>;
  mousePositionTracker: MutableRefObject<(() => void) | null>;
}

interface TypingState {
  keyboardEvent: ((e: KeyboardEvent) => void) | null;
  eventInputLostFocus: (() => void) | null;
}

export interface SharedState {
  portfolio: PortfolioState;
  userdata: UserData;
  typing: TypingState;
  finishedLoading: boolean;
}

export interface AppContextType {
  sharedState: SharedState;
  setSharedState: Dispatch<SetStateAction<SharedState>>;
}

// Create the context with a default value of `null`
const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
