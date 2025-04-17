import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from 'next/link';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { usePlayer } from '@/context/PlayerContext';
import { getFontAwesomeIcon } from '../utils/iconUtils';
import data from '../data/data.json';

const playlists = data.playlists;

const MainContent = () => {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);
  const [aboutHover, setAboutHover] = useState(false);
  const { handlePlaylistChange } = usePlayer();

  const iconHoverColor = '#ff5733';
  const iconBaseColor = 'white';

  const handlePlayButtonClick = (playlist: Playlist) => {
    handlePlaylistChange(playlist);
  };

  return (
    <div style={{
      height: '100vh',
      margin: '0 auto',
      padding: '1.25rem',
      backgroundColor: 'var(--sect-bg)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <Image src="/portfolio/Red-Logo.png" alt="Logo" width={50} height={75} />
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[{
            href: "mailto:shawnbroderick658@gmail.com", icon: faEnvelope
          }, {
            href: "https://github.com/spb8026", icon: faGithub
          }, {
            href: "https://www.linkedin.com/in/shawn-broderick-24b736266/", icon: faLinkedin
          }].map(({ href, icon }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={icon}
                style={{
                  color: iconBaseColor,
                  fontSize: '1.75rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = iconHoverColor}
                onMouseLeave={e => e.currentTarget.style.color = iconBaseColor}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '1.5rem',
        backgroundColor: 'var(--container-bg)',
        marginInline: 'auto',
        width: '85%',
        height: '35vh',
        padding: '0.75rem',
        overflow: 'hidden',
        borderRadius: '1rem',
      }}>
        <div style={{
          width: '40%',
          height: '100%',
          borderRadius: '1rem',
          overflow: 'hidden',
        }}>
          <Image src="/portfolio/portrait.jpg" alt="Album Cover" width={300} height={400} />
        </div>
        <div style={{ maxWidth: '60%', paddingLeft: '1rem' }}>
          <h1 style={{ fontSize: '2.25rem', margin: 0 }}>Shawn Broderick - Software Engineer / CS Student</h1>
          <p style={{ fontSize: '1rem', color: 'var(--text)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            Welcome to my Spotify inspired portfolio!
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <Link href="/aboutme" style={{
              backgroundColor: 'var(--button)',
              borderRadius: '2rem',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              color: 'var(--text)',
              fontSize: '1rem',
            }}>About Me</Link>
            <button
              style={{
                backgroundColor: 'var(--button)',
                border: 'none',
                borderRadius: '2rem',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: '1rem',
                color: 'var(--text)',
              }}
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              About this Project
            </button>
          </div>
        </div>
      </div>

      {/* Playlists */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '2rem',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        height: '30vh',
      }}>
        {playlists.map((playlist, index) => {
          const isHovered = hoveredBox === playlist.id;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredBox(playlist.id)}
              onMouseLeave={() => setHoveredBox(null)}
              style={{
                width: '30%',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: isHovered ? 'var(--button-hover)' : 'var(--button)',
                borderRadius: '0.75rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <FontAwesomeIcon icon={getFontAwesomeIcon(playlist.icon)} style={{
                fontSize: '2rem',
                marginInline: '1rem',
              }} />
              <h3 style={{ fontSize: '1.5rem', flexGrow: 1 }}>{playlist.title}</h3>
              <Link href={`/${playlist.id}`} style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 1,
              }} />
              <FontAwesomeIcon
                icon={faCirclePlay}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  fontSize: '2.5rem',
                  color: 'var(--icon)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                  zIndex: 2,
                }}
                onClick={() => handlePlayButtonClick(playlist)}
              />
            </div>
          );
        })}
      </div>

      {/* About Box */}
      <div style={{
        position: 'absolute',
        top: '45%',
        left: '25%',
        width: '50%',
        backgroundColor: 'var(--sect-bg)',
        border: '4px solid #C22222',
        borderRadius: '1rem',
        padding: '1rem',
        display: aboutHover ? 'block' : 'none',
      }}>
        <p style={{ fontSize: '1rem' }}>
          After exploring numerous ideas for a unique portfolio, I realized that the perfect inspiration had been right in front of me all along...
        </p>
      </div>
    </div>
  );
};

export default MainContent;
