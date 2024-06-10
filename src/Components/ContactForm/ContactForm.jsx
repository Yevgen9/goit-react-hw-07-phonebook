import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Input } from "antd";
import { Button, Typography } from "antd";
import { nanoid } from "nanoid";
import { ToastContainer } from "react-toastify";

import { addContact } from "../../redux/contactsSlice";
import { showToast } from "../../toastify/toastify";

import s from "./ContactForm.module.scss";

const INITIAL_STATE = {
  name: "",
  phone: "",
};

const { Title, Text } = Typography;

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
      id: nanoid(5),
      name: name,
      phone: phone,
    };

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;

    dispatch(addContact(newContact));

    showToast("success", "You added a contact");

    resetForm();
  };

  const validateForm = () => {
    const { name, phone } = form;
    if (!name || !phone) {
      showToast("error", "Some field is empty");

      return false;
    }
    return handleCheckContact();
  };

  const handleCheckContact = () => {
    const { name } = form;

    const isExistContact = !!contacts.find((contact) => contact.name === name);

    isExistContact && showToast("info", "Contact already exists");

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
        <Title className={s.title}>Phonebook</Title>
        <Text className={s.text} strong>
          Name
        </Text>
        <Input
          value={name}
          onChange={handleChangeForm}
          id={nameInputId}
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <Text className={s.text} strong>
          Number
        </Text>
        <Input
          id={phoneInputId}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={handleChangeForm}
        />
        <Button htmlType="submit" className={s.btn} type="primary" block>
          Add Contact
        </Button>
      </form>
    </div>
  );
}
