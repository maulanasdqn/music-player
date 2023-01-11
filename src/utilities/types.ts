export type MusicsType = {
  id: number;
  title: string;
  src: string;
  artist?: string;
  thumbnail?: string;
};

export interface CurrentMusicType extends MusicsType {
  duration?: number;
  curTime?: number;
  isPlaying?: boolean;
}
export type PlayerContextType = {
  currentMusic: CurrentMusicType;
  setCurrentMusic: (cm: Partial<CurrentMusicType>, replace?: boolean) => void;
  playList: MusicsType[];
};
