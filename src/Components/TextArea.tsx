const TextArea: React.FC = () => {
  return (
    <div className="w-full">
      <p className="font-poppins font-normal text-customgrey text-sm">
        Project Description
      </p>

      <textarea
        className="p-0.7 mt-0.3 font-openSans font-normal text-sm border-px1 border-solid border-grey7 w-full rounded min-h-px150 resize-none overflow-y-auto"
        placeholder="Enter Project Description"
      ></textarea>
    </div>
  );
};

export default TextArea;
