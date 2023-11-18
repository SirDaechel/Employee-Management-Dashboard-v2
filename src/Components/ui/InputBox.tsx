type InputType = {
  label: string;
  htmlFor: string;
  inputType: string;
};

const InputBox: React.FC<InputType> = ({ label, htmlFor, inputType }) => {
  return (
    <article className="flex flex-col">
      <label
        className="font-poppins font-normal text-sm text-customgrey"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        className="bg-white4 p-2.5 mt-0.3 font-openSans border-px1 border-solid border-grey11 rounded text-grey7 text-xs font-medium w-full"
        type={inputType}
        id="firstname"
        required
      />
    </article>
  );
};

export default InputBox;
