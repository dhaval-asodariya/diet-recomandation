import { createSlice } from "@reduxjs/toolkit";

const initialState={
    NextUserId:1,
    LoggedInId:0,
    LoggedInObj:[],
    isAdminLog:false,
    // itemsInCartLoggedIn:[],
    AllUserData:[]

}

const UserDataSlice = createSlice({
    name:'UserData',
    initialState,
    reducers:{
        setAllUserData(state,action){
           const newData = action.payload;
           newData.id = state.NextUserId;
            state.AllUserData.push(newData);
            state.NextUserId+=1;
            const allData = state.AllUserData
           console.log('data registered',allData)
        },
        setLoggedInData(state,action){
            state.LoggedInObj= action.payload;
            state.isAdminLog = false;
        },
        setAdminLog(state,action){
            state.isAdminLog = action.payload;
        }

    }
})
export const {setAllUserData,setLoggedInData,setAdminLog}= UserDataSlice.actions
export default UserDataSlice.reducer
