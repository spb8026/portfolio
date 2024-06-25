import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep, faMusic, faPause, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Song, Playlist } from '../models'; // Adjust the import path as per your project structure

interface PlaybarProps {
  curSong: Song;
  curPlaylist: Playlist;
  onSongForward: () => void;
  onSongBackward: () => void;
}

const Playbar = ({ curSong, curPlaylist, onSongForward, onSongBackward }: PlaybarProps) => {

  const playbarStyle = {
    width: '100%',
    height: '6vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0C0C0C',
    position: 'fixed',
    bottom: 0,
  };

  const songInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '15%',
  };

  const descriptionStyle = {
    margin: '0px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '50%',
  };

  const iconStyle = {
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
    transition: 'color 0.3s', // Smooth transition for the color change
  };

  const iconHoverStyle = {
    color: '#ff5733', // Color when hovered over
  };

  return (
    <div style={playbarStyle}>
      <div style={songInfoStyle}>
        <Image src={curSong.image} alt="Music-Image" width={100} height={100} style={{ display: 'inline', margin: '5px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ margin: '0px' }}>{curSong.title}</p>
          <p style={descriptionStyle}>{curSong.description}</p>
        </div>
      </div>
      <div style={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faBackwardStep} style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} onClick={onSongBackward} />
        <FontAwesomeIcon icon={faPause} style={{ ...iconStyle, margin: '25px' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} />
        <FontAwesomeIcon icon={faForwardStep} style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} onClick={onSongForward} />
      </div>
      <div style={{ width: '15%', display: 'flex', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faUpRightFromSquare} style={{ ...iconStyle, fontSize: '20px', margin: '5px' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} />
      </div>
    </div>
  );
};

export default Playbar;
