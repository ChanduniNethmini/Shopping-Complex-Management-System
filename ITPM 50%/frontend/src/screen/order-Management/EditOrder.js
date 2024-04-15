import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./myStyles.css";

export default class EditOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      postalNo: "",
      street: "",
      town: "",
      contactNo: "",
      orderDate: "",
      status: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const { name, postalNo, street, town, contactNo, orderDate, status } =
      this.state;

    const data = {
      name: name,
      postalNo: postalNo,
      street: street,
      town: town,
      contactNo: contactNo,
      orderDate: orderDate,
      status: status,
    };

    console.log(data);
    const re = /^[0-9\b]+$/;
    if (
      name == "" ||
      postalNo == "" ||
      street == "" ||
      town == "" ||
      contactNo == "" ||
      orderDate == ""
    ) {
      swal(
        "Please fill the form correctly",
        "Form values cannot be empty",
        "error"
      );
    } else if (name.length < 2) {
      swal("User name invalid", "length should be greater than 2", "error");
    } else if (!re.test(String(contactNo)) || contactNo.length != 10) {
      swal(
        "Contact Number invalid",
        "contact number should be valid pattern",
        "error"
      );
    } else if (town.length < 2) {
      swal(
        " Please enter valid town",
        "length should be greater than 2",
        "error"
      );
    } else {
      axios
        .put(`http://localhost:8070/order/update/${id}`, data)
        .then((res) => {
          if (res.data.success) {
            swal("Update Successful", "Update is recorder", "success");
            this.setState({
              name: "",
              postalNo: "",
              street: "",
              town: "",
              contactNo: "",
              orderDate: "",
              status: "",
            });
          }
        });
    }
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:8070/order/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.post.name,
          postalNo: res.data.post.postalNo,
          street: res.data.post.street,
          town: res.data.post.town,
          contactNo: res.data.post.contactNo,
          orderDate: res.data.post.orderDate,
          status: res.data.post.status,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <br />
          <div style={{ fontSize: "15px" }}>
            <a href="/order/home" class="previous" style={{ color: "white" }}>
              &laquo; Previous
            </a>
          </div>
          <div className="container cont">
            <div className="cardmy">
              <div
                className="card card1"
                style={{ width: "50%", marginRight: "50%" }}
              >
                <div className="card-body">
                  <div className="col-md-8 mt-4 mx-auto">
                    <h1
                      className="h3 mb-3 font-weight-normal text-center"
                      style={{ fontSize: "29px" }}
                    >
                      Order Detail Edit Form{" "}
                    </h1>
                    <form className="needs-validation">
                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label
                          style={{ marginBottom: "5px" }}
                          className="topic"
                        >
                          Customer Name:{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Enter Your Name"
                          value={this.state.name}
                          readonly
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <label style={{ marginBottom: "5px" }} className="topic">
                        Address:{" "}
                      </label>
                      <div class="row">
                        <div class="col">
                          <input
                            type="text"
                            className="form-control "
                            name="postalNo"
                            placeholder="postal no"
                            value={this.state.postalNo}
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            className="form-control"
                            name="street"
                            placeholder="street"
                            value={this.state.street}
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            className="form-control"
                            name="town"
                            placeholder="town"
                            value={this.state.town}
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </div>

                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label
                          style={{ marginBottom: "5px" }}
                          className="topic"
                        >
                          Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="contactNo"
                          placeholder="Enter Contact Number"
                          value={this.state.contactNo}
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label
                          style={{ marginBottom: "5px" }}
                          className="topic"
                        >
                          Order Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          name="orderDate"
                          placeholder="Date"
                          value={this.state.orderDate}
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label
                          style={{ marginBottom: "5px" }}
                          className="topic"
                        >
                          Status
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="status"
                          placeholder="pending"
                          value={this.state.status}
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <br />

                      <div className="text-center">
                        <button
                          className="btn btn-success textsize"
                          type="submit"
                          style={{
                            marginTop: "10px",
                            width: "200px",
                            height: "40px",
                          }}
                          onClick={this.onSubmit}
                        >
                          <i className="far fa-check-square"></i>
                          &nbsp; Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
