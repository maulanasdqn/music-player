import { PlayerProvider } from "./Components/Player/usePlayer";
import { PlayGround } from "./Components/Player/PlayGround";

function App() {
  return (
    <div>
      <PlayerProvider>
        <PlayGround />
      </PlayerProvider>
    </div>
  );
}

export default App;
