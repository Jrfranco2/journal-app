import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div>
      <h3 className="auth__title mb-5">Register</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="new-password"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link mb-5">
          Already Register
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
