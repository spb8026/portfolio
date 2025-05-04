import { useState } from "react";
import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getFontAwesomeIcon } from "@/utils/iconUtils";
import { usePlayer } from "../context/PlayerContext";
import Tooltip from "./tooltip";

const Sidebar = () => {
  const [playlists] = useState(data.playlists);
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);
  const { handlePlaylistChange } = usePlayer();

  const styles: { [key: string]: React.CSSProperties } = {
    fullBar: {
      width: "5rem",
      height: "100vh",
      backgroundColor: "var(--sect-bg)",
      padding: "0.25rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    topBar: {
      width: "100%",
      borderRadius: "0.5rem",
      backgroundColor: "var(--container-bg)",
      marginBottom: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0.5rem 0",
      gap: "0.5rem",
    },
    bottomBar: {
      width: "100%",
      flex: "1 1 auto",
      borderRadius: "0.5rem",
      backgroundColor: "var(--container-bg)",
      overflowY: "visible",      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0.5rem 0",
      gap: "0.5rem",
    },
    box: {
      width: "3rem",
      height: "3rem",
      borderRadius: "0.5rem",
      backgroundColor: "var(--button)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "transform 0.2s ease, opacity 0.2s ease",
    },
    boxHovered: {
      transform: "scale(1.1)",
      opacity: 0.85,
    },
    icon: {
      width: "60%",
      height: "60%",
    },
  };

  const renderIconBox = (
    icon: any,
    href: string | null,
    id: string,
    hasTooltip: boolean,
    title: string,
    subtitle: string
  ) => {
    const box = (
      <>
        {hasTooltip && (
          <Tooltip title={title} subtitle={subtitle} position="right">
            <div
              style={{
                ...styles.box,
                ...(hoveredBox === id ? styles.boxHovered : {}),
              }}
              onMouseEnter={() => setHoveredBox(id)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <FontAwesomeIcon icon={icon} style={styles.icon} />
            </div>
          </Tooltip>
        )}

        {!hasTooltip && (
            <div
              style={{
                ...styles.box,
                ...(hoveredBox === id ? styles.boxHovered : {}),
              }}
              onMouseEnter={() => setHoveredBox(id)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <FontAwesomeIcon icon={icon} style={styles.icon} />
            </div>
        )}
      </>
    );

    return href ? (
      <Link
        href={href}
        style={{
          all: "unset",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {box}
      </Link>
    ) : (
      box
    );
  };

  return (
    <div style={styles.fullBar}>
      <div style={styles.topBar}>
        {renderIconBox(faHome, "/", "home", true, "Home", "Go to Home")}
        {renderIconBox(faSearch, null, "search", false, "Home", "Go to Home")}
      </div>
      <div style={styles.bottomBar}>
      {playlists.map((playlist) => (
  <div
    key={playlist.id}
    onClick={() => handlePlaylistChange(playlist)}
  >
    {renderIconBox(
      getFontAwesomeIcon(playlist.icon),
      null,
      playlist.id,
      true, // set this to true if you want tooltips
      playlist.title,
      "Click to play " + playlist.title
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default Sidebar;
