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

export const addBook = createAsyncThunk("books/addBook", async (data) => {
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(data);
  const { data: response } = await axios.post(
    "http://localhost:5000/api/books/create/",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
});

export const updateABook = createAsyncThunk(
  "books/updateABook",
  async ({ id, data }) => {
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(data);
    const response = await axios.put(
      `http://localhost:5000/api/books/update/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return id;
  }
);

const initialState = {
  book: {},
  books: [],
  loading: false,
  error: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    clearBook: (state) => {
      state.book = {};
    },
  },
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
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
      state.loading = false;
    });
    builder.addCase(updateABook.fulfilled, (state, action) => {
      state.books = state.books.map((book) =>
        book._id === action.payload._id ? action.payload : book
      );
      state.loading = false;
    });
  },
});

export const { clearBook } = bookSlice.actions;
export default bookSlice.reducer;
