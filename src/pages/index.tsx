

import Sidebar from "@/components/sidebar"
import Playbar from "@/components/playbar"
import MainContent from "@/components/maincontent";

export default function Home() {

  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <Playbar ></Playbar>
      <MainContent></MainContent>
      </div>

  );
}
