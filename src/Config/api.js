import axios from "axios"

export const API_BASE_URL="http://localhost:5455"


export const api=axios.create({
  baseURL:API_BASE_URL,
  headers:{
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type":"application/json"

  }
})