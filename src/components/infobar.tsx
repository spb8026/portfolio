import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { CSSProperties } from 'react';
import { Playlist, Song } from '../models'; // Adjust the import path according to your project structure

interface InfoBarProps {
    curSong: Song;
    curPlaylist: Playlist;
}

export default function Infobar({ curSong, curPlaylist }: InfoBarProps) {
    const techStack = curSong.techStack;
    const credits = curSong.credits;

    const styles: { [key: string]: CSSProperties } = {
        containertemp: {
            width: "20vw",
            height: "100vh",
            backgroundColor: '#0C0C0C',
        },
        container: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        topbarContainer: {
            width: "100%",
            height: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        imageWrapper: {
            width: "90%",
            paddingBottom: "90%",
            position: "relative",
            margin: "0 auto",
            borderRadius: "5%",
        },
        image: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
        },
        bottombarContainer: {
            width: "100%",
            minHeight: "30%", // Ensure minimum height
            height: "auto", // Allow height to grow with content
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        techStackContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            overflowX: "auto",
        },
        aboutContainer: {
            width: "90%",
            backgroundColor: "#342A21",
            borderRadius: "10px",
            padding: "2%",
            marginTop: "10px",
        },
    };

    return (
        <div style={styles.containertemp}>
            <div style={styles.container}>
                <div style={styles.topbarContainer}>
                    <h3>{curPlaylist.title}</h3>
                    <FontAwesomeIcon icon={faCircleXmark} style={{ paddingRight: "10px" }} />
                </div>

                <div style={styles.imageWrapper}>
                    <Image src={curSong.image} alt={curSong.title} layout="fill" style={styles.image} />
                </div>

                <div style={styles.bottombarContainer}>
                    <h4 style={{ margin: "0", fontSize: "1.25em", fontWeight: "bold" }}>{curSong.title}</h4>
                    <h5 style={{ margin: "0", fontSize: "1em" }}>{curSong.description}</h5>
                </div>

                <div style={styles.aboutContainer}>
                    <h4 style={{ margin: "5px" }}>About the Project</h4>
                    <div style={styles.techStackContainer}>
                        {techStack.map((tech, index) => (
                            <div key={index}>
                                <Image src={tech.image} alt={`${tech.name}-Image`} width={50} height={50} />
                                <p style={{ margin: "0" }}>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                    <p>{curSong.description}</p>
                </div>

                {(credits && credits.length > 0) && (
                    <div>
                        <h4>Credits</h4>
                        {credits.map((credit, index) => (
                            <p key={index}>{credit}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
