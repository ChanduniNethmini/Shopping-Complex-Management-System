import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import { UserContext } from "../../App";

export default function SignIn() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = () => {
    if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#d50000 red accent-4" });
      return;
    }
    fetch("http://localhost:8070/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "red" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({ html: "Signedin successfully", classes: "green dark" });
          if (email === "admin@gmail.com") {
            navigate("/admin_dashboard"); // Navigate to admin dashboard
          } else {
            navigate("/"); // Navigate to home or another page for regular users
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-8"
          style={{ backgroundColor: "#ffebee red lighten-5" }}
        >
          <div className="bCard">
            <div data-testid="sign-1" className="card lCard input-field ">
              <h4>
                <b>SignIn</b>
              </h4>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <button
                className="btn waves-effect waves-light #bf360c deep-orange darken-4"
                onClick={() => PostData()}
              >
                LOGIN
              </button>
              <br />
              <Link to="/signup">Don't have an account ?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
