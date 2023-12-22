import ProjectPageUtilities from "../features/projects/components/ProjectPageUtilities";
import Tabs from "../components/ui/Tabs";
import Project from "../features/projects/components/Project";
import { projectsState } from "../features/projects/data/projectsApiSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { filterArrayOnInput } from "../utils/filterArrayOnInput";

const Projects: React.FC = () => {
  const projectData = useSelector(projectsState);
  const { projects } = projectData;

  const [activeTab, setActiveTab] = useState<number>(0);

  const [query, setQuery] = useState<string>("");

  //get number of project with a status of in progress
  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress"
  );

  //get number of project with a status of testing
  const testingProjects = projects.filter(
    (project) => project.status === "Testing"
  );

  //get number of project with a status of completed
  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  );

  //filtered all projects array based on search box input
  const filteredSearch = filterArrayOnInput(projects, "name", query);

  //filtered in progress projects array based on search box input
  const filteredInProgressSearch = filterArrayOnInput(
    inProgressProjects,
    "name",
    query
  );

  //filtered testing projects array based on search box input
  const filteredTestingSearch = filterArrayOnInput(
    testingProjects,
    "name",
    query
  );

  //filtered completed projects array based on search box input
  const filteredCompletedSearch = filterArrayOnInput(
    completedProjects,
    "name",
    query
  );

  const projectsTabs = [
    { id: "0", title: "All Projects", length: projects.length },
    { id: "1", title: "In Progress", length: inProgressProjects.length },
    { id: "2", title: "Testing", length: testingProjects.length },
    { id: "3", title: "Completed", length: completedProjects.length },
  ];

  const [projectID, setProjectID] = useState();

  return (
    <section>
      <ProjectPageUtilities query={query} setQuery={setQuery} />
      <Tabs
        tabsData={projectsTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="grid grid-cols-r41fr gap-x-4 gap-y-8 m:flex m:flex-col m:gap-4">
        {activeTab === 0 && (
          <Project
            initialProjects={projects}
            filteredProjects={filteredSearch}
            projectID={projectID}
            setProjectID={setProjectID}
          />
        )}
      </section>
      <section className="grid grid-cols-r41fr gap-x-4 gap-y-8 m:flex m:flex-col m:gap-4">
        {activeTab === 1 && (
          <Project
            initialProjects={projects}
            filteredProjects={filteredInProgressSearch}
            projectID={projectID}
            setProjectID={setProjectID}
          />
        )}
      </section>
      <section className="grid grid-cols-r41fr gap-x-4 gap-y-8 m:flex m:flex-col m:gap-4">
        {activeTab === 2 && (
          <Project
            initialProjects={projects}
            filteredProjects={filteredTestingSearch}
            projectID={projectID}
            setProjectID={setProjectID}
          />
        )}
      </section>
      <section className="grid grid-cols-r41fr gap-x-4 gap-y-8 m:flex m:flex-col m:gap-4">
        {activeTab === 3 && (
          <Project
            initialProjects={projects}
            filteredProjects={filteredCompletedSearch}
            projectID={projectID}
            setProjectID={setProjectID}
          />
        )}
      </section>
    </section>
  );
};

export default Projects;
