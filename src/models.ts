interface Playlist {
    id: string;
    title: string;
    description: string;
    icon: string;
    songs: Song[];
  }
  
  interface Song {
    indexx: number;
    title: string;
    description: string;
    links: string[];
    credits: string[];
    techStack: tech[]
    image: string;
  }

  interface tech{
    name: string;
    image: string;
  }
  
  interface Data {
    playlists: Playlist[];
  }

