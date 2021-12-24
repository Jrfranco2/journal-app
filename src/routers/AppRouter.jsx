import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import RingLoader from "react-spinners/RingLoader";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RingLoader color={"#5c6cc5"} size={50} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute isAuth={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const PublicRoute = ({ isAuth, children }) => {
  return isAuth ? <Navigate to="/" /> : children;
};

const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/auth/login" />;
};

export default AppRouter;
