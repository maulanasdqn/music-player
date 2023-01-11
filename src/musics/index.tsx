import { FC, ReactElement } from "react";
type Playlist = {
  id: number;
  title: string;
  src: string;
  artist?: string;
  thumbnail?: string;
};

const musics: FC<Playlist> = [
  {
    id: 1,
    title: "Anthem of Victory",
    src: "./playlist/anthem-of-victory-111206.mp3",
    artist: "DaddysMusic",
    thumbnail: "./playlist/anthem-of-victory-111206.webp",
  },
  {
    id: 2,
    title: "Goldn",
    src: "./playlist/goldn-116392.mp3",
    artist: "prazkhanal",
    thumbnail: "./playlist/goldn-116392.webp",
  },
  {
    id: 3,
    title: "Guitar Electro Sport Trailer",
    src: "./playlistguitar-electro-sport-trailer-115571.mp3",
    artist: "Gvidon",
    thumbnail: "./playlistguitar-electro-sport-trailer-115571.webp",
  },
  {
    id: 4,
    title: "Inspiring Cinematic Ambient",
    src: "./playlistinspiring-cinematic-ambient-116199.mp3",
    artist: "Music For Videos",
    thumbnail: "./playlistinspiring-cinematic-ambient-116199.webp",
  },
  {
    id: 5,
    title: "Lofi Study",
    src: "./playlistlofi-study-112191.mp3",
    artist: "FASSounds",
    thumbnail: "./playlist/lofi-study-112191.webp",
  },
  {
    id: 6,
    title: "Stomping Rock (Four Shots)",
    src: "/./playlist/stomping-rock-four-shots-111444.mp3",
    artist: "AlexGrohl",
    thumbnail: "./playlist/stomping-rock-four-shots-111444.webp",
  },
];
