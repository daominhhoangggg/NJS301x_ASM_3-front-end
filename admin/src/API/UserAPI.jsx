import axiosClient from "./axiosClient";

const UserAPI = {
  getAllData: () => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: (query) => {
    const url = `/users/signup/${query}`;
    return axiosClient.post(url);
  },
  postLogin: (query) => {
    const url = `/users/login/${query}`;
    return axiosClient.post(url);
  },
  putUpdateUser: (query) => {
    const url = `/users/update/${query}`;
    return axiosClient.put(url);
  },
};

export default UserAPI;
