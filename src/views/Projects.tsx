import ProjectPageUtilities from "../features/projects/components/ProjectPageUtilities";
import Tabs from "../components/ui/Tabs";
import Project from "../features/projects/components/Project";
import { useGetProjectsQuery } from "../features/projects/data/projectsApiSlice";

const Projects: React.FC = () => {
  const { data: projects, isSuccess } = useGetProjectsQuery({});
  const projectsTabs = [
    { id: "1", title: "All Projects", length: isSuccess && projects.length },
    { id: "2", title: "Pending", length: isSuccess && projects.length },
    { id: "3", title: "In Progress", length: isSuccess && projects.length },
    { id: "4", title: "Testing", length: isSuccess && projects.length },
    { id: "5", title: "Completed", length: isSuccess && projects.length },
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
