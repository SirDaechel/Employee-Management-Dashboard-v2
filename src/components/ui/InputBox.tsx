type InputType = {
  inputRegister: any;
  label: string;
  htmlFor: string;
  inputType: string;
  placeholder?: string;
  error: any;
};

const InputBox: React.FC<InputType> = ({
  inputRegister,
  label,
  htmlFor,
  inputType,
  placeholder,
  error,
}) => {
  return (
    <article className="flex flex-col">
      <label
        className="font-poppins font-medium text-sm text-grey13"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        {...inputRegister}
        className="bg-white4 p-0.7 py-3 mt-0.3 font-openSans border-px1 border-solid border-grey11 rounded text-grey13 text-sm font-normal w-full"
        type={inputType}
        id={htmlFor}
        placeholder={placeholder}
      />
      {error}
    </article>
  );
};

export default InputBox;
