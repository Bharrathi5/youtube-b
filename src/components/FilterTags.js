import React from "react";
import { filterTags } from "../utils/constants";

const FilterTags = () => {
  return (
    <div>
      <div className="flex flex-nowrap gap-3 my-2 w-auto">
        {filterTags.map((item, i) => (
          <button
            key={i}
            className="h-10 w-auto bg-slate-100 rounded-lg p-1 hover:bg-slate-200 hover:cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
