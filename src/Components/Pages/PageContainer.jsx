import React from "react";
import s from "./PageContainer.module.scss";
import { useSelector } from "react-redux";
import AuthRoutes from "../AuthRoutes";
const PageContainer = () => {
  const isLoaded = useSelector((state) => state.app.isLoaded);
  return (
    <div className={s["page-container"]}>
      {!isLoaded ? <div>Загрузка...</div> : <AuthRoutes />}
    </div>
  );
};

export default PageContainer;
