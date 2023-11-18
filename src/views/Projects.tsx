import ProjectPageUtilities from "../features/projects/components/ProjectPageUtilities";
import Tabs from "../components/ui/Tabs";
import Project from "../features/projects/components/Project";

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
