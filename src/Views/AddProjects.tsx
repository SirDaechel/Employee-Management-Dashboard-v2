import InputBox from "../Components/InputBox";

const AddProjects = () => {
  return (
    <section>
      <p className="font-poppins text-base font-normal">Projects Details</p>
      <form
        onSubmit={(e) => e.preventDefault}
        className="grid items-start justify-between gap-8 grid-cols-r21fr"
      >
        <section className="flex flex-col gap-8 mt-6">
          <InputBox
            label="Project Name:"
            htmlFor="projectname"
            inputType="text"
          />

          <InputBox
            label="Project Description:"
            htmlFor="projectdescription"
            inputType="text"
          />

          <InputBox
            label="Project Category:"
            htmlFor="projectcategory"
            inputType="text"
          />

          <InputBox
            label="Assign Project To:"
            htmlFor="assignprojectto"
            inputType="text"
          />

          <InputBox label="Start Date:" htmlFor="startdate" inputType="text" />

          <InputBox label="End Date:" htmlFor="enddate" inputType="text" />
        </section>

        <section className="flex flex-col gap-8 mt-6">
          <InputBox
            label="Project Priority:"
            htmlFor="projectpriority"
            inputType="text"
          />

          <InputBox
            label="Project Client/Company:"
            htmlFor="projectclient"
            inputType="text"
          />

          <InputBox
            label="Project Stack"
            htmlFor="projectstack"
            inputType="text"
          />

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              e.preventDefault
            }
            className="bg-primarycolour p-4 font-roboto font-semibold text-0.9 text-white rounded-lg w-full text-center"
          >
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};

export default AddProjects;
