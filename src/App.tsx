import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AboutPage from "./components/AboutPage/AboutPage";

const App = () => {
    return (
        <div className="App">

            <ul style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
            </ul>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
};

export default App;
