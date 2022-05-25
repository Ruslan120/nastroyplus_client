import Menu from "./Components/UI/Menu/Menu";
import Toasts from "./Components/Toasts/Toasts";
import LoginModal from "./Components/LoginModal/LoginModal";

import PageContainer from "./Components/Pages/PageContainer";
import { useEffect } from "react";
import AuthService from "./services/AuthService";
import { useDispatch } from "react-redux";
import { setIsAuth, setIsLoaded, setUserData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoaded(true));
    AuthService.isauth().then((response) => {
      dispatch(setIsAuth(true));
      dispatch(setUserData(response.data));
      dispatch(setIsLoaded(false));
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
