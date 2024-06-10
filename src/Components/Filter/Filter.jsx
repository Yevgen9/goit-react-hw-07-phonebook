import React from "react";
import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/filterSlice";
import s from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.filterContainer}>
     
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
        placeholder="Enter text"
      ></input>
    </div>
  );
};

export default Filter;
