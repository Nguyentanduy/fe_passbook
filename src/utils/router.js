import ForgotPassword from "../components/Auth/ForgotPassword/ForgotPassword";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../containers/Client/page/Home/Home";

export const routerList = [
    {
        path: '/',
        name: 'home',
        displayName: 'Home',
        element: <Home />,
        exact: true
    },
    {
        path: '/login',
        name: 'login',
        displayName: 'Login',
        element: <Login />,
        exact: true
    },
    {
        path: '/register',
        name: 'register',
        displayName: 'Register',
        element: <Register />,
        exact: true
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        displayName: 'ForgotPassword',
        element: <ForgotPassword />,
        exact: true
    },
]