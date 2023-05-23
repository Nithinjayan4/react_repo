import { configureStore } from "@reduxjs/toolkit";
import  repositoriesReducer from '../Redux/Reducer'


const store =configureStore({
    reducer:{
        repositories:repositoriesReducer,
    },
});

export default store;