import Menu from "./Components/Menu/Menu";
import Toasts from "./Components/Toasts/Toasts";
import LoginModal from "./Components/LoginModal/LoginModal";
import PageContainer from "./Components/Pages/PageContainer";
import {useEffect} from "react";
import AuthService from "./services/AuthService";
import {useDispatch} from "react-redux";
import {setIsAuth, setIsLoaded, setUserData} from "./redux/actions";
import OrderModal from "./Components/OrderModal/OrderModal";
import s from "./App.module.scss"
import Footer from "./Components/Footer/Footer";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        AuthService.isauth().then((response) => {
            dispatch(setIsAuth(true));
            dispatch(setUserData(response.data));
        }).finally(()=>{
            dispatch(setIsLoaded(true));
        });
    }, []);
    return (
        <div className={s["app"]}>
            <Menu/>
            <Toasts/>
            <LoginModal/>
            <OrderModal/>
            <PageContainer/>
            <Footer/>
        </div>
    );
}

export default App;
