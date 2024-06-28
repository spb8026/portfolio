import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faEnvelope, faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from 'next/link';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { getFontAwesomeIcon } from '../utils/iconUtils';
import { Data, Playlist, Song } from '../models';
import data from '../data/data.json'; // Import your data
import { useState } from "react";
import { usePlayer } from '@/context/PlayerContext';


const playlists = data.playlists;

const MainContent = () => {
  const [hoveredBox, setHoveredBox] = useState<String | null>(null);
  const {handlePlaylistChange} = usePlayer();

  const styles = {
    container: {
      height: '100vh',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#342A21',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    banner: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
      backgroundColor: '#0C0C0C',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '85%',
      height: '35vh',
      padding: '10px'
    },
    albumCover: {
      width: '40%', // Adjust width to take up more space
      height: '100%', // Ensure it fills the height of the parent container
      borderRadius: '10px',
      overflow: 'hidden', // Ensure the image doesn't overflow its container
    },
    playlistInfo: {
      maxWidth: '60%', // Adjust to leave space for album cover
    },
    title: {
      fontSize: '48px',
      margin: '0'
    },
    description: {
      fontSize: '16px',
      color: '#ccc'
    },
    playButton: {
      backgroundColor: '#C22222',
      border: 'none',
      borderRadius: '50px',
      padding: '10px 20px',
      cursor: 'pointer',
      marginRight: '10px',
      textDecoration: 'none',
      color: 'black'
    },
    followButton: {
      backgroundColor: '#C22222',
      border: 'none',
      borderRadius: '50px',
      padding: '10px 20px',
      cursor: 'pointer'
    },
    playlists: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '30px',
      overflow: 'scroll',
      scrollbarWidth: 'none',
      height: '40vh'
    },
    playlistItem: {
      width: '30%',
      height: '35%',
      margin: '1%',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#789581',
      borderRadius: '10px',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative' as 'relative', // Ensures the Link covers the entire div
    },
    playlistItemHovered: {
      backgroundColor: '#C0C5C1',
    },
    playlistImg: {
      width: '25%',
      height: '100%',
      marginLeft: '10px',
      marginRight: '30px'
    },
    playlistLink: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1, // Ensures the Link is clickable over other elements
    },
    iconStyle: {
      color: 'white',
      fontSize: '30px',
      cursor: 'pointer',
      transition: 'color 0.3s', // Smooth transition for the color change
    },
    playIcon: {
      position: 'absolute' as 'absolute',
      right: '30px',
      display: 'none',
      fontSize: '50px',
      color: '#C22222',
      zIndex: 2,
    },
    playIconVisible: {
      display: 'block',
    },
  };

  function handlePlayButtonClick(playlist: Playlist) {
    handlePlaylistChange(playlist);
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <a href="mailto:shawnbroderick658@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} /> </a>
        <a href="https://github.com/spb8026" target="_blank" ><FontAwesomeIcon icon={faGithub} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} /> </a>
        <a href="https://www.linkedin.com/in/shawn-broderick-24b736266/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} /></a>
      </div>

      <div style={styles.banner}>
        <div style={styles.albumCover}>
          <Image
            src="/portrait.jpg"
            alt="Album Cover"
            layout="fixed" // Use 'responsive' layout to adjust to container width
            width={300} // Set a width that fits your layout
            height={400} // Set a height that maintains aspect ratio
          />
        </div>
        <div style={styles.playlistInfo}>
          <h1 style={styles.title}>Shawn Broderick - Software Engineer / Computer Science Student</h1>
          <p style={styles.description}>Welcome to my Spotify inspired portfolio!</p>
          <Link href="/aboutme" style={styles.playButton}>About Me</Link>
          <button style={styles.followButton}>About this Project</button>
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
            <h3 style={{ fontSize: '2rem' }}>{playlist.title}</h3>
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
    </div>
  );
};

export default MainContent;
