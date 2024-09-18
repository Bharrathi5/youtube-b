import React from "react";
import { filterTags } from "../utils/constants";

const FilterTags = () => {
  return (
    <div>
      <div className=" w-full flex flex-nowrapwrap gap-3 my-2">
        {filterTags.map((item, i) => (
          <p
            key={i}
            className=" bg-slate-100 rounded-lg p-1 hover:bg-slate-200 hover:cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
