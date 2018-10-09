import Axios from 'axios'
import UserService from '../service/UserService'
import ClientService from '../service/ClientService'
import ProviderService from '../service/ProviderService'
import ProductService from '../service/ProductService'
import BuyService from '../service/BuyService';




//configurar axios
let url = 'http://localhost:51894/'
Axios.defaults.headers.common.Accept = 'application/json'

export default {
  UserService: new UserService(Axios, url),
  ClientService: new ClientService(Axios, url),
  ProviderService: new ProviderService(Axios, url),
  ProductService: new ProductService(Axios, url),
  BuySercive: new BuyService(Axios,url)
  

}
