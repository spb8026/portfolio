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
  } = usePlayer();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    },
    sidebarContainer: {
      flexBasis: '5rem',
      flexShrink: 0,
    },
    mainContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      scrollBehavior: 'hidden',
      paddingBottom: '4.5rem', // reserve space for Playbar
      transition: 'all 0.3s ease',
    },
    playbarContainer: {
      height: '4.5rem',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0, 
      zIndex: 1000,
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
      {showInfobar && (
        <Infobar curSong={currentSong} curPlaylist={currentPlaylist} />
      )}
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
