export interface Project {
  id: string;
  category: "Short Films" | "Commercials";
  title: string;
  subtitle: string;
  headerTag: string;
  roles: string;
  status: string;
  description: string;
  brief: string;
  whatIDid: string[];
  resultSummary: string;
  stats: { label: string; value: string }[];
  tools: string[];
  tags: string[];
  result: string;
  accentColor?: string;
  watchUrl?: string;
  btsUrl?: string;
}

export const projects: Project[] = [
  // 1. Kaval Short Film
  {
    id: "kaval",
    category: "Short Films",
    headerTag: "Original Narrative Short Film",
    title: "Kaval",
    subtitle: "Short Film",
    roles: "Writer · Storyboard · Director · DOP · Editor",
    status: "Released",
    description: "A complete one-person production. I wrote the script, planned every shot, directed, shot, and edited the film myself.",
    brief: "A complete one-person production. I wrote the script, planned every shot, directed, shot, and edited the film myself.",
    whatIDid: [
      "Wrote the screenplay and storyboarded every scene & camera movement.",
      "Directed and operated the camera as Cinematographer (DOP).",
      "Handled post-production including video editing, sound design, and color grading."
    ],
    resultSummary: "Produced an independent cinematic short film showcasing complete end-to-end creative direction and filmmaking.",
    stats: [
      { label: "Production", value: "Solo Crew" },
      { label: "Workflow", value: "Script to Edit" },
      { label: "Format", value: "Cinematic Reel" },
      { label: "Platform", value: "Instagram" }
    ],
    tools: ["Sony FX3 / a7 IV", "G Master Lenses", "DaVinci Resolve", "Color Grading"],
    tags: ["Direction", "Cinematography", "Screenwriting", "Video Editing", "Color Grading"],
    result: "Featured Film",
    accentColor: "#8B5CF6",
    watchUrl: "https://www.instagram.com/reel/DeEKSY5Jrri/",
    btsUrl: "https://www.instagram.com/reel/DeEyOQtTrVf/"
  },

  // 2. Pathivazhiyil Short Film (Right after Kaval)
  {
    id: "pathivazhiyil",
    category: "Short Films",
    headerTag: "Original Narrative Short Film",
    title: "Pathivazhiyil",
    subtitle: "Short Film",
    roles: "Writer · Storyboard · Director · DOP · Editor",
    status: "Unreleased · Available on request",
    description: "An independent second short film written, directed, shot, and edited independently. Currently unreleased and available for private screening upon request.",
    brief: "Second narrative short film project written, directed, shot, and edited independently.",
    whatIDid: [
      "Wrote the original narrative screenplay and planned key visual sequences.",
      "Directed actors and executed cinematography as DOP.",
      "Edited and assembled the cut independently."
    ],
    resultSummary: "Completed independent short film, available for private review upon request.",
    stats: [
      { label: "Production", value: "Independent" },
      { label: "Workflow", value: "Script to Edit" },
      { label: "Format", value: "Short Film" },
      { label: "Status", value: "Unreleased" }
    ],
    tools: ["Sony a7 IV / FX3", "Cinema Lenses", "DaVinci Resolve", "Premiere Pro"],
    tags: ["Direction", "Cinematography", "Screenwriting", "Video Editing", "Independent Cinema"],
    result: "Available on Request",
    accentColor: "#06B6D4"
  },

  // 3. Toothsuite Brand Ad Film
  {
    id: "toothsuite",
    category: "Commercials",
    headerTag: "Commercial Brand Ad Film",
    title: "Toothsuite: An Aligner Connection",
    subtitle: "Brand Ad Film · Dental / Clear Aligners",
    roles: "Assistant DOP · Camera Department · Lighting",
    status: "Released · Brand Ad",
    description: "Worked on a brand ad shoot for Toothsuite, handling the Sony FX3 with G Master lenses and supporting the DOP with camera setup, lens changes, focus, monitoring, gear management, and lighting setups.",
    brief: "Worked on a brand ad shoot for Toothsuite, handling the Sony FX3 with G Master lenses and supporting the DOP with camera setup, lens changes, focus, monitoring, gear management, and lighting setups.",
    whatIDid: [
      "Assisted the DOP on set with the Sony FX3 and G Master prime/zoom lenses.",
      "Managed lens changes, camera rigging, wireless monitoring, and focus support.",
      "Set up cinematic key, fill, and backlight modifiers tailored for commercial aesthetics."
    ],
    resultSummary: "Successfully executed on-set camera department operations for a high-end commercial ad rollout with RootMedia.",
    stats: [
      { label: "Camera", value: "Sony FX3" },
      { label: "Glass", value: "G Master Lenses" },
      { label: "Role", value: "Assistant DOP" },
      { label: "Production", value: "RootMedia" }
    ],
    tools: ["Sony FX3", "G Master Lenses", "Lighting Setups", "Wireless Monitors"],
    tags: ["Sony FX3", "G Master Lenses", "Lighting Setup", "Camera Department", "Commercial Shoot"],
    result: "Commercial Ad",
    accentColor: "#06B6D4",
    watchUrl: "https://www.instagram.com/reel/DeJpWRgTK1Z/",
    btsUrl: "https://www.instagram.com/reel/DeJ94Onoa-Y/"
  },

];
