import setRouter from './enhance-files/router';
import store from './enhance-files/store';
// import axios from 'axios'

// const baseUrl = 'http://localhost:1337/tests'
// const axiosConfig = {
//   baseUrl: baseUrl,
//   headers: { 'Content-Type': 'application/json' },
//   responseType: 'json'
// }
// const axiosBase = () => {
//   const api = axios.create(axiosConfig)
//   return api
// }

export default ({ Vue, options, router, siteData }) => {
  // Vue.prototype.$http = axiosBase()

  Vue.mixin({ store: store });

  setRouter(router);
};
