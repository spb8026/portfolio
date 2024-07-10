import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep, faPause, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { usePlayer } from '../context/PlayerContext';

const Playbar = () => {
  const {
    currentSong,
    currentPlaylist,
    handleSongForward,
    handleSongBackward,
    handlePlayButtonClick,
    toggleInfoBar,
  } = usePlayer();

  const playbarStyle = {
    width: '100%',
    height: '6vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--container-bg)',
    position: 'fixed' as 'fixed',
    bottom: 0,
    padding: '0 10px',
  };

  const songInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    overflow: 'hidden',
  };

  const imageWrapperStyle = {
    width: '40px',
    height: '40px',
    position: 'relative' as 'relative',
    marginRight: '20px',
    marginLeft: '5px',
    flexShrink: 0,
  };

  const descriptionWrapperStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  };

  const descriptionStyle = {
    margin: '0px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  };

  const iconContainerStyle = {
    width: '70%',
    display: 'flex',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    flexShrink: 0,
  };

  const iconStyle = {
    color: 'var(--icon)',
    fontSize: '30px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  const iconHoverStyle = {
    color: '#ff5733',
  };

  const smallIconContainerStyle = {
    width: '10%',
    display: 'flex',
    justifyContent: 'center' as 'center',
    flexShrink: 0,
  };

  const smallIconStyle = {
    color: 'var(--icon)',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  return (
    <div style={playbarStyle}>
      <div style={songInfoStyle}>
        <div style={imageWrapperStyle}>
          <Image src={"/portfolio" + currentSong.image} alt="Music-Image" layout="fill" style={{ display: 'inline' }} />
        </div>
        <div style={descriptionWrapperStyle}>
          <p style={{ margin: '0px' }}>{currentSong.title}</p>
          <p style={descriptionStyle}>{currentSong.description}</p>
        </div>
      </div>
      <div style={iconContainerStyle}>
        <FontAwesomeIcon
          icon={faBackwardStep}
          style={iconStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.currentTarget.style.color = iconStyle.color}
          onClick={handleSongBackward}
        />
        <FontAwesomeIcon
          icon={faPause}
          style={{ ...iconStyle, margin: '25px' }}
          onMouseEnter={(e) => e.currentTarget.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.currentTarget.style.color = iconStyle.color}
          onClick={() => handlePlayButtonClick(true)}
        />
        <FontAwesomeIcon
          icon={faForwardStep}
          style={iconStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.currentTarget.style.color = iconStyle.color}
          onClick={handleSongForward}
        />
      </div>
      <div style={smallIconContainerStyle}>
        <FontAwesomeIcon
          icon={faUpRightFromSquare}
          style={smallIconStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.currentTarget.style.color = iconStyle.color}
          onClick={toggleInfoBar}
        />
      </div>
    </div>
  );
};

export default Playbar;
