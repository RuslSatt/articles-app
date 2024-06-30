import './styles/index.scss'
import {lazy} from "react";
import {useTheme} from "@/app/providers/theme";
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "@/widgets/Navbar";

const MainPage = lazy(() => import("@/pages/MainPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
