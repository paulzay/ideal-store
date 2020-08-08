import React, { useState } from "react";
import authMethods from "../../components/auth/authMethods";

export const authContext = React.createContext();

const AuthProvider = (props) => {
  let [inputs, setinputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleInputsChange = (event) => {
    let { name, value } = event.target;
    setinputs({ ...inputs, [name]: value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    let res = authMethods.signup(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
    return res;
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    let res = authMethods.signin(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
    return res;
  };

  const handleSignOut = () => {
    let res = authMethods.signout(setErrors, setToken);
    return res;
  };

  return (
    <authContext.Provider
      value={{
        inputs,
        errors,
        token,
        handleInputsChange,
        handleSignUp,
        handleSignIn,
        handleSignOut,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;
