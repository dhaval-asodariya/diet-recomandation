import { combineReducers } from "@reduxjs/toolkit";

import UserDataSlice from "./UserDataSlice";
const rootReducer = combineReducers({
    
    UserData:UserDataSlice,
})

export default rootReducer