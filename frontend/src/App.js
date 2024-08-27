import HomePage from "./pages/HomePage";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import PaymentPage from "./pages/PaymentPage";
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import "./App.css";
import { useSelector } from "react-redux";
import Error from "./components/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <Signup />
            ) : (
              <Error errorMessage="You are already logged in. Great :))" />
            )
          }
        />

        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login />
            ) : (
              <Error errorMessage="You are already logged in. Great :))" />
            )
          }
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
