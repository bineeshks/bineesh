export interface ShortFilm {
  id: string;
  title: string;
  story: string;
  role: string;
  thumbnail: string;
  videoUrl?: string; // local preview video or embed
  externalLink?: string; // YouTube/Instagram/Drive link
  duration?: string;
  year?: string;
}

export const shortFilms: ShortFilm[] = [
  {
    id: "film-1",
    title: "Shadows of Wayanad (Nizhal)",
    story: "An atmospheric visual journey capturing solitude, morning mist, and the quiet rhythm of the Western Ghats.",
    role: "Director · Cinematographer · Editor",
    thumbnail: "/projects/project1.png",
    videoUrl: "/videos/IMG_7307.MP4",
    externalLink: "https://www.youtube.com", // Replace with your YouTube/Drive/Instagram link
    duration: "3:45",
    year: "2024",
  },
  {
    id: "film-2",
    title: "Echoes of the River (The Flow)",
    story: "A character-driven visual piece exploring unspoken human connection through intimate framing and organic soundscapes.",
    role: "Director · Cinematographer · Editor",
    thumbnail: "/projects/project2.png",
    videoUrl: "/videos/IMG_7304.MP4",
    externalLink: "https://www.youtube.com", // Replace with your YouTube/Drive/Instagram link
    duration: "4:20",
    year: "2024",
  },
];
