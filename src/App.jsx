import Menu from "./Components/UI/Menu/Menu";
import Toasts from "./Components/Toasts/Toasts";
import LoginModal from "./Components/LoginModal/LoginModal";

import PageContainer from "./Components/Pages/PageContainer";

function App() {
    return (
        <div>
            <Menu/>
            <Toasts/>
            <LoginModal/>
            <PageContainer/>
        </div>
    );
}

export default App;
