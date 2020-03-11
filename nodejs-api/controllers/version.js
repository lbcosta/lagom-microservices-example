const axios = require("axios");

module.exports = {
  getVersion(_, res) {
    res.json({
      sptransVersion: axios.defaults.apiVersion
    });
  }
};
