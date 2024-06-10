import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";
import s from "../ContactList/ContactList.module.scss";

const ContactsList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );

  return (
    <div className={s.listContainer}>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <p>{contact.name}:</p>
            <p className={s.textNumber}>{contact.phone}</p>
            <button
              className={s.btnDel}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
