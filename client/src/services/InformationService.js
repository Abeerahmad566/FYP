import GenericService from "./GenericService";
class InformationService extends GenericService {
  constructor() {
    super();
  }
  addInformation = (age,income,carownership,currenthouseyears,profession,currentjobyears,legalstatus,experience,Houseownership) => 
  this.post("informations", {age,income,carownership,currenthouseyears,profession,currentjobyears,legalstatus,experience,Houseownership});
  
  getSingleInformation = (id) => this.get("informations/" + id);
}

let infromationService = new InformationService();
export default infromationService;
