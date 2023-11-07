import xIcon from "../assets/icons/xIcon";

const TagsInput: React.FC = () => {
  return (
    <section className="w-full">
      <div className="font-poppins font-normal text-customgrey text-sm">
        Project Stack
      </div>

      <div className="flex flex-wrap items-center justify-start gap-2 mt-0.3 p-0.7 font-openSans font-medium text-xs border-px1 border-solid border-grey7 rounded w-full max-w-35.4 min-h-3.7 bg-white">
        <ul className="flex flex-wrap items-center justify-start gap-2">
          <li className="bg-primarycolour text-white font-openSans font-medium text-xs rounded p-0.3 flex items-center justify-center gap-2">
            node.js
            <span className="text-base cursor-pointer">{xIcon}</span>
          </li>
        </ul>

        <input
          type="text"
          className="outline-none border-0 bg-transparent font-openSans font-medium text-xs"
          placeholder="type and press enter..."
        />
      </div>
    </section>
  );
};

export default TagsInput;
