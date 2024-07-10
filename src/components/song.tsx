import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { usePlayer } from '@/context/PlayerContext';
import data from '../data/data.json';

type SongProps = {
    song: Song;
};

export default function Song({ song }: SongProps) {
    const defaultSong = data.playlists[0].songs[0];
    const currentSong = song || defaultSong;

    const [isHovered, setIsHovered] = useState(false);

    const { handlePlayButtonClick, handleSongChange } = usePlayer();

    const handlePlayClick = () => {
        handleSongChange(currentSong);
        handlePlayButtonClick(true);
    };

    
    const descriptionLines = currentSong.description.split('\n');

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: isHovered ? 'var(--song)' : 'transparent',
                color: isHovered ? 'white' : 'inherit',
                transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <FontAwesomeIcon
                    icon={faPlay}
                    style={{ width: '5%', margin: 0, cursor: 'pointer' }}
                    onClick={handlePlayClick}
                />
            ) : (
                <h4 style={{ width: '5%', margin: 0 }}>{currentSong.indexx + 1}</h4>
            )}
            <div style={{ width: '50px', height: '50px', position: 'relative', marginRight: '10px' }}>
                <Image src={currentSong.image} layout="fill" objectFit="contain" alt={currentSong.title} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{currentSong.title}</p>
                <div style={{ margin: 0 }}>
                    {descriptionLines.map((line, index) => (
                        <p key={index} style={{ margin: 0 }}>{line}</p>
                    ))}
                </div>
            </div>
            <p style={{ width: '20%', textAlign: 'right', margin: 0 }}>68,123,124</p>
            <p style={{ width: '20%', textAlign: 'right', margin: 0, marginRight: '5px' }}>1:20</p>
        </div>
    );
}
