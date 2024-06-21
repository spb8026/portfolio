import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const playlists = [
    { imgSrc: 'next.svg', title: 'Everything' },
    { imgSrc: 'next.svg', title: 'Liked Songs' },
    { imgSrc: 'next.svg', title: 'THE COMPLETE FRAT MOUSE CINEMATIC...' },
    { imgSrc: 'next.svg', title: 'New World Depression' },
    { imgSrc: 'next.svg', title: 'Low Budget Indie Film Playlist' },
    { imgSrc: 'next.svg', title: 'GET MONEY SHONCI REMIX' },
    { imgSrc: 'next.svg', title: 'icantbelieveiletyougetaway' },
    { imgSrc: 'next.svg', title: 'Yeager Mentality' },
    { imgSrc: 'next.svg', title: 'Everything' },
    { imgSrc: 'next.svg', title: 'Liked Songs' },
    { imgSrc: 'next.svg', title: 'THE COMPLETE FRAT MOUSE CINEMATIC...' },
    { imgSrc: 'next.svg', title: 'New World Depression' },
    { imgSrc: 'next.svg', title: 'Low Budget Indie Film Playlist' },
    { imgSrc: 'next.svg', title: 'GET MONEY SHONCI REMIX' },
    { imgSrc: 'next.svg', title: 'icantbelieveiletyougetaway' },
    { imgSrc: 'next.svg', title: 'Yeager Mentality' },
  ];
  
  const MainContent = () => {
    return (
      <div style={styles.container}>

        <div style={styles.header}>
          <FontAwesomeIcon icon={faPerson} />
          <h2>Socials</h2>
        </div>

        <div style={styles.banner}>
          <img src="next.svg" alt="Album Cover" style={styles.albumCover} />
          <div style={styles.playlistInfo}>
            <h1 style={styles.title}>Don Toliver - HARDSTONE PSYCHO</h1>
            <p style={styles.description}>Listen to my new album, 'HARDSTONE PSYCHO', NOW!</p>
            <button style={styles.playButton}>Play</button>
            <button style={styles.followButton}>Follow</button>
          </div>
        </div>

        <div style={styles.playlists}>
          {playlists.map((playlist, index) => (
            <div key={index} style={styles.playlistItem}>
              <img src={playlist.imgSrc} alt={`Playlist ${index + 1}`} style={styles.playlistImg} />
              <p style={styles.playlistTitle}>{playlist.title}</p>
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
      backgroundColor: '#1a1a1a',
      color: 'white',
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
      backgroundColor: 'grey',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '85%',
      height: '35vh',
      padding: '10px'
    }, // 

    albumCover: {
      width: '200px',
      height: '200px',
      borderRadius: '10px',
      marginRight: '20px'
    },
    playlistInfo: {
      maxWidth: '800px'
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
      backgroundColor: '#1db954',
      border: 'none',
      borderRadius: '50px',
      color: 'white',
      padding: '10px 20px',
      cursor: 'pointer',
      marginRight: '10px'
    },
    followButton: {
      backgroundColor: '#1db954',
      border: 'none',
      borderRadius: '50px',
      color: 'white',
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
    // playlistItem: {
    //   width: '23%',
    //   margin: '1%',
    //   backgroundColor: '#2a2a2a',
    //   borderRadius: '10px',
    //   overflow: 'hidden',
    //   cursor: 'pointer'
    // },
    // playlistImg: {
    //   width: '100%',
    //   height: 'auto'
    // },
    // playlistTitle: {
    //   padding: '10px',
    //   fontSize: '14px',
    //   color: 'white'
    // }
    
    playlistItem: {
      width: '31%',
      height: '40%',
      margin: '1%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#2a2a2a',
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
    playlistTitle: {
      color: 'white'
    }
  };
  
  export default MainContent;