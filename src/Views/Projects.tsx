import ProjectPageUtilities from "../Components/ProjectPageUtilities";
import Tabs from "../Components/Tabs";
import Project from "../Components/Project";

const Projects = () => {
  const projectsTabs: string[] = [
    "All Projects",
    "Pending",
    "In Prgress",
    "Testing",
    "Completed",
  ];
  return (
    <section>
      <ProjectPageUtilities />
      <Tabs tabsText={projectsTabs} />
      <Project />
    </section>
  );
};

export default Projects;
