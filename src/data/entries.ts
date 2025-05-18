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
    title: "Software Engineering Intern @Ignite Robotics",
    date: "Spring & Summer 2025",
    tags: ["Software Development"],
    imageSrc: "/projects/ignite-robotics1.png",
    content: [
      {
        type: "text",
        value: `I'm developing a full-stack web portal for Ignite Robotics, a nonprofit that supports middle 
                and high school robotics teams by providing team placement, workspace access, and part ordering. 
                Previously, the organization relied heavily on spreadsheets and manual processes to handle 
                student signups, waivers, payments, and team assignments. My work replaces this with a centralized, 
                secure system designed for students, parents, and administrators.`,
      },
      { type: "image", value: "/projects/ignite-robotics1.png" },
      {
        type: "text",
        value: `I’m part of a five-person development team, each focused on different components of the platform. 
                My primary responsibility is the Stripe integration, enabling the portal to process over $500,000 
                in annual transactions. I built the frontend in React.js, using Axios to connect to a shared REST 
                API. I also led development of the payment backend, which authenticates users, retrieves assigned 
                fees from a SQL database, processes payments through Stripe, and updates records. We worked closely 
                to maintain consistent API design and frontend architecture across the project.`,
      },
      {
        type: "text",
        value: `The internship strengthened my ability to build secure, user-focused systems from scratch—spanning 
                database design, API development, and frontend implementation—while solving real operational 
                challenges for a community-based organization. Thank you to the team at Ignite Robotics for the opportunity!`,
      },
      
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
    tags: ["Software Development", "Developer Tools", "Accessibility"],
    imageSrc: "/projects/graded_gif.gif",
    content: [
      {
        type: "text",
        value: `Graded is a Chrome extension I designed and built to reduce the repetitive, 
                manual work TAs face when grading student code. I began by identifying pain 
                points in the existing workflow—copy-pasting comments, repetitive feedback, 
                and lack of UI support for common grading tasks. Overwhelmingly, I found that 
                the process of copying and pasting comments was the most tedious and time-consuming 
                part of grading.`,
      },
      {
        type: "image",
        value: "/projects/graded_gif.gif",
      },
      {
        type: "text",
        value: `I built an early prototype and demoed it to over 100 TAs in the Allen School, 
                gathering feedback that directly shaped the product roadmap. Based on user 
                needs, I implemented a system for importing and exporting custom annotation 
                libraries, allowing TAs to quickly insert and reuse feedback. This enabled 
                cross-course sharing and customization while maintaining consistency.`,
      },
      {
        type: "image",
        value: "/projects/graded1.jpeg",
      },
      
      {
        type: "text",
        value: `Technically, Graded is built with React.js and TypeScript, using a custom Webpack 
                configuration to bundle the extension for Chrome. Every part of the system—from 
                extension architecture to API compatibility—was developed from scratch and 
                continuously refined through user feedback.`,
      },
      {
        type: "text",
        value: `Graded is now used by 100+ TAs, saving an estimated $250,000+ annually in labor 
                by reducing grading time by ~3 hours/week per TA. It’s been endorsed by professors 
                and has become a staple in the school's grading process.`,
      },
      {
        type: "text",
        value: `From there, I expanded Graded into a full suite of tools, including smart comment menus 
                with one-click deductions, code linters for automatic issue detection, annotation group 
                management and versioning, and a UI that integrates cleanly into the grading platform`,
      },
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
