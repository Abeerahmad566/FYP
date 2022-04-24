import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }
  getUser = (id) => this.get("users/" + id);
  updateUser = (_id, data) => this.put("users/updateprofile/" + _id, data);
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
  register = (firstname,lastname, email,phonenumber, password) =>
    this.post("users/register", { firstname,lastname, email,phonenumber, password });

    forget=(email)=>
    this.post("users/forgetpassword",{email})

    newpassword=(token,password)=>
    this.put("users/passwordreset/"+token,password)
    
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
  
}

let userService = new UserService();
export default userService;
