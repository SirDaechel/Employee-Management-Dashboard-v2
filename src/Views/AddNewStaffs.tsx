import InputBox from "../Components/InputBox";

const AddNewStaffs: React.FC = () => {
  return (
    <section>
      <p className="font-poppins text-base font-normal">Add New Staff</p>
      <form
        onSubmit={(e) => e.preventDefault}
        className="grid items-start justify-between gap-8 grid-cols-r21fr"
      >
        <section className="flex flex-col gap-8 mt-6">
          <InputBox label="First Name:" htmlFor="firstname" inputType="text" />

          <InputBox label="Last Name:" htmlFor="lastname" inputType="text" />

          <InputBox label="Email:" htmlFor="email" inputType="email" />

          <InputBox label="Assign Role:" htmlFor="role" inputType="text" />

          <InputBox label="Wage:" htmlFor="wage" inputType="number" />

          <InputBox label="Age:" htmlFor="age" inputType="number" />
        </section>

        <section className="flex flex-col gap-8 mt-6">
          <InputBox label="Phone:" htmlFor="phone" inputType="tel" />

          <InputBox label="Working Hours:" htmlFor="hours" inputType="number" />

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              e.preventDefault
            }
            className="bg-primarycolour p-4 font-roboto font-semibold text-0.9 text-white rounded-lg w-full text-center"
          >
            Add Staff
          </button>
        </section>
      </form>
    </section>
  );
};

export default AddNewStaffs;
