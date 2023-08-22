import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Admin from "./components/Admin";
import AdminIngredientsList from "./components/Admin/AdminIngredientsList";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sign_in" element={<SignIn />} />
        <Route path="sign_out" element={<SignOut />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/ingredients" element={<AdminIngredientsList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
