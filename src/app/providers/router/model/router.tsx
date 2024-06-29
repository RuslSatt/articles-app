import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";
import {RouteProps} from "react-router-dom";
import {AppRoutes, routesPath} from "@/shared/config/router/routerConfig";

export const router: Array<RouteProps> = [
    {
        path: routesPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: routesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
]
