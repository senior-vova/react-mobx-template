import React from "react";
import { Route, Routes } from "react-router";
import { AuthGuard } from "./guards";
import { HomePage, NotFoundPage } from "./pages";
import { Guard } from "./utils/guard";
import { MainAppHoc } from "./utils/main.hoc";

const App = () => {
  return (
    <Routes>
      <Route path={"/profile"} element={Guard(<HomePage />, [AuthGuard])} />
      <Route path={"/auth"} element={<HomePage />} />
      <Route path={"/"} element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainAppHoc(App);
