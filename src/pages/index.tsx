import Sidebar from "@/components/sidebar";
import Playbar from "@/components/playbar";
import MainContent from "@/components/maincontent";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div style={styles.mainContainer}>
        <MainContent />
      </div>
      <div style={styles.playbarContainer}>
        <Playbar />
      </div>
    </div>
  );
}

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
  },
  playbarContainer: {
    flex: "0 0 6vh",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};
