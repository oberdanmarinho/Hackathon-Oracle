import axios from "axios";

export default axios.create({
  url: "https://lab-axcemqltmwdh-px.integration.us-phoenix-1.ocp.oraclecloud.com/ic/api/integration/v1/flows/rest/RESTAURANTE_API/1.0",
  headers: {
    "Content-type": "application/json",
  },
});