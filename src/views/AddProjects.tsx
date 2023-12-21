import InputBox from "../components/ui/InputBox";
import BtnDropdown from "../components/ui/BtnDropdown";
import { useSelector, useDispatch } from "react-redux";
import { staffsState } from "../features/staffs/data/staffsApiSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { setStaffs } from "../features/staffs/data/staffsApiSlice";
import { useNavigate } from "react-router-dom";

const AddNewStaffs: React.FC = () => {
  const theStaffs = useSelector(staffsState);
  const { staffs } = theStaffs;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [staffRole, setStaffRole] = useState<string>("");

  const [roleError, setRoleError] = useState<string>("");

  const onSubmit = (data: FieldValues) => {
    // is staff role is empty, show error message, if not, submit the data
    if (staffRole === "") {
      setRoleError("Select valid role");
    } else {
      const newID = staffs.length ? staffs[0].id + 1 : 1;
      const newStaff = {
        ...data,
        id: newID,
        name: `${data.firstname} ${data.lastname}`,
        role: staffRole,
        checked: false,
      };
      dispatch(setStaffs([newStaff, ...staffs]));
      navigate("/staffs");
      console.log(newStaff, staffs.length, staffs);
      setStaffRole("Select valid role");
      reset();
    }
  };

  return (
    <section>
      <p className="font-poppins text-base font-normal">Add New Staff</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid items-start justify-between gap-8 grid-cols-r21fr m:flex m:flex-col m:w-full"
      >
        <section className="flex flex-col gap-8 mt-6 m:w-full">
          <InputBox
            inputRegister={register("firstname", {
              required: "Firstname is required",
              minLength: {
                value: 3,
                message: "Use 3 characters or more",
              },
            })}
            label="First Name:"
            htmlFor="firstname"
            inputType={"text"}
            error={
              errors.firstname && (
                <p className="text-red-500">{`${errors.firstname.message}`}</p>
              )
            }
          />

          <InputBox
            inputRegister={register("lastname", {
              required: "Lastname is required",
              minLength: {
                value: 3,
                message: "Use 3 characters or more",
              },
            })}
            label="Last Name:"
            htmlFor="lastname"
            inputType={"text"}
            error={
              errors.lastname && (
                <p className="text-red-500">{`${errors.lastname.message}`}</p>
              )
            }
          />

          <InputBox
            inputRegister={register("email", {
              required: "Email is required",
            })}
            label="Email:"
            htmlFor="email"
            inputType={"email"}
            error={
              errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )
            }
          />

          <BtnDropdown
            label={"Assign Role:"}
            text={staffRole}
            setText={setStaffRole}
            data={staffs}
            error={roleError}
            setError={setRoleError}
          />

          <InputBox
            inputRegister={register("wage", {
              required: "Wage is required",
              minLength: {
                value: 3,
                message: "Must be a minimum of three characters",
              },
            })}
            label="Wage:"
            htmlFor="wage"
            inputType="number"
            error={
              errors.wage && (
                <p className="text-red-500">{`${errors.wage.message}`}</p>
              )
            }
          />

          <InputBox
            inputRegister={register("age", {
              required: "Age is required",
              maxLength: {
                value: 2,
                message: "Must be two characters",
              },
            })}
            label="Age:"
            htmlFor="age"
            inputType="number"
            error={
              errors.age && (
                <p className="text-red-500">{`${errors.age.message}`}</p>
              )
            }
          />
        </section>

        <section className="flex flex-col gap-8 mt-6 m:w-full m:mt-0">
          <InputBox
            inputRegister={register("phone", {
              required: "Phone is required",
              maxLength: {
                value: 16,
                message: "Invalid phone number",
              },
            })}
            label="Phone:"
            htmlFor="phone"
            inputType={"tel"}
            error={
              errors.phone && (
                <p className="text-red-500">{`${errors.phone.message}`}</p>
              )
            }
          />

          <InputBox
            inputRegister={register("workinghours", {
              required: "Hours is required",
              maxLength: {
                value: 2,
                message: "Must be two characters",
              },
            })}
            label="Working Hours:"
            htmlFor="hours"
            inputType="number"
            error={
              errors.hours && (
                <p className="text-red-500">{`${errors.hours.message}`}</p>
              )
            }
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primarycolour p-4 font-roboto font-semibold text-0.9 text-white rounded-lg w-full text-center ${
              isSubmitting && `bg-customgrey`
            }`}
          >
            {isSubmitting ? "...submitting" : "Add Staff"}
          </button>
        </section>
      </form>
    </section>
  );
};

export default AddNewStaffs;
