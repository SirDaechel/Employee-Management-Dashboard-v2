const ProjectsPageTabs = () => {
  return (
    <article className="flex gap-5 py-4 px-0">
      <div className="py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5">
        <p className="w-max text-sm">All Projects</p>
        <span className="flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light">
          60
        </span>
      </div>

      <div className="py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5">
        <p className="w-max text-sm">Pending</p>
        <span className="flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light">
          21
        </span>
      </div>

      <div className="py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5">
        <p className="w-max text-sm">In Progress</p>
        <span className="flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light">
          3
        </span>
      </div>

      <div className="py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5">
        <p className="w-max text-sm">Testing</p>
        <span className="flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light">
          7
        </span>
      </div>

      <div className="py-3 px-4 font-roboto text-sm font-light cursor-pointer flex items-center gap-2.5">
        <p className="w-max text-sm">Completed</p>
        <span className="flex py-0.1 px-0.3 rounded-0.45 text-white bg-grey6 text-center font-roboto text-0.625 font-light">
          6
        </span>
      </div>
    </article>
  );
};

export default ProjectsPageTabs;
