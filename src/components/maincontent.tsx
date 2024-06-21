import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';

const playlists = [
  { imgSrc: 'next.svg', title: 'Classes Taken' },
  { imgSrc: 'next.svg', title: 'Design Projects' },
  { imgSrc: 'next.svg', title: 'Experiance' },
  { imgSrc: 'next.svg', title: 'Side-Projects' }
];

const MainContent = () => {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <FontAwesomeIcon icon={faPerson} />
        <h2>Socials</h2>
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
          <button style={styles.playButton}>Play</button>
          <button style={styles.followButton}>Follow</button>
        </div>
      </div>

      <div style={styles.playlists}>
        {playlists.map((playlist, index) => (
          <div key={index} style={styles.playlistItem}>
            <img src={playlist.imgSrc} alt={`Playlist ${index + 1}`} style={styles.playlistImg} />
            <h3 style={{fontSize: '2rem'}}>{playlist.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#342A21',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginRight: '10px'
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
};

export default MainContent;
