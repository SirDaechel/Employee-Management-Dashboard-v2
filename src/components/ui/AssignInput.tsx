import { useEffect, useState } from "react";
import xIcon from "../../assets/icons/xIcon";
import checkIcon from "../../assets/icons/checkIcon";

type AssignInputType = {
  data: any[];
  projectTeam: any[];
  setProjectTeam: React.Dispatch<React.SetStateAction<any[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const AssignInput: React.FC<AssignInputType> = ({
  data,
  projectTeam,
  setProjectTeam,
  error,
  setError,
}) => {
  const [onFocus, setOnFocus] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // Function to remove staff from project
  const removeStaff = (selectedStaff: any) => {
    setProjectTeam(projectTeam.filter((staff) => staff !== selectedStaff));
  };

  // Handle what happens when you click on a staff
  const handleStaffClick = (selectedStaff: any) => {
    setShowPlaceholder(false);
    // If a staff is already in the projectTeam array, remove it. If not, place it in the array
    if (projectTeam.includes(selectedStaff)) {
      setProjectTeam(projectTeam.filter((staff) => staff !== selectedStaff));
    } else {
      setProjectTeam([...projectTeam, selectedStaff]);
    }
  };

  useEffect(() => {
    projectTeam.length && setError("");
  }, [projectTeam]);

  return (
    <div className="w-full">
      <p className="font-poppins font-medium text-grey13 text-sm">
        Assign Project To:
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2 mt-0.3 p-0.7 font-openSans font-medium text-xs border-px1 border-solid border-grey7 rounded w-full max-w-xl min-h-14 bg-white">
        {showPlaceholder ? (
          <p className="text-sm font-normal" style={{ color: "#9CA4B2" }}>
            Assign project to
          </p>
        ) : (
          ""
        )}

        <ul className="flex flex-wrap items-center justify-start gap-2">
          {projectTeam.map((staff) => (
            <li
              key={staff.id}
              className="flex items-center justify-center gap-2 bg-primarycolour text-white font-openSans font-medium text-xs rounded p-0.3"
            >
              {`${staff.name} - ${staff.role}`}
              <span
                className="text-base cursor-pointer"
                onClick={() => removeStaff(staff)}
              >
                {xIcon}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="bg-red-500 text-white p-0.4 rounded cursor-pointer"
          onClick={() => setOnFocus(!onFocus)}
        >
          {onFocus ? "Close List" : "Open List"}
        </button>
      </div>
      <p className="text-red-500">{error}</p>
      {onFocus ? (
        <div className="absolute mt-4 z-5 overflow-y-scroll bg-white rounded w-full shadow-custom">
          <ul className="flex flex-col items-start gap-2 justify-start p-4 max-h-44 w-full">
            {data.map((d: any) => (
              <li
                key={d.id}
                className="flex items-center justify-between w-full p-2 cursor-pointer"
                style={{
                  backgroundColor: projectTeam.includes(d) ? "#A6FF96" : "#FFF",
                }}
                onClick={() => handleStaffClick(d)}
              >
                <p className="text-sm">{`${d.name} - ${d.role}`}</p>

                <div
                  className="text-base"
                  style={{
                    display: projectTeam.includes(d) ? "block" : "none",
                  }}
                >
                  {checkIcon}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default AssignInput;
