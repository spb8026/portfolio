import { useState } from 'react';
import Image from 'next/image';
import data from '../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faProjectDiagram, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [playlists, setPlaylists] = useState(data.playlists);

  const styles = {
    fullBar: {
      width: '100px',
      height: '98vh',
      backgroundColor: '#0C0C0C',
      padding: '10px',
    },
    topBar: {
      width: '100%',
      height: '20%',
      borderRadius: '10px',
      backgroundColor: '#342A21',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    bottomBar: {
      width: '100%',
      height: '80%', // Adjusted to leave some space for top and bottom bars
      borderRadius: '10px',
      backgroundColor: '#342A21',
      overflowY: 'auto', // Added to enable scrolling if playlists exceed container height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    box: {
      width: '65px',
      height: '65px',
      borderRadius: '10px',
      margin: '2px',
      backgroundColor: '#C22222',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px'
    },
  };

  return (
    <div style={styles.fullBar}>
      <div style={styles.topBar}>
        <FontAwesomeIcon icon={faPerson} style={styles.box} />
        <FontAwesomeIcon icon={faSearch} style={styles.box} />
      </div>
      <div style={styles.bottomBar}>
        {playlists.map((playlist) => (
          <div key={playlist.id} style={{ marginBottom: '10px' }}>
              <FontAwesomeIcon icon={getFontAwesomeIcon(playlist.icon)} style={styles.box}/>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to map icon string to FontAwesome icon component
const getFontAwesomeIcon = (iconName: string) => {
  switch (iconName) {
    case 'faMusic':
      return faMusic;
    case 'faProjectDiagram':
      return faProjectDiagram;
    // Add more cases for other icons as needed
    default:
      return faMusic; // Default to faMusic if icon name is not recognized
  }
};

export default Sidebar;
