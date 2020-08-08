import React, { useContext } from "react";
import "../SignUp-SignIn.css";

import { authContext } from "../../providers/authProvider/AuthProvider";

const SignIn = () => {
  const { inputs, errors, handleInputsChange, handleSignIn } = useContext(
    authContext
  );
  return (
    <section className="flex-row">
      <form className="frm-blck" action="#" onSubmit={handleSignIn}>
        <h3>SIGN IN</h3>
        <div className="frm-wrp">
          <input
            value={inputs.email}
            onChange={(event) => handleInputsChange(event)}
            type="email"
            name="email"
            className="frm"
            placeholder="Email Address"
            required
          />
          {errors.length > 0
            ? errors.map((message, idx) => (
                <p key={idx} className="red-text">
                  {message}
                </p>
              ))
            : null}
        </div>
        <div className="frm-wrp">
          <input
            value={inputs.password}
            onChange={(event) => handleInputsChange(event)}
            type="password"
            name="password"
            className="frm"
            placeholder="Password"
            required
          />
        </div>
        <div className="frm-wrp">
          <input type="submit" value="SIGN IN" />
        </div>
      </form>
    </section>
  );
};

export default SignIn;
