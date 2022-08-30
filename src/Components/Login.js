import { useState, useContext } from "react";
import { Context } from "../Store/appContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState();
  let navigate = useNavigate();

  return (
    <div className="container py-5 h-100">
      <h1> Log into your account: </h1>
      <form onSubmit={(e)=>actions.handleSubmitLogin(e, navigate)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@example.com"
            onChange={(e) => actions.handleChangeLogIn(e)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="At least 8 characters"
            onChange={(e) => actions.handleChangeLogIn(e)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Log in!
        </button>
      </form>
    </div>
  );
};

export default Login;
