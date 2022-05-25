import React from "react";
import "./PageContainer.scss";
import { Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthRoutes from "../AuthRoutes";
const PageContainer = () => {
  const isLoaded = useSelector((state) => state.app.isLoaded);
  return (
    <div className="page-container">
      {isLoaded ? <div>Загрузка...</div> : <AuthRoutes />}
    </div>
  );
};

export default PageContainer;
