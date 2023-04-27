import { createSlice } from '@reduxjs/toolkit'
export const sessionSlice = createSlice({
    name: 'auth/session',
    initialState: {
        token: '',
        signedIn: false,
        user: {},
        roles: [],
    },
    reducers: {
        storeCredentials: (state, action) => {
            state.signedIn = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        signOut: (state) => {
            state.signedIn = false
            state.token = ''
            state.roles = []
            // localStorage.clear()
            window.location.reload()
        },
        setToken: (state, action) => {
            state.token = action.payload.token
        },
        setRoles: (state, action) => {
            state.user = action.payload
        }
    },
})

export const {
    storeCredentials,
    signOut,
    setToken,
    setRoles
} = sessionSlice.actions

export default sessionSlice.reducer