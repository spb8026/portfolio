import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { CSSProperties, Key } from 'react';

interface InfoBarProps {
    curSong: Song;
    curPlaylist: Playlist;
}

export default function Infobar({ curSong, curPlaylist }: InfoBarProps) {
    const techStack = curSong.techStack;
    const links = curSong.links;
    const credits = curSong.credits;

    const styles: { [key: string]: CSSProperties } = {
        containertemp: {
            width: "20rem",
            height: "100vh",
            backgroundColor: 'var(--sect-bg)',
            overflowY: "auto",
            overflowX: "hidden",
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            borderLeft: "1vw solid var(--bg)",
        },
        container: {
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom : "20%"
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
            backgroundColor: "var(--container-bg)",
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
            minHeight: "30%", 
            height: "auto", 
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
            width: "100%",
        },
        linksContainer: {
            width: "90%",
            backgroundColor: "var(--continaer-bg:)",
            borderRadius: "10px",
            padding: "2%",
            marginTop: "10px",
        },
        aboutContainer: {
            width: "90%",
            backgroundColor: "var(--container-bg)",
            borderRadius: "10px",
            padding: "2%",
            marginTop: "10px",
        },
    };

    const descriptionLines = curSong.description.split('\n');

    return (
        <div style={styles.containertemp}>
            <div style={styles.container}>
                <div style={styles.topbarContainer}>
                    <h3>{curPlaylist.title}</h3>
                    <FontAwesomeIcon icon={faCircleXmark} style={{ paddingRight: "10px" }} />
                </div>

                <div style={styles.imageWrapper}>
                    <Image src={"/portfolio" + curSong.image} alt={curSong.title} layout="fill" style={styles.image} />
                </div>

                <div style={styles.bottombarContainer}>
                    <h4 style={{ margin: "0", fontSize: "1.25em", fontWeight: "bold" }}>{curSong.title}</h4>
                    <div >
                        {descriptionLines.map((line: string, index: Key | null | undefined) => (
                            <p key={index} style={{ margin: 0 }}>{line}</p>
                        ))}
                    </div>
                </div>

                 { (techStack.length !== 0) && <div style={styles.aboutContainer}>
                    <h4 style={{ margin: "5px" }}>Tech Stack</h4>
                    <div style={styles.techStackContainer}>
                        {techStack.map((tech, index: Key | null | undefined) => (
                            <div key={index}>
                                <Image src={"/portfolio" + tech.image} alt={`${tech.name}-Image`} width={50} height={50} />
                                <p style={{ margin: "0" }}>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div> }

                { (links.length !== 0) &&  <div style={styles.linksContainer}>
                    <h4 style={{ margin: "5px" }}>Links</h4>
                    {links.map((link: string, index: Key | null | undefined) => (
                        <div key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <p style={{ margin: "0", width: "100%", overflowWrap: 'break-word' }}>{link}</p>
                            </a>
                        </div>
                    ))}
                </div>
                }

                {(credits && credits.length > 0) && (
                    <div>
                        <h4>Credits</h4>
                        {credits.map((credit: string, index: Key | null | undefined) => (
                            <p key={index}>{credit}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
