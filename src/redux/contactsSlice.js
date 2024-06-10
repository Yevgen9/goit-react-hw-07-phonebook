import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  status: "idle",
};

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(
        "https://6663087462966e20ef0b0fae.mockapi.io/contacts"
      );

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response ? e.response.data : e.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/deleteContactById",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://6663087462966e20ef0b0fae.mockapi.io/contacts/${id}`
      );

      return id;
    } catch (e) {
      return rejectWithValue(e.response ? e.response.data : e.message);
    }
  }
);

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
