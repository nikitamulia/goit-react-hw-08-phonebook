import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});  
export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts",contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const changeContacts = createAsyncThunk(
  'tasks/editContact',
  async ({ id, newName, newNumber }, thunkAPI) => {
      try {
          console.log("id:", id); //!
          const response = await axios.patch(`/contacts/${id}`, { name: newName, number: newNumber });
          // const response = await axios.delete(`/contacts/${contactId}`); //! Ошибка Репеты
          console.log("editContact==>response.data", response.data); //!
          return response.data;
      } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
      }
  }
);
