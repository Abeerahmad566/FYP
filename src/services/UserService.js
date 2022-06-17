import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }
  getUser = (id) => this.get("users/" + id);
  getUsers = () => this.get("users/users/");
  getAdmins = () => this.get("users/admins/");
  deleteUser = (id) => this.delete("users/" + id);
  updateUser = (_id, data) => this.put("users/updateprofile/" + _id, data);

  updateUserImg = (id, data) => this.put("users/updateprofileimg/" + id, data);

  updateUserpassword = (_id, data) =>
    this.put("users/updatepassword/" + _id, data);

  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  register = (data) => this.post("users/register", data);

  forget = (email) => this.post("users/forgetpassword", { email });

  newpassword = (id, token, password) =>
    this.post("users/newpassword/" + id + "/" + token, { password });

  confirmation = (id, token) =>
    this.get("users/" + id + "/emailverify/" + token);

  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (
        this.getLoggedInUser().role == "admin" ||
        this.getLoggedInUser().role == "superAdmin"
      )
        return true;
      else return false;
    } else return false;
  };
}

let userService = new UserService();
export default userService;
