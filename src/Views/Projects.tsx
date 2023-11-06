import ProjectPageUtilities from "../Components/ProjectPageUtilities";
import ProjectsPageTabs from "../Components/ProjectsPageTabs";
import Project from "../Components/Project";

const Projects = () => {
  return (
    <section>
      <ProjectPageUtilities />
      <ProjectsPageTabs />
      <Project />
    </section>
  );
};

export default Projects;
