import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "../SignUp-SignIn.css";

import { authContext } from "../../providers/authProvider/AuthProvider";

const SignUp = (props) => {
  const { inputs, errors, handleInputsChange, handleSignUp } = useContext(
    authContext
  );

  return (
    <section className="flex-row">
      <form className="frm-blck" action="#" onSubmit={handleSignUp}>
        <h3>SIGN UP</h3>
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
          <input type="checkbox" name="checkbox" />
          <span>Agree to terms and policy</span>
        </div>
        <div className="frm-wrp">
          <input type="submit" value="SIGN UP" />
        </div>
      </form>
    </section>
  );
};

export default withRouter(SignUp);
