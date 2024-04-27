

import ErrorPage from "../pages/error/ErrorPage"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";

export const HomeRoute = {
	path: "/",
	name: "Home Route",
	element: <Home />,
	protectedRoute: false
}

export const ErrorRoute = {
	path: "/error",
	name: "Error",
	element: <ErrorPage />,
	protectedRoute: false,
}

export const LoginRoute = {
	path: "/login",
	name: "Login",
	element: <Login />,
	protectedRoute: false,
}

export const routes = [
    HomeRoute,
	ErrorRoute,
	LoginRoute
]
