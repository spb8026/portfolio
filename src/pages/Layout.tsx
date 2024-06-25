// components/Layout.tsx
import Sidebar from "@/components/sidebar";
import Playbar from "@/components/playbar";
import Infobar from "@/components/infobar";
import { useState } from "react";
import { Data, Playlist, Song } from "../models"; // Adjust the import path as per your project structure

type LayoutProps = {
  children: React.ReactNode;
  data: Data;
};

export default function Layout({ children, data }: LayoutProps) {
  const [showInfobar, setShowInfobar] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(data.playlists[0]);
  const [currentSong, setCurrentSong] = useState(currentPlaylist.songs[0]);

  const handlePlayButtonClick = () => {
    setShowInfobar(!showInfobar);
  };

  const handleSongChange = (curSong: Song) => {
    setCurrentSong(curSong);
  };

  const handleSongForward = () => {
    const currentIndex = currentPlaylist.songs.indexOf(currentSong);
    const nextIndex = currentIndex + 1;

    if (nextIndex < currentPlaylist.songs.length) {
      handleSongChange(currentPlaylist.songs[nextIndex]);
    } else {
      handleSongChange(currentPlaylist.songs[0]);
    }
  };

  const handleSongBackward = () => {
    const currentIndex = currentPlaylist.songs.indexOf(currentSong);
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      handleSongChange(currentPlaylist.songs[prevIndex]);
    } else {
      handleSongChange(currentPlaylist.songs[currentPlaylist.songs.length - 1]);
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    },
    sidebarContainer: {
      flex: "0 0 6vw",
    },
    mainContainer: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      position: "relative",
    },
    playbarContainer: {
      flex: "0 0 6vh",
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
    playButton: {
      position: "absolute",
      bottom: "10vh",
      right: "10vw",
      zIndex: 1001,
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div style={styles.mainContainer}>
        {children}
        <button style={styles.playButton} onClick={handlePlayButtonClick}>
          Play
        </button>
      </div>
      <div style={styles.playbarContainer}>
        <Playbar
          curSong={currentSong}
          curPlaylist={currentPlaylist}
          onSongForward={handleSongForward}
          onSongBackward={handleSongBackward}
        />
      </div>
      {showInfobar && <Infobar curSong={currentSong} curPlaylist={currentPlaylist} />}
    </div>
  );
}
