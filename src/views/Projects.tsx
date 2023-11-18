import ProjectPageUtilities from "../components/ProjectPageUtilities";
import Tabs from "../components/ui/Tabs";
import Project from "../components/card/Project";

const Projects: React.FC = () => {
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
      <Tabs tabsData={projectsTabs} />
      <Project />
    </section>
  );
};

export default Projects;
