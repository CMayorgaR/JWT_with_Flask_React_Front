import { useState, useContext } from "react";
import { Context } from "../Store/appContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { actions, store } = useContext(Context);
  const [user, setUser] = useState();
  /* let navigate = useNavigate(); */

  return (
    <div className="container py-5 h-100">
      <h1> Create an account: </h1>
      <form onSubmit={(e)=>actions.handleSubmitSignUp(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@example.com"
            onChange={(e) => actions.handleSignUp(e)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="At least 8 characters"
            onChange={(e) => actions.handleSignUp(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up!
        </button>
      </form>
    </div>
  );
};

export default SignUp;
