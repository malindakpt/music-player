import React, { useState } from "react";
import { PlayerBase } from "./components/containerComponents/playerBase/PlayerBase";
import { ErrorBoundary } from "./components/containerComponents/errorBoundary/ErrorBoundary";

export const AppContext = React.createContext({
  currentSongIdx: -1,
  setCurrentSongIdx: (idx: number) => {},
});
function App() {
  const [currentSongIdx, setCurrentSongIdx] = useState(-1);

  return (
    <AppContext.Provider value={{ currentSongIdx, setCurrentSongIdx }}>
      <ErrorBoundary>
        <PlayerBase />
      </ErrorBoundary>
    </AppContext.Provider>
  );
}

export default App;
