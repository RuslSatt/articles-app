import './styles/index.scss'
import {Suspense} from "react";
import {useTheme} from "@/app/providers/theme";
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "@/widgets/Navbar";
import {Sidebar} from "@/widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback={''}>
                <div className="content-page">
                    <Sidebar/>
                    <div className='page-wrapper'>
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
            <Navbar/>
        </div>
    );
};

export default App;
