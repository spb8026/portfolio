import { useState } from 'react';
import data from '../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faProjectDiagram, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [playlists, setPlaylists] = useState(data.playlists);
  const [hoveredBox, setHoveredBox] = useState(null);

  const styles = {
    fullBar: {
      width: '65px',
      height: '100vh',
      backgroundColor: '#0C0C0C',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    topBar: {
      width: '100%',
      flex: '0 0 auto',
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
      flex: '1 1 auto',
      borderRadius: '10px',
      backgroundColor: '#342A21',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 0',
    },
    box: {
      width: '55px',
      height: '55px',
      borderRadius: '10px',
      margin: '10px 0',
      backgroundColor: '#C22222',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    boxHovered: {
      transform: 'scale(1.1)',
      translate: '2px -2px ease',
      opacity: 0.8,
    },
    icon: {
      width: '60%',
      height: '60%',
    },
  };

  return (
    <div style={styles.fullBar}>
      <div style={styles.topBar}>
        <div
          style={{
            ...styles.box,
            ...(hoveredBox === 'faPerson' && styles.boxHovered),
          }}
          onMouseEnter={() => setHoveredBox('faPerson')}
          onMouseLeave={() => setHoveredBox(null)}
        >
          <FontAwesomeIcon icon={faPerson} style={styles.icon} />
        </div>
        <div
          style={{
            ...styles.box,
            ...(hoveredBox === 'faSearch' && styles.boxHovered),
          }}
          onMouseEnter={() => setHoveredBox('faSearch')}
          onMouseLeave={() => setHoveredBox(null)}
        >
          <FontAwesomeIcon icon={faSearch} style={styles.icon} />
        </div>
      </div>
      <div style={styles.bottomBar}>
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            style={{
              ...styles.box,
              ...(hoveredBox === playlist.id && styles.boxHovered),
            }}
            onMouseEnter={() => setHoveredBox(playlist.id)}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <FontAwesomeIcon icon={getFontAwesomeIcon(playlist.icon)} style={styles.icon} />
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
