import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import data from "../../db.json";

export const FilterMusicRecords = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterVal, setFilterVal] = useState(
    searchParams.getAll("genre") || [],
  );

  const [sort, setSort] = useState(searchParams.get("_sort") || "");

  // console.log("Search params: ", searchParams.getAll("genre"));

  const [keys] = useState(() => {
    return data.albums
      .map((el) => {
        let value = Object.values(el.genre).join("");
        return value;
      })
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
  });

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

  // console.log("Filter Value: ", filterVal);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const Params = {};

    filterVal && (Params.genre = filterVal);

    sort && (Params._sort = sort);

    setSearchParams(Params);
  }, [sort, filterVal, setSearchParams]);

  return (
    <>
      <h1>Filter</h1>
      {Object.keys(keys).map((el, i) => {
        return (
          <div
            key={i + 1}
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
              <input
                type="checkbox"
                name={el}
                onChange={handleFilter}
                defaultChecked={filterVal.includes(el)}
              />
              <label>{el}</label>
            </div>
          </div>
        );
      })}
      <h2>Sort</h2>
      <div onChange={handleSort}>
        <div>
          <label>Ascending</label>
          <input
            type="radio"
            value="asc"
            name="sort"
            defaultChecked={sort.includes("asc")}
          />
        </div>
        <div>
          <label>Descending</label>
          <input
            type="radio"
            value="desc"
            name="sort"
            defaultChecked={sort.includes("desc")}
          />
        </div>
      </div>
      {/* <div
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
          <input
            type="checkbox"
            name="K-Pop"
            onChange={handleFilter}
            defaultChecked={filterVal.includes("K-Pop")}
          />
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
          <input
            type="checkbox"
            name="Holiday"
            onChange={handleFilter}
            defaultChecked={filterVal.includes("Holiday")}
          />
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
          <input
            type="checkbox"
            name="Heavy Metal"
            onChange={handleFilter}
            defaultChecked={filterVal.includes("Heavy Metal")}
          />
          <label>Heavy Metal</label>
        </div>
      </div> */}
    </>
  );
};
