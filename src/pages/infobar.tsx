import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';

export default function Infobar() {

    const techStack = [
        { name: "React", image: '/next.svg' },
        { name: "NextJS", image: '/next.svg' }
    ];

    const showCredits = true;

    const credits = [
        "Front End developed by Real Name",
        "Backend developed by Real Name",
        "Database developed by Real Name",
    ]


    const styles = {
        containertemp: {
            width: "30vw",
            height: "100vh",
            scrollbars: "hidden",
        },
        container: {
            width: "100%",
            height: "100%",
            backgroundColor: "grey",
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
            height: "5%",
        },
        techStackContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            scrollbars: "none",
        },
        aboutContainer : {
            width: "90%",
            height: "30%",
            backgroundColor: "white",
            borderRadius: "10px",
        }
    };

    return (
        <div style={styles.containertemp}>
            <div style={styles.container}>
                <div style={styles.topbarContainer}>
                    <p>Everything</p>
                    <FontAwesomeIcon icon={faCircleXmark} style={{ paddingRight: "10px" }} />
                </div>

                <div style={styles.imageWrapper}>
                    <Image src='/next.svg' alt="Music-Image" layout="fill" style={styles.image} />
                </div>

                <div style={styles.bottombarContainer}>
                    <p style={{ margin: "0", fontSize: "1.25em", fontWeight: "bold" }}>Music</p>
                    <p style={{ margin: "0", fontSize: "1em" }}>Description</p>
                </div>

                <div style={styles.aboutContainer}>
                    <p>About the Project</p>
                    <div style={styles.techStackContainer}>
                        {techStack.map((tech, index) => (
                            <div key={index}>
                                <Image src={tech.image} alt={`${tech.name}-Image`} width={50} height={50} />
                                <p style={{ margin: "0" }}>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                    <p>DESCRUIOSNAas fhasbfysabfujia ahj fhasbfhansjfnsjifhnabs</p>
                </div>

                {showCredits && (
                    <div>
                        <p>Credits</p>
                        {credits.map((credit, index) => (
                            <p key={index}>{credit}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
