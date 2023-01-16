import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    activeRoute: 'homepage'
}
export const routeControllerSlice = createSlice({
    name: 'routeController',
    initialState,
    reducers: {
        setActiveRoute: (state, action) => {
            state.activeRoute = action.payload
        }
    }
})
export const { setActiveRoute } = routeControllerSlice.actions
export default routeControllerSlice.reducer