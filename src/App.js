import React, { Suspense  } from "react";
import { Route, Routes  } from "react-router-dom";
import "./App.css";

import Loading from "./components/Loading/Loading";
const Register = React.lazy(() => import("./pages/Register/Register"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const BillRemover = React.lazy(() => import("./components/BillRemover/BillRemover"));
// const Logout = React.lazy(() => import("./pages/Logout/Logout"));
const Payment = React.lazy(() => import("./components/Payment/Payment"));

const App = () => {
  const token = localStorage.getItem("token");
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
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
          <Route
          path="/deleteBill"
          element={
            <Suspense fallback={<Loading />}>
              <BillRemover />
            </Suspense>
          }
        />
      </Routes>
      ;
    </>
  );
};

export default App;
