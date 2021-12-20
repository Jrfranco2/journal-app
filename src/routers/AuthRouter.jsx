import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="/auth">
            <Route path="register" element={<RegisterScreen />} />
            <Route path="login" element={<LoginScreen />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
