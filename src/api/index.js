import Axios from "axios";

// export const api = Axios.create({
//   baseURL: `https://reqres.in/api`
// });

// export const APIgetData = () => api.get("/users");
// export const APIgetDataDetail = (id) => api.get("/users/" + id);
// export const APIcreateData = (data) => api.post("/users", data);
// export const APIupdateData = (id, data) => api.patch("/users/" + id, data);
// export const APIdeleteData = (id) => api.delete("/users/" + id);
export const api = Axios.create({
  baseURL: `https://reqaid.com/api`
});

export const APIgetData = () => api.get("/FakePosts");
export const APIgetDataDetail = (id) => api.get("/FakePosts/" + id);
export const APIcreateData = (data) => api.post("/FakePosts", data);
export const APIupdateData = (id, data) => api.patch("/FakePosts/" + id, data);
export const APIdeleteData = (id) => api.delete("/FakePosts/" + id);

export const api_loc = Axios.create({
  baseURL: `https://dev.farizdotid.com/api/daerahindonesia`
});

export const APILocationProvince = () => api_loc.get("/provinsi");
export const APILocationRegency = (id_province) =>
  api_loc.get("/kota?id_provinsi=" + id_province);
export const APILocationSubDistrict = (id_regency) =>
  api_loc.get("/kecamatan?id_kota=" + id_regency);
export const APILocationUrbanVillage = (id_sub_district) =>
  api_loc.get("/kelurahan?id_kecamatan=" + id_sub_district);
