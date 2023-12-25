type InputType = {
  inputRegister: any;
  label: string;
  htmlFor: string;
  placeholder: string;
  error: any;
};

const TextArea: React.FC<InputType> = ({
  inputRegister,
  label,
  htmlFor,
  placeholder,
  error,
}) => {
  return (
    <article className="w-full">
      <label
        className="font-poppins font-medium text-sm text-grey13"
        htmlFor={htmlFor}
      >
        {label}
      </label>

      <textarea
        {...inputRegister}
        className="p-0.7 mt-0.3 font-openSans font-normal text-sm border-px1 border-solid border-grey7 w-full rounded min-h-px150 resize-none overflow-y-auto"
        placeholder={placeholder}
      />
      {error}
    </article>
  );
};

export default TextArea;
