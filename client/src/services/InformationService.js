import GenericService from "./GenericService";
class InformationService extends GenericService {
  constructor() {
    super();
  }
  addInformation = (userid,age,income,carownership,currenthouseyears,married,profession,currentjobyears,experience,Houseownership,result) => 
  this.post("informations", {userid,age,income,carownership,currenthouseyears,married,profession,currentjobyears,experience,Houseownership,result});
  
  getInformation = (id) => this.get("informations/" + id);
}

let infromationService = new InformationService();
export default infromationService;
