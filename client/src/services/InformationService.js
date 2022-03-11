import GenericService from "./GenericService";
class InformationService extends GenericService {
  constructor() {
    super();
  }
  addInformation = (userid,age,income,carownership,currenthouseyears,profession,currentjobyears,legalstatus,experience,Houseownership) => 
  this.post("informations", {userid,age,income,carownership,currenthouseyears,profession,currentjobyears,legalstatus,experience,Houseownership});
  
  getInformation = (id) => this.get("informations/" + id);
}

let infromationService = new InformationService();
export default infromationService;
