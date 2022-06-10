import GenericService from "./GenericService";
class InformationService extends GenericService {
  constructor() {
    super();
  }
  addInformation = (data) => this.post("informations", data);
  addCnic = (data) => this.post("informations/uploadcnic", data);
  addCard = (data) => this.post("informations/uploadcard", data);
  getInformation = (id) => this.get("informations/" + id);
  getallInformation = () => this.get("informations/");
  deleteInformation = (id) => this.delete("informations/" + id);
  updateInformation = (id, data) =>
    this.put("informations/updatestatus/" + id, data);
  getpendingInformation = () => this.get("informations/pendingloandata/");
  getuserspictures = (id) => this.get("informations/getuserspictures/" + id);
}

let informationService = new InformationService();
export default informationService;
