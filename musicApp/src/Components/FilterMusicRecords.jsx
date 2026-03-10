import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

export const FilterMusicRecords = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState([]);

  const handleFilter = (e) => {
    const option = e.target.name;
    // console.log("Option: ", option);

    const newArr = [...filterVal];

    if (filterVal.includes(option)) {
      newArr.splice(filterVal.indexOf(option), 1);
    } else {
      newArr.push(option);
    }

    setFilterVal(newArr);
    // console.log("Filter Value: ", filterVal);
  };

  console.log("Filter Value: ", filterVal);

  useEffect(() => {}, []);

  return (
    <>
      <h1>Filter</h1>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <input type="checkbox" name="K-pop" onChange={handleFilter} />
          <label>K-Pop</label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <input type="checkbox" name="Holiday" onChange={handleFilter} />
          <label>Holiday</label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <input type="checkbox" name="Heavy Metal" onChange={handleFilter} />
          <label>Heavy Metal</label>
        </div>
      </div>
    </>
  );
};
