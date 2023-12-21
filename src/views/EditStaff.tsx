import InputBox from "../components/ui/InputBox";
import BtnDropdown from "../components/ui/BtnDropdown";
import { useSelector, useDispatch } from "react-redux";
import { staffsState } from "../features/staffs/data/staffsApiSlice";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { editThisStaff } from "../features/staffs/data/staffsApiSlice";
import { useNavigate } from "react-router-dom";

const AddNewStaffs: React.FC = () => {
  const theStaffs = useSelector(staffsState);
  const { staffs, staffToBeEdited } = theStaffs;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm();

  // if staff that is to be edited has content then set the input field or boxes to the staff data before modifying
  staffToBeEdited.length >= 1 &&
    useEffect(() => {
      setValue("firstname", staffToBeEdited[0].firstname);
      setValue("lastname", staffToBeEdited[0].lastname);
      setValue("email", staffToBeEdited[0].email);
      setStaffRole(staffToBeEdited[0].role);
      setValue("wage", staffToBeEdited[0].wage);
      setValue("age", staffToBeEdited[0].age);
      setValue("phone", staffToBeEdited[0].phone);
      setValue("workinghours", staffToBeEdited[0].workinghours);
    }, []);

  const [staffRole, setStaffRole] = useState<string>("");

  const [roleError, setRoleError] = useState<string>("");

  const onSubmit = (data: FieldValues) => {
    // is staff role is empty, show error message, if not, submit the data
    if (staffRole === "") {
      setRoleError("Select valid role");
    } else {
      dispatch(
        editThisStaff({
          ...data,
          id: staffToBeEdited[0].id,
          name: `${data.firstname} ${data.lastname}`,
          role: staffRole,
        })
      );
      navigate("/staffs");
      setStaffRole("Select valid role");
      reset();
    }
  };

  return (
    <section>
      <p className="font-poppins text-base font-normal">Edit Staff</p>
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
            {isSubmitting ? "...submitting" : "Edit Staff"}
          </button>
        </section>
      </form>
    </section>
  );
};

export default AddNewStaffs;
