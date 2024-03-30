import { useState } from "react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;

    if (isPlaying) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <audio id="audio" src="path/to/your/audio/file.mp3" />
    </div>
  );
}
