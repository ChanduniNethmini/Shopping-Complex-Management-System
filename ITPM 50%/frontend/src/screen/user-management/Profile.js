import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

export default function Profile() {
  const [mypics, setPics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:8070/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPics(result.mypost);
      });
  }, []);
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto", textAlign: "center" }}>
      <hr />
      <h4>
        <b>
          <u>My Profile</u>
        </b>
      </h4>
      <div className="row">
        <div className="col">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <div>
              <img
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "80px",
                  marginRight: "50%",
                }}
                src={state ? state.pic : "loading"}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <h5>Hello {state ? state.name : "loading"} !</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
              padding: "5px",
            }}
          ></div>
          <h5>Your email: {state ? state.email : "loading"}</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
              padding: "5px",
            }}
          ></div>
        </div>
      </div>
      <hr />
      <div className="gallery">
        {mypics.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
