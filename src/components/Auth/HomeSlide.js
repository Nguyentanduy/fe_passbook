import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/AuthApi";

const initialState = {
    // contructer
    user=[]
}
export const loginAsync = createAsyncThunk(
    'auth/login',
    async (payload, thunkApi) => {
        try {
            const result = (await authApi.postLogin(payload)).data
            // success
            return result
        } catch (err) {
            // error
        }
    })

export const registerAsync = createAsyncThunk(
    'auth/register',
    async (payload, thunkApi) => {
        try {
            const result = (await authApi.postRegister(payload)).data
            // success
            // thunkApi.dispatch(setUser(result)) // dispath to reducer
            return result
        } catch (err) {
            //error
        }
    })

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
    },
})
const { reducer, actions } = authSlice;
export const { setUser } = actions
export default reducer

