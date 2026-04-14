import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import TimeLine from "../components/TimeLine/TimeLine";
import HomePage from "../components/HomePage/HomePage";

export const router=createBrowserRouter([
    {
        path:'/',
        element: <RootLayout></RootLayout>,
        children:[
            {
             path:'/',
             element:<HomePage></HomePage>
            },
            {
                path:'/TimeLine',
                element:<TimeLine></TimeLine>
            },
            {
                path:'/stats',
                element: <h2>Hello stats</h2>
            }
        ]
    }

])