import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import data from "../data/data.json";
import Song from "@/components/song";
import Layout from "@/components/Layout";


export default function AboutMe() {

    const currentPlaylist = data.playlists[0];
    const styles = {
        headerContainer: {
          width: "100%",
          height: '40%',
          position: "relative", 
          backgroundImage: "url('/temphead.jpg')",
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        },
        headerTextBox: {
          position: "absolute", 
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
          background: "linear-gradient(10deg, #0C0C0C, #0C0C0C, #C22222)", 
        },
        infosubContainer: {
          width: "33.33%",
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
                        <h2>In the Works</h2>
                        {currentPlaylist.songs.map((song, index) => (
                            <Song key={index} song={song} />
                        ))}
                    </div>

                    <div style={styles.infosubContainer}>
                        <h2>About Me</h2>
                        <p>
                        Driven by an unwavering passion for technology, I am enthusiastically pursuing a degree in Computer Science. My goal is to refine and enhance my skills in a practical setting as I transition from academia to the professional world. I am actively seeking internship opportunities for Summer 2024 and am flexible for positions in either Fall 2024 or Spring 2025. Alongside my academic endeavors, I am also available for freelance projects in Web Development and Web Design. This side passion of mine not only complements my formal education but also allows me to apply and expand my technical expertise in creating visually appealing and functionally robust websites. Whether it's through an internship or freelance work, I am eager to contribute my growing skill set in a dynamic, real-world environment
                        </p>
                    </div>

                    <div style={styles.infosubContainer}>
                        <h2>Education</h2>
                        <p>BS in Computer Science</p>
                        <p>GPA: 3.62</p>
                        <p>Graduation: May 2027</p>
                        <Image src="/rit.png" width={50} height={50} />

                    </div>
                </div>
            </div>
        </Layout>
    );
}
