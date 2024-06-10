import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Flex, Typography } from "antd";

import { deleteContact } from "../../redux/contactsSlice";
import s from "../ContactList/ContactList.module.scss";

const { Text } = Typography;

const ContactsList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Text strong>{contact.name} :</Text>
            <Text strong>{contact.phone}</Text>

            <Flex gap="small" wrap>
              <Button
                onClick={() => dispatch(deleteContact(contact.id))}
                size="small"
                type="primary"
                className={s.btnDel}
              >
                Delete Contact
              </Button>
            </Flex>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
