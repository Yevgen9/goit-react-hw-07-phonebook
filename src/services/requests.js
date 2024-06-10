import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
