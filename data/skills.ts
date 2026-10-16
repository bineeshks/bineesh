import { Clapperboard, Camera, Sun, Scissors, Layers, Megaphone, Sparkles, Code, LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Filmmaking",
    icon: Clapperboard,
    skills: [
      "Scriptwriting",
      "Storyboarding",
      "Direction",
      "Cinematography (DOP)",
      "Shot Composition",
    ],
  },
  {
    title: "Camera Department",
    icon: Camera,
    skills: [
      "Assistant DOP",
      "Camera Setup",
      "Lens Changes",
      "On-Set Workflow",
      "Gear Handling",
    ],
  },
  {
    title: "Cameras & Lenses",
    icon: Camera,
    skills: [
      "Sony FX3 (on set)",
      "Sony a7 IV (own)",
      "G Master Lenses (on set)",
      "50mm f/1.8 (own)",
    ],
  },
  {
    title: "Lighting",
    icon: Sun,
    skills: [
      "Key / Fill / Backlight",
      "Softboxes",
      "Reflectors",
      "Natural Light Shaping",
    ],
  },
  {
    title: "Video Editing",
    icon: Scissors,
    skills: [
      "Short Films",
      "Reels & Ads",
      "Pacing & Storytelling",
      "Color Grading",
      "Sound Design & Voiceover",
    ],
  },
  {
    title: "Software",
    icon: Layers,
    skills: [
      "After Effects",
      "Premiere Pro",
      "CapCut",
      "Higgsfield",
      "AI Tools",
      "Canva",
      "Photoshop",
    ],
  },
  {
    title: "Marketing",
    icon: Megaphone,
    skills: [
      "Instagram Strategy",
      "Meta Ads Basics",
      "Content Calendars",
      "Campaigns",
    ],
  },
  {
    title: "Other",
    icon: Sparkles,
    skills: [
      "Graphic Design",
      "Web Development",
      "AI Visual Content",
      "SEO Basics",
    ],
  },
];
