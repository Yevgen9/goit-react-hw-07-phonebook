import React from "react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getContacts } from "./redux/contactsSlice";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

import s from "./App.module.scss";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  });

  return (
    <div className={s.App}>
      <div className={s.phonebook}>
        
        <ContactForm />
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
}
