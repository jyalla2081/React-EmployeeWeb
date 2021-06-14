import axios from "axios";

const ENDPOINT = "http://localhost:8080/display";

class EmployeeService {
  getAllEmployees() {
    return axios.get(ENDPOINT);
  }
}

export default new EmployeeService();
