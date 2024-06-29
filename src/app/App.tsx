import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {useTheme} from "@/app/providers/theme";
import {classNames} from "@/shared/lib/classNames/classNames";

const MainPage = lazy(() => import("@/pages/MainPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

            <ul style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
            </ul>

            <Suspense fallback={'loading'}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
