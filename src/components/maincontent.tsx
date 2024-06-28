import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from 'next/link';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { getFontAwesomeIcon } from '../utils/iconUtils';
import { Data, Playlist, Song } from '../models';
import data from '../data/data.json'; // Import your data

const playlists = data.playlists;

const MainContent = () => {

  const playlist = playlists;

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
      width: '31%',
      height: '40%',
      margin: '1%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#789581',
      borderRadius: '10px',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    playlistImg: {
      width: '25%',
      height: '100%',
      marginLeft: '10px',
      marginRight: '30px'
    },
     iconStyle: {
      color: 'white',
      fontSize: '30px',
      cursor: 'pointer',
      transition: 'color 0.3s', // Smooth transition for the color change
    },
     iconHoverStyle: {
      color: '#ff5733', // Color when hovered over
    }
  };
  

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <a href="mailto:shawnbroderick658@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} /> </a>
        <a href="https://github.com/spb8026" target="_blank" ><FontAwesomeIcon icon={faGithub} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}/> </a>
        <a href="https://www.linkedin.com/in/shawn-broderick-24b736266/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={styles.iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = '#ff5733'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}/></a>
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
          <h1 style={styles.title}>Shawn Brodeick - Software Engineer / Computer Science Student</h1>
          <p style={styles.description}>Welcome to my Spotify inspired portfolio!</p>
          <Link href="/aboutme"style={styles.playButton}>About Me</Link>
          <button style={styles.followButton}>About this Project</button>
        </div>
      </div>

      <div style={styles.playlists}>
        {playlists.map((playlist, index) => (
          <div key={index} style={styles.playlistItem}>
            <FontAwesomeIcon icon={getFontAwesomeIcon(playlist.icon)} style={styles.playlistImg}></FontAwesomeIcon>
            <h3 style={{fontSize: '2rem'}}>{playlist.title}</h3>
            <Link href="/{{playlist.id}}" style={{width: '100%', height: '100%'}}></Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default MainContent;
