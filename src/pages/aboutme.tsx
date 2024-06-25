import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {

    const styles = {

        headerContainer: {
            width: "100%",
            height: '40%',
            position: "relative", // Ensure the text box is positioned relative to this container
            backgroundImage: "url('/temphead.jpg')",
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
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
        },
    }


    return (
        <>
            <div style={{ width: "100vw", height: "100vh" }}>
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
                    <div>
                        <h2>About Me</h2>
                        <p>
                        Driven by an unwavering passion for technology, I am enthusiastically pursuing a degree in Computer Science. My goal is to refine and enhance my skills in a practical setting as I transition from academia to the professional world. I am actively seeking internship opportunities for Summer 2024 and am flexible for positions in either Fall 2024 or Spring 2025. Alongside my academic endeavors, I am also available for freelance projects in Web Development and Web Design. This side passion of mine not only complements my formal education but also allows me to apply and expand my technical expertise in creating visually appealing and functionally robust websites. Whether it's through an internship or freelance work, I am eager to contribute my growing skill set in a dynamic, real-world environment
                        </p>
                    </div>

                    <div>
                        <h2>Education</h2>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
