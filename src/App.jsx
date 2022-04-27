import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import About from "./About";

import RegistrationPage from "./Components/registration-page/Registration-page";
import Menu from "./Components/UI/Menu/Menu";
import Toasts from "./Components/Toasts/Toasts";

function App() {
    return (
        <div>
            <Menu/>
            <Toasts/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
