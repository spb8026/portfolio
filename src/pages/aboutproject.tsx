import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import data from "../data/data.json";
import Song from "@/components/song";
import Layout from "@/components/Layout";


export default function AboutProject() {

    const currentPlaylist = data.playlists[0];
    const styles = {
        headerContainer: {
          width: "100%",
          height: '40%',
          position: "relative", // Ensure the text box is positioned relative to this container
          backgroundImage: "url('/temphead.jpg')",
          backgroundSize: 'cover', // Ensure the background image covers the container
          backgroundPosition: 'center', // Center the background image
        },
        headerTextBox: {
          position: "absolute", // Position the text box absolutely within the header container
          bottom: "0px",
          left: "20px",
        },
        infoContainer: {
          width: "100%",
          height: "60%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
          background: "linear-gradient(10deg, #0C0C0C, #0C0C0C, #C22222)", // Correct gradient syntax
        },
        infosubContainer: {
          width: "30%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: '20px',
        },
      };


    return (
        <Layout data={data}>
            <div style={{ width: "100%", height: "100%" }}>
                <div style={styles.headerContainer}>
                    <div style={styles.headerTextBox}>
                        <div style={{ display: "flex",flexDirection: "row", alignItems: "center", gap: "10px" }}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <p>Verified Developer</p>
                        </div>
                        <h1>Shawn Broderick</h1>
                        <p>
                            112 Git Commits
                        </p>
                    </div>
                </div>
                <div style={styles.infoContainer}>

                <div style={styles.infosubContainer}>
                        <h2>Technology</h2>
                        
                    </div>

                    <div style={styles.infosubContainer}>
                        <h2>About The Project</h2>
                        <p>
                    
                        </p>
                    </div>

                    <div style={styles.infosubContainer}>
                        <h2>Definitions</h2>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
