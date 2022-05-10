import Menu from "./Components/UI/Menu/Menu";
import Toasts from "./Components/Toasts/Toasts";
import LoginModal from "./Components/LoginModal/LoginModal";

import PageContainer from "./Components/Pages/PageContainer";
import { useEffect } from "react";
import AuthService from "./services/AuthService";
import { useDispatch } from "react-redux";
import { setIsAuth, setUserData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    AuthService.isauth().then((response) => {
        dispatch(setIsAuth(true))
        dispatch(setUserData(response.data))
    });
  }, []);
  return (
    <div>
      <Menu />
      <Toasts />
      <LoginModal />
      <PageContainer />
    </div>
  );
}

export default App;
