import { useSelector } from "react-redux";
import { projectsState } from "../data/projectsApiSlice";

const ProjectDeadline: React.FC = () => {
  const projectData = useSelector(projectsState);
  const { projects } = projectData;

  const deadlineProjects = projects.slice(0, 6);

  let content;

  if (projects) {
    content = deadlineProjects.map((project: any) => (
      <tr key={project.id}>
        <td className="text-sm font-roboto">{project.name}</td>

        <td className="text-sm font-roboto">{project.assignedTo}</td>

        <td>
          <p
            className="text-sm font-roboto w-24 rounded-px10 py-0.4 px-0.7"
            style={{
              backgroundColor:
                project.status === "In Progress"
                  ? "#F6FFA6"
                  : project.status === "Completed"
                  ? "#A6FF96"
                  : project.status === "Pending"
                  ? "#64CCC5"
                  : project.status === "Testing"
                  ? "#C4B0FF"
                  : "transparent",
            }}
          >
            {project.status}
          </p>
        </td>

        <td className="text-sm font-roboto">{project.enddate}</td>

        <td className="text-sm font-roboto">{project.priority}</td>
      </tr>
    ));
  }

  return (
    <section className="h-fit bg-white flex-grow m:max-w-full m:overflow-x-scroll">
      <table className="max-h-fit m:w-max">
        <caption className="pl-4 pr-4 pt-4 text-base font-medium text-left font-poppins text-darkgrey pb-4 ss:text-xs">
          Project Deadlines
        </caption>

        <thead className="bg-lightgrey2">
          <tr>
            <th className="text-0.83 uppercase font-semibold text-darkgrey font-poppins text-left">
              Project
            </th>
            <th className="text-0.83 uppercase font-semibold text-darkgrey font-poppins text-left">
              Assigned To
            </th>
            <th className="text-0.83 uppercase font-semibold text-darkgrey font-poppins text-left">
              Status
            </th>
            <th className="text-0.83 uppercase font-semibold text-darkgrey font-poppins text-left">
              Due Date
            </th>
            <th className="text-0.83 uppercase font-semibold text-darkgrey font-poppins text-left">
              Priority
            </th>
          </tr>
        </thead>

        <tbody>{content}</tbody>
      </table>
    </section>
  );
};

export default ProjectDeadline;
