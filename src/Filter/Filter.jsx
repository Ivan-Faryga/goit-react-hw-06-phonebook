import React from "react";
import s from "./Filter.module.css";
// import { filterContact } from "../redux/actions/actions";
import { filterContact } from "../redux/slices/filter";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter);

  return (
    <>
      <label className={s.filterInputLabel}>Find contacts by name</label>
      <br />
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={(e) => dispatch(filterContact(e.target.value))}
        placeholder="Contact"
      />
    </>
  );
};

export default Filter;
