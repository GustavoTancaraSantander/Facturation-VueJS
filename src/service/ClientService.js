class ClientService {
    axios
    fontUrl
  
    constructor(axios, url) {
      this.axios = axios
      this.fontUrl = `${url}clients`;
  
    }
    getAll() {
      let iam = this;
      return iam.axios.get(`${iam.fontUrl}`);
    }
    add(model){
      let iam = this;
      return iam.axios.post(`${iam.fontUrl}`, model);
    }
    deleteT(id){
      let iam = this;
      return iam.axios.delete(`${iam.fontUrl}/${id}`);
    }
    updateT(model) {
      return this.axios.put(`${this.fontUrl}`,model);
    }
    get(id){
      return this.axios.get(`${this.fontUrl}/${id}`);
    }
  }
  
  export default ClientService