import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "Marco",
    email: "jonathan.franco@devsu.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("formulario valido");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("Name required");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Email no valido");
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log(
        "Password should be at least 6 characteres and match each other"
      );
      return false;
    }
    return true;
  };

  return (
    <div>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola mundo</div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="new-password"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="new-password"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
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
