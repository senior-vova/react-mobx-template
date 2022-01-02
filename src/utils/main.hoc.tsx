import React from "react";
import { BrowserRouter } from "react-router-dom";

export const MainAppHoc = (Component: React.FC) => (props: any) => {
  return (
    <BrowserRouter>
      <Component {...props} />
    </BrowserRouter>
  );
};
