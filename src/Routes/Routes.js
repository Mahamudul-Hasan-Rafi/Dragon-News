import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Terms from "../Pages/Terms/Terms";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-beta-mauve.vercel.app/news-categories')
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-beta-mauve.vercel.app/category/${params.id}`)
            },

            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-beta-mauve.vercel.app/news/${params.id}`)
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/terms',
                element: <Terms></Terms>
            },

            {
                path: '/profile',
                element: <Profile></Profile>
            }

        ]
    }
]);