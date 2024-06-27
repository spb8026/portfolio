import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import { Playlist, Data } from '../models';
import { usePlayer } from '@/context/PlayerContext';
import Song from '@/components/Song';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { AppLayout } from '@/components/Layout';

interface PlaylistPageProps {
  playlist: Playlist | null;
}

const PlaylistPage: NextPage<PlaylistPageProps> = ({ playlist }) => {
  const router = useRouter();
  const { playlist: playlistId } = router.query;

  const { handlePlayButtonClick, handleSongChange, currentSong } = usePlayer();

  if (!playlist) {
    return <div>Loading...</div>;
  }

  const styles = {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#0C0C0C',
    },
    headerContainer: {
      width: '100%',
      height: '40%',
      backgroundColor: '#C0C5C1',
      position: 'relative' as 'relative',
    },
    headerInfoContainer: {
      position: 'absolute' as 'absolute',
      bottom: '0px',
      left: '20px',
      display: 'flex',
      flexDirection: 'row' as 'row',
      alignItems: 'center',
    },
  };

  return (
    <AppLayout>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <div style={styles.headerInfoContainer}>
            <FontAwesomeIcon icon={faMusic} style={{ fontSize: '8vw' }} />
            <div>
              <h1 style={{ fontSize: '8vw' }}>{playlist.title}</h1>
              <p>2 Likes * {playlist.songs.length} songs * 132hr 26 min</p>
            </div>
          </div>
        </div>
        <div>
          {playlist.songs.map((song) => (
            <Song key={song.indexx} song={song} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'data.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Data;
  const playlists = jsonData.playlists;

  const paths = playlists.map((playlist : Playlist) => ({
    params: { playlist: playlist.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'data.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Data;
  const playlists = jsonData.playlists;

  const playlistId = params?.playlist?.toString(); // Ensure the playlistId is a string
  const playlist = playlists.find((pl) => pl.id === playlistId) || null;

  return {
    props: {
      playlist,
    },
  };
};

export default PlaylistPage;
