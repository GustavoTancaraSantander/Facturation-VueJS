class ProviderService {
    axios
    fontUrl
  
    constructor(axios, url) {
      this.axios = axios
      this.fontUrl = `${url}providers`;
  
    }
    getAll() {
      let iam = this;
      return iam.axios.get(`${iam.fontUrl}`);
    }
    add(model){
      let iam = this;
      return iam.axios.post(`${iam.fontUrl}`, model);
    }
    deleteP(id){
    let iam = this;
    return iam.axios.delete(`${iam.fontUrl}/${id}`);
    }
    get(id){
    let iam = this;
    return iam.axios.get(`${iam.fontUrl}/${id}`);
    }
    updateP(model){
      return this.axios.put(`${this.fontUrl}`, model);
    }
  }
  
  export default ProviderService