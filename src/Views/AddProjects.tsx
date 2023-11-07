import InputBox from "../Components/InputBox";
import TextArea from "../Components/TextArea";
import BtnDropdown from "../Components/BtnDropdown";
import DateInput from "../Components/DateInput";
import TagsInput from "../Components/TagsInput";

const AddProjects: React.FC = () => {
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

          <TextArea />

          <BtnDropdown
            label="Project Category:"
            text="Select Product Category --"
          />

          <BtnDropdown label="Assign Project To:" text="Assign Project To --" />

          <DateInput label="Start Date" projectDate="Enter Start Date --" />

          <DateInput label="End Date" projectDate="Enter End Date --" />
        </section>

        <section className="flex flex-col gap-8 mt-6">
          <BtnDropdown
            label="Project Priority:"
            text="Select Project Priority"
          />

          <InputBox
            label="Project Client/Company:"
            htmlFor="projectclient"
            inputType="text"
          />

          <TagsInput />

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
