import moreoptionsIcon2 from "../../../assets/icons/moreoptionsIcon2";
import trashIcon from "../../../assets/icons/trashIcon";
import avatar1 from "../../../assets/images/avatar (1).webp";
import avatar2 from "../../../assets/images/avatar (2).webp";
import avatar3 from "../../../assets/images/avatar (3).webp";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setProjects } from "../data/projectsApiSlice";

type ProjectType = {
  initialProjects: any[];
  filteredProjects: any[];
  projectID: any;
  setProjectID: React.Dispatch<React.SetStateAction<undefined>>;
};

const Project: React.FC<ProjectType> = ({
  initialProjects,
  filteredProjects,
  projectID,
  setProjectID,
}) => {
  const [showDeleteProject, setShowDeleteProject] = useState<boolean>(false);

  const dispatch = useDispatch();

  const toggleDeleteProject = (id: any) => {
    if (projectID === id) {
      // If the clicked project is the same as the stored projectID, toggle the showDeleteProject state
      setShowDeleteProject((prev) => !prev);
    } else {
      // If a different project is clicked, update the projectID and show options
      setProjectID(id);
      setShowDeleteProject(true);
    }
  };

  const deleteProject = (id: any) => {
    dispatch(
      setProjects(initialProjects.filter((project) => project.id !== id))
    );
  };

  return (
    <>
      {filteredProjects.map((project: any) => (
        <div
          id={project.id}
          key={project.id}
          className="w-full flex flex-col gap-4 h-fit bg-white rounded-lg p-0.7 relative"
        >
          <div className="flex items-center justify-between">
            <p
              className="p-1.5 rounded-px10 font-poppins font-medium text-xs bg-primarycolour text-white"
              style={{
                backgroundColor: project.bgcolourcode,
                color: project.txtcolourcode,
              }}
            >
              {project.category}
            </p>
            <button
              className="text-base cursor-pointer"
              onClick={() => toggleDeleteProject(project.id)}
            >
              {moreoptionsIcon2}
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium text-base overflow-hidden">
              {project.name.length > 15
                ? project.name.slice(0, 18) + "..."
                : project.name}
            </p>
            <p className="text-customgrey text-xs h-9">{project.description}</p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2 pb-2.5 border-b-px1 border-b-solid border-b-grey12">
            <div className="w-full bg-grey7 py-0.7 px-0.6 text-grey10 rounded-px10 text-xs font-medium">
              {project.startdate}
            </div>
            <div className="w-full bg-grey7 py-0.7 px-0.6 text-grey10 rounded-px10 text-xs font-medium">
              {project.enddate}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex pl-2 cursor-pointer w-fit">
              <img
                className="w-px26 h-px26 bg-lightgrey rounded-br50 border-px1 border-solid border-primarycolour ml-m10 transition-transform delay-300 ease-in relative"
                src={avatar1}
                alt=""
              />
              <img
                className="w-px26 h-px26 bg-lightgrey rounded-br50 border-px1 border-solid border-primarycolour ml-m10 transition-transform delay-300 ease-in relative"
                src={avatar2}
                alt=""
              />
              <img
                className="w-px26 h-px26 bg-lightgrey rounded-br50 border-px1 border-solid border-primarycolour ml-m10 transition-transform delay-300 ease-in relative"
                src={avatar3}
                alt=""
              />
              <p className="flex items-center justify-center w-px26 h-px26 bg-lightgrey text-white rounded-br50 text-xs font-normal ml-px3">
                +2
              </p>
            </div>

            <p
              className="text-sm py-0.3 px-0.4 rounded-lg bg-lightorange"
              style={{
                backgroundColor:
                  project.status === "In Progress"
                    ? "#E5D283"
                    : project.status === "Testing"
                    ? "#FFC7EA"
                    : project.status === "Completed"
                    ? "#A6FF96"
                    : "#F0F0F0",
              }}
            >
              {project.status}
            </p>
          </div>

          {projectID === project.id && showDeleteProject && (
            <div
              className="flex gap-0.4 items-center justify-start absolute bg-white shadow-custom rounded-lg top-10 m:top-12 right-0 p-2 z-1"
              onClick={() => deleteProject(project.id)}
            >
              <span>{trashIcon}</span>
              <p className="py-0.4 px-0.3 text-xs m:text-sm cursor-pointer">
                Delete Project
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Project;
