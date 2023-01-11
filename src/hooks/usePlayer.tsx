import { createContext, FC, ReactNode, useContext, useState } from "react";
import { musics } from "@musics";
import { Player } from "@components/Player";
import { CurrentMusicType, PlayerContextType } from "@util/types";
import { defaultMusic } from "@components/common/utils";

const PlayerContext = createContext<PlayerContextType>({
  playList: musics,
  currentMusic: defaultMusic,
  setCurrentMusic: () => {},
});

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState<CurrentMusicType>(defaultMusic);

  const setCurrentMusic = (val: Partial<CurrentMusicType>, replace = false) => {
    if (replace && val.src !== current.src) {
      setCurrent(val as CurrentMusicType);
    } else {
      setCurrent((prev) => ({ ...prev, ...val }));
    }
  };

  return (
    <PlayerContext.Provider
      value={{ currentMusic: current, setCurrentMusic, playList: musics }}
    >
      {children}
      {current.src && <Player />}
    </PlayerContext.Provider>
  );
};
