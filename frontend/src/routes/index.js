

import ErrorPage from "../pages/error/ErrorPage"
import Home from "../pages/home/Home"

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

export const routes = [
    HomeRoute,
	ErrorRoute
]
