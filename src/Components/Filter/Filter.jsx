import React from "react";
import { useDispatch } from "react-redux";

import { Input } from "antd";

import { setFilter } from "../../redux/filterSlice";
import s from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.filterContainer}>
      <h2>Contacts</h2>
      <Input
        className={s.filterInput}
        type="text"
        name="filter"
        onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
        placeholder="Find contact by name"
      />
    </div>
  );
};

export default Filter;
