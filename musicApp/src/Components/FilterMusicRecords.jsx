import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState([]);

  const handleFilter = (e) => {
    const option = e.target.name;
    console.log("Option: ", option);

    const newArr = [...filterVal];

    if (filterVal.includes(option)) {
      newArr.splice(filterVal.indexOf(option), 1);
    } else {
      newArr.push(option);
    }

    setFilterVal(newArr);
    // console.log("Filter Value: ", filterVal);
  };

  // console.log("Filter Value: ", filterVal);

  return (
    <>
      <h1>Filter</h1>
    </>
  );
};
