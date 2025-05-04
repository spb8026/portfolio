import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { usePlayer } from '../context/PlayerContext';
import Tooltip from "./tooltip";

const Playbar = () => {
  const {
    currentSong,
    handleSongForward,
    handleSongBackward,
    handlePlayButtonClick,
    toggleInfoBar,
  } = usePlayer();

  const styles = {
    playbar: {
      width: '100%',
      height: '6vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'var(--container-bg)',
      position: 'fixed' as const,
      bottom: 0,
      padding: '0 10px',
    },
    songInfo: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      overflow: 'hidden',
    },
    imageWrapper: {
      width: '40px',
      height: '40px',
      position: 'relative' as const,
      marginRight: '20px',
      marginLeft: '5px',
      flexShrink: 0,
    },
    descriptionWrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
      overflow: 'hidden',
      whiteSpace: 'nowrap' as const,
    },
    description: {
      margin: '0px',
      whiteSpace: 'nowrap' as const,
      overflow: 'hidden',
      width: '100%',
    },
    iconContainer: {
      width: '70%',
      display: 'flex',
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      flexShrink: 0,
    },
    icon: {
      color: 'var(--icon)',
      fontSize: '30px',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    smallIconContainer: {
      width: '10%',
      display: 'flex',
      justifyContent: 'center' as const,
      flexShrink: 0,
    },
    smallIcon: {
      color: 'var(--icon)',
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    hoverColor: '#ff5733',
  };

  const handleHover = (e: React.MouseEvent, isEntering: boolean) => {
    (e.currentTarget as HTMLElement).style.color = isEntering
      ? styles.hoverColor
      : styles.icon.color;
  };

  return (
    <div style={styles.playbar}>
      <div style={styles.songInfo}>
        <div style={styles.imageWrapper}>
          <Image
            src={"/portfolio" + currentSong.image}
            alt="Music-Image"
            layout="fill"
            style={{ display: 'inline' }}
          />
        </div>
        <div style={styles.descriptionWrapper}>
          <p style={{ margin: '0px' }}>{currentSong.title}</p>
          <p style={styles.description}>{currentSong.description}</p>
        </div>
      </div>

      <div style={styles.iconContainer}>
        <Tooltip title="Skip Backwards" position="top">
        <FontAwesomeIcon
          icon={faBackwardStep}
          style={styles.icon}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={handleSongBackward}
        />
        </Tooltip>
        <Tooltip title="Play/Pause" position="top">
        <FontAwesomeIcon
          icon={faPause}
          style={{ ...styles.icon, margin: '25px' }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={() => handlePlayButtonClick(true)}
        />
        </Tooltip>
        <Tooltip title="Skip Foward" position="top">
        <FontAwesomeIcon
          icon={faForwardStep}
          style={styles.icon}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={handleSongForward}
        />
        </Tooltip>
      </div>

      <div style={styles.smallIconContainer}>
        <Tooltip title="See Sidenav Details" position="top">
        <FontAwesomeIcon
          icon={faUpRightFromSquare}
          style={styles.smallIcon}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          onClick={toggleInfoBar}
        />
        </Tooltip>
      </div>
    </div>
  );
};

export default Playbar;
