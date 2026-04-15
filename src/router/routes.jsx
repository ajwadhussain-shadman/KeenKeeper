import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import TimeLine from "../components/TimeLine/TimeLine";
import HomePage from "../components/HomePage/HomePage";
import FriendCardDetail from "../components/shared/FriendCardDetail";
import Stats from "../components/stats/Stats";

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
                element:<Stats></Stats>
            },
            {
                path:'/Friends/:id',
                element:<FriendCardDetail></FriendCardDetail>
            }
        ]
    }

])