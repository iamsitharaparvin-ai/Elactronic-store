import axios from "axios";

const axiosinstance = () => {
  return axios.get("https://fakestoreapi.com/products/category/electronics");
};

export default axiosinstance;