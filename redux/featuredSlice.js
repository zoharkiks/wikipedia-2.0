import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

// Get Todays Date
let today = new Date();
let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
// Fetch URL
let featuredUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;


// Reducer
export const getFeatured = createAsyncThunk("featured/getFeatured", () => {
    return fetch(featuredUrl)
      .then((resp) =>  resp.json())
      .catch((err) => console.log(err));
  });


const initialState = {
    featured:[],
//     featuredArticle:[],
// featureImage:[],
// onThisDay:[],
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
    }
})

export default featuredSlice.reducer