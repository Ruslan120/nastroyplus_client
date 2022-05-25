import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, noAuthRoutes, publicRoutes } from "../routes";


export default function AuthRoutes() {
  const isAuth = useSelector((state) => state.app.isAuth);
  return (
    <Routes>
      {isAuth
        ? authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))
        : noAuthRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
