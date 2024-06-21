import Sidebar from "@/components/sidebar";
import Playbar from "@/components/playbar";
import MainContent from "@/components/maincontent";
import Infobar from "@/components/infobar";
import { useState } from "react";

export default function Home() {
    const [showInfobar, setShowInfobar] = useState(false);

    const handlePlayButtonClick = () => {
        setShowInfobar(!showInfobar);
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            height: "100vh",
        },
        sidebarContainer: {
            flex: "0 0 6vw",
        },
        mainContainer: {
            flex: "1",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            position: "relative",
        },
        playbarContainer: {
            flex: "0 0 6vh",
            position: "absolute",
            bottom: 0,
            width: "100%",
        },
        playButton: {
            position: "absolute",
            bottom: "10vh",
            right: "10vw",
            zIndex: 1001,
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebarContainer}>
                <Sidebar />
            </div>
            <div style={styles.mainContainer}>
                <MainContent />
                <button style={styles.playButton} onClick={handlePlayButtonClick}>Play</button>
            </div>
            <div style={styles.playbarContainer}>
                <Playbar />
            </div>
            {showInfobar && <Infobar />}
        </div>
    );
}