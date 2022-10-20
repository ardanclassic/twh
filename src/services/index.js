import axios from 'axios'

export const ACTION_GET = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        console.log(err.response, '@error')
        reject({ ...err.response.data, status: err.response.status })
      })
  })
}

const BASE_URL = "https://api.belajartableau.com/api/WarehouseReps"

export const GET_WAREHOUSE_LIST = () => {
  let url = `${BASE_URL}`
  return new Promise((resolve, reject) => {
    ACTION_GET(url)
      .then((result) => {
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const GET_WAREHOUSE_DETAIL = (id) => {
  let url = `${BASE_URL}/${id}`
  return new Promise((resolve, reject) => {
    ACTION_GET(url)
      .then((result) => {
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
  })
}