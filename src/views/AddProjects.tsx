import InputBox from "../components/ui/InputBox";
import BtnDropdown from "../components/ui/BtnDropdown";
import { useSelector, useDispatch } from "react-redux";
import { projectsState } from "../features/projects/data/projectsApiSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { setProjects } from "../features/projects/data/projectsApiSlice";
import { useNavigate } from "react-router-dom";
import TextArea from "../components/ui/TextArea";
import AssignInput from "../components/ui/AssignInput";
import { staffsState } from "../features/staffs/data/staffsApiSlice";
import DateInput from "../components/ui/DateInput";
import Calendar from "../components/ui/Calendar";
import TagsInput from "../components/ui/TagsInput";

const AddProjects: React.FC = () => {
  const theprojects = useSelector(projectsState);
  const { projects } = theprojects;

  const theStaffs = useSelector(staffsState);
  const { staffs } = theStaffs;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [projectTeam, setProjectTeam] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [projectCategory, setProjectCategory] = useState<string>("");

  const [categoryError, setCategoryError] = useState<string>("");
  const [priorityError, setPriorityError] = useState<string>("");
  const [startDateError, setStartDateError] = useState<string>("");
  const [endDateError, setEndDateError] = useState<string>("");
  const [stacksError, setStacksError] = useState<string>("");
  const [teamError, setTeamError] = useState<string>("");

  const [projectStartDate, setProjectStartDate] = useState<string>("");

  const [projectEndDate, setProjectEndDate] = useState<string>("");

  const [projectPriority, setProjectPriority] = useState("");

  const [projectStacks, setProjectStacks] = useState<any[]>([]);

  const [showStartDateCalendar, setShowStartDateCalendar] =
    useState<boolean>(false);
  const [showEndDateCalendar, setShowEndDateCalendar] =
    useState<boolean>(false);

  const projectPriorityList: object[] = [
    { id: 1, label: "High" },
    { id: 2, label: "Medium" },
    { id: 3, label: "Low" },
  ];

  // Open Start Date Calendar
  const openStartDateCalendar = () => {
    setShowEndDateCalendar(false);
    setShowStartDateCalendar((prev) => !prev);
  };

  // Open End Date Calendar
  const openEndDateCalendar = () => {
    setShowStartDateCalendar(false);
    setShowEndDateCalendar((prev) => !prev);
  };

  const onSubmit = (data: FieldValues) => {
    // if the below conditions are true, show error message, if not, submit the data
    if (projectCategory === "") {
      setCategoryError("Select category");
    }

    if (projectTeam.length === 0) {
      setTeamError("Assign project to team");
    }

    if (projectStartDate === "") {
      setStartDateError("Select start date");
    }

    if (projectEndDate === "") {
      setEndDateError("Select end date");
    }

    if (projectPriority === "") {
      setPriorityError("Select priority");
    }

    if (projectStacks.length === 0) {
      setStacksError("Select project stacks");
    }

    if (
      projectCategory &&
      projectStartDate &&
      projectEndDate &&
      projectPriority &&
      projectStacks.length &&
      projectTeam.length
    ) {
      const newID = projects.length ? projects[0].id + 1 : 1;

      const newProject = {
        ...data,
        id: newID,
        category: projectCategory,
        assignedTo: projectTeam,
        startdate: projectStartDate,
        enddate: projectEndDate,
        priority: projectPriority,
        technologyStack: projectStacks,
        status: "In Progress",
      };
      setProjectCategory("");
      setProjectTeam([]);
      setProjectStartDate("");
      setProjectEndDate("");
      setProjectPriority("");
      setProjectStacks([]);
      dispatch(setProjects([newProject, ...projects]));
      navigate("/projects");
      reset();
    }
  };

  return (
    <section>
      <p className="font-poppins text-base font-normal">Project Details</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid items-start justify-between gap-8 grid-cols-r21fr m:flex m:flex-col"
      >
        <section className="flex flex-col gap-8 mt-6 w-full relative">
          <InputBox
            inputRegister={register("name", {
              required: "Project name is required",
              minLength: {
                value: 3,
                message: "Use 3 characters or more",
              },
            })}
            label="Project Name:"
            htmlFor="name"
            inputType={"text"}
            placeholder="Enter project description"
            error={
              errors.name && (
                <p className="text-red-500">{`${errors.name.message}`}</p>
              )
            }
          />

          <TextArea
            inputRegister={register("description", {
              required: "Project description is required",
              minLength: {
                value: 5,
                message: "Use 5 characters or more",
              },
            })}
            label="Project Description:"
            placeholder="Enter Project Description"
            htmlFor="description"
            error={
              errors.description && (
                <p className="text-red-500">{`${errors.description.message}`}</p>
              )
            }
          />

          <BtnDropdown
            label={"Project Category:"}
            text={projectCategory}
            setText={setProjectCategory}
            data={projects}
            error={categoryError}
            setError={setCategoryError}
            placeholder="Select category"
            property="category"
          />

          <AssignInput
            data={staffs}
            projectTeam={projectTeam}
            setProjectTeam={setProjectTeam}
            error={teamError}
            setError={setTeamError}
          />

          <DateInput
            label="Start Date:"
            projectDate={projectStartDate}
            openCalendar={openStartDateCalendar}
            error={startDateError}
            placeholder="Enter start date"
          />

          <DateInput
            label="End Date:"
            projectDate={projectEndDate}
            openCalendar={openEndDateCalendar}
            error={endDateError}
            placeholder="Enter end date"
          />
          {showStartDateCalendar && (
            <Calendar
              title="Select Start Date"
              setProjectDate={setProjectStartDate}
              showCalendar={showStartDateCalendar}
              setShowCalendar={setShowStartDateCalendar}
              setError={setStartDateError}
            />
          )}

          {showEndDateCalendar && (
            <Calendar
              title="Select End Date"
              setProjectDate={setProjectEndDate}
              showCalendar={showEndDateCalendar}
              setShowCalendar={setShowEndDateCalendar}
              setError={setEndDateError}
            />
          )}
        </section>

        <section className="flex flex-col gap-8 mt-6 m:w-full m:mt-0">
          <BtnDropdown
            label={"Project Priority:"}
            text={projectPriority}
            setText={setProjectPriority}
            data={projectPriorityList}
            error={priorityError}
            setError={setPriorityError}
            placeholder="Select project priority"
            property="label"
          />

          <InputBox
            inputRegister={register("client", {
              required: "Project client is required",
              minLength: {
                value: 3,
                message: "Use 3 characters or more",
              },
            })}
            label="Project Client:"
            htmlFor="client"
            inputType={"text"}
            placeholder="Enter project client"
            error={
              errors.client && (
                <p className="text-red-500">{`${errors.client.message}`}</p>
              )
            }
          />

          <TagsInput
            label="Project Stack:"
            data={projectStacks}
            setData={setProjectStacks}
            error={stacksError}
            setError={setStacksError}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primarycolour p-4 font-roboto font-semibold text-0.9 text-white rounded-lg w-full text-center ${
              isSubmitting && `bg-customgrey`
            }`}
          >
            {isSubmitting ? "...submitting" : "Add Project"}
          </button>
        </section>
      </form>
    </section>
  );
};

export default AddProjects;
