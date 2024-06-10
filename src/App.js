import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "./redux/contactsSlice";

import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import "./App.module.scss";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  });

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />
      <ContactsList />
    </div>
  );
}
