import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { deleteContact } from "../../redux/actions/actions";
import { deleteContact } from "../../redux/slices/contacts";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleInputFilter = (contacts, filter) => {
    const filterToLowerCase = filter.toLocaleLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().trim().includes(filterToLowerCase)
    );
  };

  return (
    <ul className={s.contactsList}>
      {handleInputFilter(contacts, value).map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
