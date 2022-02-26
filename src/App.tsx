import React from "react";
import { Route, Routes } from "react-router";
import { HomePage, NotFoundPage } from "./pages";
import { MainAppHoc } from "./utils/main.hoc";

const App = () => {
  return (
    <Routes>
      <Route path={"/profile"} element={<HomePage />} />
      <Route path={"/auth"} element={<HomePage />} />
      <Route path={"/"} element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainAppHoc(App);
