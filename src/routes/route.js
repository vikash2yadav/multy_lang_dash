import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";

export const routes = [
    {
        key: "my_profile",
        displayName: "My Profile",
        link: "/login",
        showOnSideBar: true,
        component: <Login />
    },
    {
        key: "my_profile",
        displayName: "My Profile",
        link: "/register",
        showOnSideBar: true,
        component: <Register />
    },
    {
        key: "my_profile",
        displayName: "My Profile",
        link: "/forgot_password",
        showOnSideBar: true,
        component: <ForgotPassword />
    },
    {
        key: "my_profile",
        displayName: "My Profile",
        link: "/reset_password",
        showOnSideBar: true,
        component: <ResetPassword />
    },
    {
        key: "my_profile",
        displayName: "My Profile",
        link: "/dashboard",
        showOnSideBar: true,
        component: <h1>Dashboard</h1>
    },
]