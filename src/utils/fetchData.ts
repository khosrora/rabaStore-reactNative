import axios from 'axios'

const baseAPI : string = `https://17fe-2-181-168-5.eu.ngrok.io/`

export const postAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.post(`${baseAPI}/api/${url}`, post, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res;
}


export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`${baseAPI}/api/${url}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res;
}

export const patchAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.patch(`${baseAPI}/api/${url}`, post, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res;
}


export const putAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.put(`${baseAPI}/api/${url}`, post, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res;
}


export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`${baseAPI}/api/${url}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res;
}