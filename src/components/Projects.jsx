import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div>
      <ProjectCard
        title="Project 1"
        descripton="Description for Project 1"
        technologies="Project 1 tech"
      />
      <ProjectCard
        title="Project 2"
        descripton="Description for Project 2"
        technologies="Project 2 tech"
      />
      <ProjectCard
        title="Project 3"
        descripton="Description for Project 3"
        technologies="Project 3 tech"
      />
    </div>
  );
}

export default Projects;
