import axios from "./axios";

export const getDisposable = async () => {
  const response: any = await axios.get("/disposables");
  return response;
};

export const getOneDisposable = async (id: string) => {
  const response: any = await axios.get(`/disposables/${id}`);
  return response;
};

export const getLiquid = async () => {
  const response: any = await axios.get("/liquid");
  return response;
};

export const getOneLiquid = async (id: string) => {
  const response: any = await axios.get(`/liquid/${id}`);
  return response;
};

export const getPod = async () => {
  const response: any = await axios.get("/pods");
  return response;
};

export const getOnePod = async (id: string) => {
  const response: any = await axios.get(`/pods/${id}`);
  return response;
};

export const getCons = async () => {
  const response: any = await axios.get("/cons");
  return response;
};

export const getOneCons = async (id: string) => {
  const response: any = await axios.get(`/cons/${id}`);
  return response;
};

export const getNiko = async () => {
  const response: any = await axios.get("/nikobooster");
  return response;
};

export const getOneNiko = async (id: string) => {
  const response: any = await axios.get(`/nikobooster/${id}`);
  return response;
};

export const getSnus = async () => {
  const response: any = await axios.get("/snus");
  return response;
};

export const getOneSnus = async (id: string) => {
  const response: any = await axios.get(`/snus/${id}`);
  return response;
};

export const addDisposable = async (fields: any) => {
  const response: any = await axios.post("/disposables", fields);
  return response;
};

export const addLiquid = async (fields: any) => {
  const response: any = await axios.post("/liquid", fields);
  return response;
};

export const addPod = async (fields: any) => {
  const response: any = await axios.post("/pods", fields);
  return response;
};

export const addCons = async (fields: any) => {
  const response: any = await axios.post("/cons", fields);
  return response;
};

export const addNiko = async (fields: any) => {
  const response: any = await axios.post("/nikobooster", fields);
  return response;
};

export const addSnus = async (fields: any) => {
  const response: any = await axios.post("/snus", fields);
  return response;
};

export const updateDisposable = async (fields: any, id: string) => {
  const response: any = await axios.patch(`/disposables/${id}`, fields);
  return response;
};

export const updateLiquid = async (fields: any, id: string) => {
  const response: any = await axios.patch(`/liquid/${id}`, fields);
  return response;
};

export const updatePod = async (fields: any, id: string) => {
  const response: any = await axios.patch(`/pods/${id}`, fields);
  return response;
};

export const updateCons = async (fields: any, id: string) => {
  const response: any = await axios.patch(`/cons/${id}`, fields);
  return response;
};

export const updateNiko = async (fields: any, id: string) => {
  const response: any = await axios.patch(`/nikobooster/${id}`, fields);
  return response;
};

export const updateSnus = async (fields: any, id: string) => {
  const response: any = await axios.patch(`/snus/${id}`, fields);
  return response;
};

export const deleteDisposable = async (id: string) => {
  const response: any = await axios.delete(`/disposables/${id}`);
  return response;
};

export const deleteLiquid = async (id: string) => {
  const response: any = await axios.delete(`/liquid/${id}`);
  return response;
};

export const deletePod = async (id: string) => {
  const response: any = await axios.delete(`/pod/${id}`);
  return response;
};

export const deleteCons = async (id: string) => {
  const response: any = await axios.delete(`/cons/${id}`);
  return response;
};

export const deleteNiko = async (id: string) => {
  const response: any = await axios.delete(`/nikobooster/${id}`);
  return response;
};

export const deleteSnus = async (id: string) => {
  const response: any = await axios.delete(`/snus/${id}`);
  return response;
};

export const auth = async (fields: any) => {
  const response: any = await axios.post(`/manager`, fields);
  return response;
};
