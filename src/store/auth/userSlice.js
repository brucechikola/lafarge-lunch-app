import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    userData: {}
}

export const userSlice = createSlice({
    name: 'auth/user',
    initialState,
    reducers: {
        setUserData: (state, action) => action.payload,
        userLoggedOut: () => initialState,
    },
})
export const { setUserData } = userSlice.actions
export default userSlice.reducer