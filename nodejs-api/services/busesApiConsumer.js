const axios = require("axios");

const API_VERSION = process.env.API_VERSION || "v2.1";

const BusesAPIConsumer = axios.create({
  baseURL: `http://api.olhovivo.sptrans.com.br/${API_VERSION}`,
  withCredentials: true
});

axios.defaults.withCredentials = true;
axios.defaults.apiVersion = API_VERSION;

BusesAPIConsumer.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await BusesAPIConsumer.post(
          "/Login/Autenticar",
          {},
          {
            params: { token: process.env.API_OLHO_VIVO_TOKEN }
          }
        );

        const { data: isAuthenticated } = response;

        if (isAuthenticated) {
          BusesAPIConsumer.defaults.headers.common["Cookie"] =
            response.headers["set-cookie"][0];
        }

        return axios(originalRequest);
      } catch {
        return axios(originalRequest);
      }
    }
  }
);

module.exports = BusesAPIConsumer;
