import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

const ENDPOINT = "https://star-wars-characters.glitch.me/api/search/";

export const fetchCharactersFromAPI = createAsyncThunk(
  "characters/fetchCharacters",
  async (searchTerm) => {
    const response = await fetch(ENDPOINT + searchTerm).then((response) =>
      response.json()
    );
    return response.results;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    add: (state, action) => {
      state.characters.push(action.payload);
    },
  },
  extraReducers: {
    [fetchCharactersFromAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = true;
    },
    [fetchCharactersFromAPI.pending]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});
