import ProjectPageUtilities from "../features/projects/components/ProjectPageUtilities";
import Tabs from "../components/ui/Tabs";
import Project from "../features/projects/components/Project";
import { projectsState } from "../features/projects/data/projectsApiSlice";
import { useSelector } from "react-redux";

const Projects: React.FC = () => {
  const projectData = useSelector(projectsState);
  const { projects } = projectData;

  const projectsTabs = [
    { id: "1", title: "All Projects", length: projects.length },
    { id: "2", title: "Pending", length: projects.length },
    { id: "3", title: "In Progress", length: projects.length },
    { id: "4", title: "Testing", length: projects.length },
    { id: "5", title: "Completed", length: projects.length },
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
