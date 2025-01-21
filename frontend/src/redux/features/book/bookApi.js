import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBook = createAsyncThunk("books/FetchBookApi", async () => {
  const response = await fetch("http://localhost:5000/api/books/");
  return response.json();
});

export const fetchABook = createAsyncThunk(
  "books/FetchABookApi",
  async (id) => {
    const response = await fetch(`http://localhost:5000/api/books/${id}`);
    return response.json();
  }
);

export const deleteABook = createAsyncThunk("books/deleteABook", async (id) => {
  const token = localStorage.getItem("token");
  const response = await axios.delete(
    `http://localhost:5000/api/books/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
  return id;
});

const initialState = {
  book: {},
  books: [],
  loading: false,
  error: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBook.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllBook.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    builder.addCase(fetchABook.fulfilled, (state, action) => {
      state.book = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteABook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book._id !== action.payload);
      state.loading = false;
    });
  },
});

export default bookSlice.reducer;
