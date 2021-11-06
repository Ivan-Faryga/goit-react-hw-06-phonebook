import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { filterContact } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter);
  const contacts = useSelector((state) => state.contacts);

  const handleInputFilter = (contacts, filter) => {
    const filterToLowerCase = filter.toLocaleLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().trim().includes(filterToLowerCase)
    );
  };

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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
