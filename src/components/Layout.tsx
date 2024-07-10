import { ReactNode } from 'react';
import Sidebar from '@/components/sidebar';
import Playbar from '@/components/playbar';
import Infobar from '@/components/infobar';
import { PlayerProvider, usePlayer } from '@/context/PlayerContext';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const {
    showInfobar,
    currentPlaylist,
    currentSong,
    handlePlayButtonClick,
    handleSongForward,
    handleSongBackward,
  } = usePlayer();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
    },
    sidebarContainer: {
      flex: '0 0 6vw',
    },
    mainContainer: {
      flex: showInfobar ? '0 0 70vw' : '1',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      position: 'relative',
      transition: 'flex 0.3s',
    },
    playbarContainer: {
      flex: '0 0 6vh',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div style={styles.mainContainer}>
        {children}
      </div>
      <div style={styles.playbarContainer}>
        <Playbar />
      </div>
      {showInfobar && <Infobar curSong={currentSong} curPlaylist={currentPlaylist} />}
    </div>
  );
}

export const AppLayout = ({ children }: LayoutProps) => {
  return (
    <PlayerProvider>
      <Layout>{children}</Layout>
    </PlayerProvider>
  );
};
