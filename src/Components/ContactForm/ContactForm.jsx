import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.scss";

const INITIAL_STATE = {
  name: "",
  phone: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);

  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, phone } = form;

    const newContact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;

    dispatch(addContact(newContact));

    toast.success(`You added a contact ${name}`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    resetForm();
  };

  const validateForm = () => {
    const { name, phone } = form;
    if (!name || !phone) {
      toast.error("Some filed is empty", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return false;
    }
    return handleCheckContact();
  };

  const handleCheckContact = () => {
    const { name } = form;

    const isExistContact = !!contacts.find((contact) => contact.name === name);

    isExistContact &&
      toast.info(`${name} is already exist`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    resetForm();

    return !isExistContact;
  };

  const resetForm = () => setForm(INITIAL_STATE);

  const { name, phone } = form;

  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  return (
    <div className={s.formContainer}>
      <ToastContainer />
      <form className={s.form} onSubmit={handleFormSubmit}>
        <p className={s.text}>Name</p>
        <input
          id={nameInputId}
          type="text"
          name="name"
          placeholder="Enter text"
          value={name}
          onChange={handleChangeForm}
        />

        <p className={s.text}>Number</p>
        <input
          id={phoneInputId}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={handleChangeForm}
        />

        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
