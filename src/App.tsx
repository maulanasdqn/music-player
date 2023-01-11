import { PlayerProvider } from "@hooks/usePlayer";
import { PlayGround } from "@components/PlayGround";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <PlayerProvider>
        <PlayGround />
      </PlayerProvider>
    </Fragment>
  );
}

export default App;
