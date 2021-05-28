import CONFIG from './config';

const API_ENDPOINT = {
  GETALL: `${CONFIG.BASE_URL}list`,
  GETDETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POSTREVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
