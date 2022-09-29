import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

// Get Todays Date
let today = new Date();
let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, '0');
let day = String(today.getDate()).padStart(2, '0');
// Fetch URL
const featuredUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;
const topArticlesUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day-1}`


// Reducer
export const getFeatured = createAsyncThunk("featured/getFeatured", () => {
    return fetch(featuredUrl)
      .then((resp) =>  resp.json())
      .catch((err) => console.log(err));
  });

  export const getTopArticles = createAsyncThunk("featured/getTopArticles", () => {
    return fetch(topArticlesUrl)
      .then((resp) =>  resp.json())
      .catch((err) => console.log(err));
  });


const initialState = {
    featured:[],
    topArticles:[],
isLoading:true
}

const featuredSlice=createSlice({
    name:'featured',
    initialState,
    extraReducers:{
           // Get Trending Data
    [getFeatured.pending]: (state, action) => {
        state.isLoading = true;
      },
      [getFeatured.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.featured = action.payload;
      },
      [getFeatured.rejected]: (state) => {
        state.isLoading = false;
      },
      // Get Top Articles
      [getTopArticles.pending]: (state, action) => {
        state.isLoading = true;
      },
      [getTopArticles.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.topArticles = action.payload.mostread;
      },
      [getTopArticles.rejected]: (state) => {
        state.isLoading = false;
      },
    }
})

export default featuredSlice.reducer