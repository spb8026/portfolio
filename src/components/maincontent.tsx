import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faEnvelope, faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from 'next/link';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { CSSProperties } from "react";


import { getFontAwesomeIcon } from '../utils/iconUtils';
import data from '../data/data.json'; // Import your data
import { useState } from "react";
import { usePlayer } from '@/context/PlayerContext';
import { transform } from "next/dist/build/swc";


const playlists = data.playlists;

const MainContent = () => {
  const [hoveredBox, setHoveredBox] = useState<String | null>(null);
  const [aboutHover, setAboutHover] = useState(false);
  const {handlePlaylistChange} = usePlayer();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      height: '100vh',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'var(--sect-bg)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
    },
    banner: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
      backgroundColor: 'var(--container-bg)',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '85%',
      height: '35vh',
      padding: '10px',
      overflow: 'hidden', 
    },
    albumCover: {
      width: '40%', 
      height: '100%', 
      borderRadius: '10px',
      overflow: 'hidden', 
    },
    playlistInfo: {
      maxWidth: '60%', 
      overflow: 'hidden', 
    },
    title: {
      fontSize: '250%',
      width: '100%',
      margin: '0',
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
    },
    description: {
      fontSize: '16px',
      color: 'var(--text)',
      whiteSpace: 'nowrap', 
      textOverflow: 'ellipsis', 
    },
    playButton: {
      backgroundColor: 'var(--button)',
      border: 'none',
      borderRadius: '50px',
      padding: '10px 20px',
      cursor: 'pointer',
      marginRight: '10px',
      textDecoration: 'none',
      color: 'var(--text)',
    },
    followButton: {
      backgroundColor: 'var(--button)',
      border: 'none',
      borderRadius: '50px',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    playlists: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '30px',
      overflow: 'scroll',
      scrollbarWidth: 'none',
      height: '40vh',
    },
    playlistItem: {
      width: '29%',
      height: '35%',
      margin: '1%',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'var(--button)',
      borderRadius: '10px',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative' as 'relative', 
    },
    playlistItemHovered: {
      backgroundColor: 'var(--button-hover)',
      transform: 'scale(1.02)',
    },
    playlistImg: {
      width: '25%',
      height: '100%',
      marginLeft: '10px',
      marginRight: '30px',
    },
    playlistLink: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1, 
    },
    iconStyle: {
      color: 'var(--icon)',
      fontSize: '30px',
      cursor: 'pointer',
      transition: 'color 0.3s', 
    },
    playIcon: {
      position: 'absolute' as 'absolute',
      right: '30px',
      display: 'none',
      fontSize: '50px',
      color: 'var(--icon)',
      opacity: 1,
      zIndex: 3,
    },
    playIconVisible: {
      display: 'block',
    },
    aboutBox: {
      position: 'absolute',
      top: '45%',
      left: '45%',
      width: '50%',
      backgroundColor: 'var(--sect-bg)',
      border: '4px solid #C22222',
      borderRadius: '20px',
      display: 'none',
    },
    aboutBoxVisible: {
      display: 'block',
    }
  };

  function handlePlayButtonClick(playlist: Playlist) {
    handlePlaylistChange(playlist);
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Image src={"/portfolio" + "/Red-Logo.png"} alt="Logo" width={50} height={75} />
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="mailto:shawnbroderick658@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} /> </a>
          <a href="https://github.com/spb8026" target="_blank" ><FontAwesomeIcon icon={faGithub} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} /> </a>
          <a href="https://www.linkedin.com/in/shawn-broderick-24b736266/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} /></a>
        </div>
      </div>

      <div style={styles.banner}>
        <div style={styles.albumCover}>
          <Image
            src={ "/portfolio" +"/portrait.jpg"}
            alt="Album Cover"
            layout="fixed" 
            width={300} 
            height={400} 
          />
        </div>
        <div style={styles.playlistInfo}>
          <h1 style={styles.title}>Shawn Broderick - Software Engineer / Computer Science Student</h1>
          <p style={styles.description}>Welcome to my Spotify inspired portfolio!</p>
          <Link href="/aboutme" style={styles.playButton}>About Me</Link>
          <button style={styles.followButton}
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          
          >About this Project</button>
        </div>
      </div>

      <div style={styles.playlists}>
        {playlists.map((playlist, index) => (
          <div key={index}
          style={{
            ...styles.playlistItem,
            ...(hoveredBox === playlist.id && styles.playlistItemHovered),
          }}
          onMouseEnter={() => setHoveredBox(playlist.id)}
          onMouseLeave={() => setHoveredBox(null)}
        >
            <FontAwesomeIcon icon={getFontAwesomeIcon(playlist.icon)} style={styles.playlistImg}></FontAwesomeIcon>
            <h3 style={{ fontSize: '2rem', width: '45%' }}>{playlist.title}</h3>
            <Link href={`/${playlist.id}`} style={styles.playlistLink}></Link>
            <FontAwesomeIcon
              icon={faCirclePlay}
              style={{
                ...styles.playIcon,
                ...(hoveredBox === playlist.id && styles.playIconVisible),
              }}
              onClick={() => handlePlayButtonClick(playlist)}
              />            
          </div>
        ))}
      </div>
      <div 
          style={{
            ...styles.aboutBox,
           ...(aboutHover === true && styles.playIconVisible),
        }}
        >
        <p>
        After exploring numerous ideas for a unique portfolio, I realized that the perfect inspiration had been right in front of me all along. Music is an integral part of my life, accompanying me in almost every aspect of my day to day. Given my affinity for Spotify, I decided to draw UI/UX inspiration from it and create a portfolio that is a creative parody of the platform. To elevate the challenge, I chose to learn and implement both Next.js and React for this project. This decision not only allowed me to enhance my technical skills but also to deliver a seamless and engaging user experience reminiscent of my favorite music application.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
