import Login from "../../views/auth/login";
import SignUp from "../../views/auth/signup";
import Home from "../../views/home";

export default [
    {
        element: <Login />,
        key: 'login',
        path: '/login',
        title: 'Login',
        isRoot: false,
        icon: '',
        roles: [],
        items: []
    },
    {
        element: <SignUp />,
        key: 'signUp',
        path: '/signUp',
        title: 'Login',
        isRoot: false,
        icon: '',
        roles: [],
        items: []
    },
    {
        element: <Home />,
        key: 'home',
        path: '/home',
        title: 'Home',
        isRoot: true,
        icon: '',
        roles: [],
        items: []
    },
]