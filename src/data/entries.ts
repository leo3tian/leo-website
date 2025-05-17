interface ModalContent {
  type: "text" | "image"; // Define the types of content
  value: string; // Text or image URL
}

export interface Project {
  type: "project" | "experience";
  title: string;
  date: string;
  tags: string[];
  imageSrc: string;
  content: ModalContent[]; // Array of content blocks
  links: { label: string; url: string }[]; // Array of links
}

export const projects: Project[] = [
  {
    type: "experience",
    title: "Software Developer @Ignite Robotics",
    date: "Spring & Summer 2025",
    tags: ["Software Development", "Machine Learning", "Accessibility"],
    imageSrc: "/projects/wordplay1.png",
    content: [
      {
        type: "text",
        value: `Developed multilingual programming platform to support programming education for non-English speakers, scaling to 500+ users in under 3 months.`,
      },
      {
        type: "text",
        value: `Engineered full-stack web app using TypeScript, SvelteKit, and Firebase to enable real-time code execution.`,
      },
      {
        type: "text",
        value: `Built secure, RESTful APIs with Firebase Authentication and Firestore to efficiently handle user data and session management, improving load times by 30%.`,
      },
      { type: "image", value: "/projects/wordplay1.png" },
      { type: "image", value: "/projects/aruw1.png" },
    ],
    links: [
      { label: "Website", url: "https://wordplay.dev" },
      { label: "GitHub", url: "https://github.com/wordplaydev/wordplay" },
    ],
  },
  {
    type: "project",
    title: "GradEd - CSE 12x Grading Tool Suite",
    date: "Winter 2025",
    tags: ["Software Development", "Machine Learning", "Accessibility"],
    imageSrc: "/projects/wordplay1.png",
    content: [
      {
        type: "text",
        value: `Developed multilingual programming platform to support programming education for non-English speakers, scaling to 500+ users in under 3 months.`,
      },
      {
        type: "text",
        value: `Engineered full-stack web app using TypeScript, SvelteKit, and Firebase to enable real-time code execution.`,
      },
      {
        type: "text",
        value: `Built secure, RESTful APIs with Firebase Authentication and Firestore to efficiently handle user data and session management, improving load times by 30%.`,
      },
      { type: "image", value: "/projects/wordplay1.png" },
      { type: "image", value: "/projects/aruw1.png" },
    ],
    links: [
      { label: "Website", url: "https://wordplay.dev" },
      { label: "GitHub", url: "https://github.com/wordplaydev/wordplay" },
    ],
  },
  {
    type: "experience",
    title: "Lead TA",
    date: "Spring & Summer 2024",
    tags: ["Software Development", "Machine Learning", "Accessibility"],
    imageSrc: "/projects/aruw1.png",
    content: [
      {
        type: "text",
        value: `Developed innovative image tagging interface.`,
      },
      { type: "image", value: "/projects/aruw1.png" },
      { type: "image", value: "/projects/aruw2.png" },
    ],
    links: [
      { label: "Website", url: "https://wordplay.dev" },
      { label: "GitHub", url: "https://github.com/wordplaydev/wordplay" },
    ],
  },
  {
    type: "project",
    title: "Triage - 2024 DubHacks Winner (1st out of 1000+)",
    date: "Spring & Summer 2024",
    tags: ["Software Development", "Machine Learning", "Accessibility"],
    imageSrc: "/projects/aruw1.png",
    content: [
      {
        type: "text",
        value: `Developed innovative image tagging interface.`,
      },
      { type: "image", value: "/projects/aruw1.png" },
      { type: "image", value: "/projects/aruw2.png" },
    ],
    links: [
      { label: "Website", url: "https://wordplay.dev" },
      { label: "GitHub", url: "https://github.com/wordplaydev/wordplay" },
    ],
  },
  {
    type: "experience",
    title: "Software Developer @ARUW",
    date: "Spring & Summer 2024",
    tags: ["Software Development", "Machine Learning", "Accessibility"],
    imageSrc: "/projects/aruw1.png",
    content: [
      {
        type: "text",
        value: `Developed innovative image tagging interface.`,
      },
      { type: "image", value: "/projects/aruw1.png" },
      { type: "image", value: "/projects/aruw2.png" },
    ],
    links: [
      { label: "Website", url: "https://wordplay.dev" },
      { label: "GitHub", url: "https://github.com/wordplaydev/wordplay" },
    ],
  },
  {
    type: "experience",
    title: "Research Assistant @UW Wordplay Lab",
    date: "Spring & Summer 2024",
    tags: ["Software Development", "Machine Learning", "Accessibility"],
    imageSrc: "/wordplay1.png",
    content: [
      {
        type: "text",
        value: `Developed multilingual programming platform to support programming education for non-English speakers, scaling to 500+ users in under 3 months.`,
      },
      {
        type: "text",
        value: `Engineered full-stack web app using TypeScript, SvelteKit, and Firebase to enable real-time code execution.`,
      },
      {
        type: "text",
        value: `Built secure, RESTful APIs with Firebase Authentication and Firestore to efficiently handle user data and session management, improving load times by 30%.`,
      },
      { type: "image", value: "/wordplay1.png" },
    ],
    links: [
      { label: "Website", url: "https://wordplay.dev" },
      { label: "GitHub", url: "https://github.com/wordplaydev/wordplay" },
    ],
  },
];
