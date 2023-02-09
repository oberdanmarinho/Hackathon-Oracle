
import httpCommon from './http-common.js';

const create = data => {
  return httpCommon.post("/crestaurante",data)
}


const httpService = {
  create
};

export default httpService;