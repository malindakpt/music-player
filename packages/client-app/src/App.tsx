import React, { useState } from "react";
import { PlayerBase } from "./components/containerComponents/playerBase/PlayerBase";

export const AppContext = React.createContext({
  currentSongIdx: -1,
  setCurrentSongIdx: (idx: number) => {},
});
function App() {
  const [currentSongIdx, setCurrentSongIdx] = useState(-1);

  return (
    <AppContext.Provider value={{ currentSongIdx, setCurrentSongIdx }}>
      <PlayerBase />
    </AppContext.Provider>
  );
}

export default App;
