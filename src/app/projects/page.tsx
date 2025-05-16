import Entry from "@/components/entry";
import Link from "@/components/link";

export default function Projects() {
  return (
    <div className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <div className="my-8">
        <div className="text-2xl font-bold my-4">Projects & Roles</div>
        <hr className="border-skin-line my-4"></hr>
        <Entry 
          title="Research Assistant @University of Washington iSchool"
          date="Spring 2024"
          tags={["Software Development", "Human-Computer Interaction", "Accessibility"]}
          imageSrc="/wordplay1.png"
        >
          <div>
            Developed multilingual programming platform to support programming education for non-English speakers, scaling
          to 500+ users in under 3 months. Engineered full-stack web app using TypeScript, SvelteKit, and Firebase to enable real-time code execution. Built secure, RESTful APIs with Firebase Authentication and Firestore to efficiently handle user data and session
          management, improving load times by 30%
          </div>
          <div className="flex flex-wrap gap-1">
            <Link to="https://wordplay.dev">
              Website
            </Link>
            |
            <Link to="https://github.com/wordplaydev/wordplay">
              GitHub
            </Link>
          </div>
        </Entry>

        <Entry 
          title="Software Developer @Advanced Robotics UW"
          date="Spring & Summer 2024"
          tags={["Software Development", "Machine Learning", "Human-Computer Interaction"]}
          imageSrc="/aruw1.png"
        >
          <div>
            Developed multilingual programming platform to support programming education for non-English speakers, scaling
          to 500+ users in under 3 months. Engineered full-stack web app using TypeScript, SvelteKit, and Firebase to enable real-time code execution. Built secure, RESTful APIs with Firebase Authentication and Firestore to efficiently handle user data and session
          management, improving load times by 30%
          </div>
          <div className="flex flex-wrap gap-1">
            <Link to="https://aruw.org">
              Website
            </Link>
          </div>
        </Entry>

        <Entry 
          title="Software Developer @Sensoria Health"
          date="Academic Year 2022-2023"
          tags={["Software Development", "CI/CD", "Frontend Development"]}
        >
          <div>
          Built web interface to monitor health data from sensor-based socks and knee braces, used by 1000+ users
• Implemented CI/CD pipelines integrated with Azure DevOps, reducing deployment time by over 50%
• Redesigned smoke tests for 10+ web apps with Microsoft Playwright, future-proofing testing infrastructure
          </div>
          <div className="flex flex-wrap gap-1">
            <Link to="https://www.sensoriahealth.com/">
              Website
            </Link>
          </div>
        </Entry>
      </div>
    </div>
  );
}