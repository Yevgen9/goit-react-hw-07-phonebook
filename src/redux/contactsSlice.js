import { createSlice } from "@reduxjs/toolkit";

import { getContacts, deleteContactById } from "../services/requests";

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  status: "idle",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.contacts = payload;
      })

      .addCase(getContacts.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })

      .addCase(deleteContactById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(deleteContactById.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== payload
        );
      })

      .addCase(deleteContactById.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const { reducer: contactsReducer } = contactsSlice;
