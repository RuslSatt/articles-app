import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

const MainPage = lazy(() => import("./components/MainPage/MainPage"));
const AboutPage = lazy(() => import("./components/AboutPage/AboutPage"));

const App = () => {
    return (
        <div className="App">

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
