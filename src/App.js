import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Loading from "./components/Loading/Loading";
const Register = React.lazy(() => import("./pages/Register/Register"));
const Login = React.lazy(() => import("./pages/Login/Login"));
// const Logout = React.lazy(() => import("./pages/Logout/Logout"));
const Payment = React.lazy(() => import("./components/Payment/Payment"));

const App = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  useEffect( ()=>  { 
    navigate('/')
    // eslint-disable-next-line
  }, [token])
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <Suspense fallback={<Loading />}>
                <Payment />
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            )
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
      ;
    </>
  );
};

export default App;
