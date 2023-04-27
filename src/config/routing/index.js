import { mockSetup } from "config/common"
import { useSelector } from "react-redux"
import authenticatedRoutes from "./authenticatedRoutes"
import unauthenticatedRoutes from "./unauthenticatedRoutes"

export default function GetRoutes() {
    const { session } = useSelector(state => state.auth)
    let routeList = []
    if (mockSetup.enableMock) {
        routeList = (session.token !== '' && session.signedIn) ? mockSetup.mockRoutes.authenticated : mockSetup.mockRoutes.unauthenticated
    }
    else {
        routeList = (session.token !== '' && session.signedIn) ? authenticatedRoutes : unauthenticatedRoutes
    }
    return routeList
}