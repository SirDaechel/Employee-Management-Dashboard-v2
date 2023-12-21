type InputType = {
  inputRegister: any;
  label: string;
  htmlFor: string;
  inputType: string;
  error: any;
};

const InputBox: React.FC<InputType> = ({
  inputRegister,
  label,
  htmlFor,
  inputType,
  error,
}) => {
  return (
    <article className="flex flex-col">
      <label
        className="font-poppins font-normal text-sm text-customgrey"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        {...inputRegister}
        className="bg-white4 p-2.5 mt-0.3 font-openSans border-px1 border-solid border-grey11 rounded text-darkgrey text-xs font-medium w-full"
        type={inputType}
        id={htmlFor}
      />
      {error}
    </article>
  );
};

export default InputBox;
