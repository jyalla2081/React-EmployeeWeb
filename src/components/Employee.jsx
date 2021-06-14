import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeList: [] };
  }

  componentDidMount() {
    EmployeeService.getAllEmployees().then((response) => {
      this.setState({ employeeList: response.data });
    });
  }

  render() {
    console.log(this.state.employeeList);
    return (
      <React.Fragment>
        <h1>Employee List</h1>
        <br></br>
        <a className="btn btn-primary" href="#">
          Add
        </a>
        <table className="table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map((x) => (
              <tr key={x.sno}>
                <td>{x.sno}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Employee;
