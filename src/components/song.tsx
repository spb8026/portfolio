import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import data from "../data/data.json";
import Image from 'next/image'; // Ensure this is correctly imported based on your setup
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Define the Song type based on your JSON data structure

export default function Song({ song }: { song: SongType }) {
    // Assign a default song from data
    const defaultSong = data.playlists[0].songs[0];

    // Use the passed song prop or the default song
    const currentSong = song || defaultSong;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: isHovered ? "#C0C5C1" : "transparent",
                color: isHovered ? "white" : "inherit",
                transition: "background-color 0.3s, color 0.3s"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <FontAwesomeIcon icon={faPlay} style={{ width: "5%", margin: 0, cursor: "pointer" }} />
            ) : (
                <h4 style={{ width: "5%", margin: 0 }}>{currentSong.indexx + 1}</h4>
            )}
            <div style={{ width: "50px", height: "50px", position: "relative", marginRight: "10px" }}>
                <Image src={currentSong.image} layout="fill" objectFit="contain" alt={currentSong.title} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>{currentSong.title}</p>
                <p style={{ margin: 0 }}>{currentSong.description}</p>
            </div>
            <p style={{ width: "15%", textAlign: "right", margin: 0 }}>68,123,124</p>
            <p style={{ width: "5%", textAlign: "right", margin: 0, marginRight: '5px' }}>1:20</p>
        </div>
    );
}
