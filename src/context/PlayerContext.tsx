import { createContext, useContext, useState, ReactNode } from 'react';
import { Data, Playlist, Song } from '../models';
import data from '../data/data.json'; // Import your data

type PlayerContextType = {
    currentSong: Song;
    currentPlaylist: Playlist;
    showInfobar: boolean;
    handlePlayButtonClick: (state: boolean) => void;
    toggleInfoBar: () => void;
    handlePlaylistChange: (playlist: Playlist) => void;
    handleSongChange: (song: Song) => void;
    handleSongForward: () => void;
    handleSongBackward: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [showInfobar, setShowInfobar] = useState(false);
    const [currentPlaylist, setCurrentPlaylist] = useState(data.playlists[2]);
    const [currentSong, setCurrentSong] = useState(currentPlaylist.songs[0]);

    const handlePlayButtonClick = (state: boolean) => {
        setShowInfobar(state);
    };

    const toggleInfoBar = () => {
        setShowInfobar(!showInfobar);
    };

    const handleSongChange = (curSong: Song) => {
        setCurrentSong(curSong);
    };

    const handlePlaylistChange = (curPlaylist: Playlist) => {
        setCurrentPlaylist(curPlaylist);
        setCurrentSong(curPlaylist.songs[0]);
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

    return (
        <PlayerContext.Provider
            value={{
                currentSong,
                currentPlaylist,
                showInfobar,
                handlePlayButtonClick,
                toggleInfoBar,
                handlePlaylistChange,
                handleSongChange,
                handleSongForward,
                handleSongBackward,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
};
