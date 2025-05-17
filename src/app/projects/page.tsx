import { projects } from "../../data/entries";
import Card from "@/components/card";

export default function Projects() {
  return (
    <div className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <div className="my-8">
        <div className="text-2xl font-bold my-4">Projects & Roles</div>
        <hr className="border-skin-line my-4" />
        {projects.map((project, i) => (
          <Card
            key={i}
            type={project.type}
            title={project.title}
            date={project.date}
            tags={project.tags}
            imageSrc={project.imageSrc}
            content={project.content} // Pass content directly
          />
        ))}
      </div>
    </div>
  );
}
