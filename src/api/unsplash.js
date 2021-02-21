import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID g55F7p6C6b3_zMP4ShUCKdoyI6C_nNrkf_GMD4dLp_0",
  },
});
