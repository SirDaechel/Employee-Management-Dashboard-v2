import xIcon from "../../assets/icons/xIcon";
import { useState } from "react";

type TagsInputType = {
  label: string;
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const TagsInput: React.FC<TagsInputType> = ({
  label,
  data,
  setData,
  error,
  setError,
}) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // Add the input value to the items array
      if (inputValue.trim() !== "") {
        setData([...data, inputValue.trim()]);
        setInputValue("");
        setError("");
      }
    }
  };

  const removeTag = (indexToRemove: number) => {
    setData(data.filter((_, index) => index !== indexToRemove));
  };

  return (
    <section className="w-full">
      <label className="font-poppins font-medium text-grey13 text-sm">
        {label}
      </label>
      <div className="flex flex-wrap items-center justify-start gap-2 mt-0.3 p-0.7 font-openSans font-medium text-xs border-px1 border-solid border-grey7 rounded w-full max-w-35.4 min-h-3.7 bg-white">
        <ul className="flex flex-wrap items-center justify-start gap-2">
          {data.map((d, index) => (
            <li
              key={index}
              className="bg-primarycolour text-white font-openSans font-medium text-xs rounded p-0.3 flex items-center justify-center gap-2"
            >
              {d}
              <span
                className="text-base cursor-pointer"
                onClick={() => removeTag(index)}
              >
                {xIcon}
              </span>
            </li>
          ))}
        </ul>

        <input
          type="text"
          className="outline-none border-0 bg-transparent font-openSans font-normal text-sm"
          placeholder="type and press enter..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => addTag(e)}
        />
      </div>
      <p className="text-red-500">{error}</p>
    </section>
  );
};

export default TagsInput;
