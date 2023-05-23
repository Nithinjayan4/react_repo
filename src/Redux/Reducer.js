import { createSlice } from "@reduxjs/toolkit";


const repositoriesSlice =createSlice({

    name: 'repositories',
    initialState:{ repos : [], currentPage : 1,filter: '',
    sort: '', repo:null}
   ,

    reducers: {
        setRepositories:(state,action)=>{
         state.repos= action.payload
        },
        setCurrentPage:(state,action)=>{
            state.currentPage=action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
          },
          setSort: (state, action) => {
            state.sort = action.payload;
          },
          setRepo: (state, action) => {
            state.repo=action.payload;
          },

    }
})
export const {setRepositories,setCurrentPage,setFilter,setSort,setRepo}=repositoriesSlice.actions;
export default repositoriesSlice.reducer;
