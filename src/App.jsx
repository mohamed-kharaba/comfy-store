import { ErrorElement } from "./components";
import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders } from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";

// Actions

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

import { store } from "./store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader,
            },
            {
                path: "products",
                element: <Products />,
                loader: ProductsLoader,
            },
            {
                path: "products/:id",
                element: <SingleProduct />,
                loader: SingleProductLoader,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            { path: "about", element: <About /> },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        action: loginAction(store),
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
        action: registerAction,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
