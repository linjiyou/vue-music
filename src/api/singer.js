
import { options,commomParams } from "./config"
import axios from "axios"

export function getSingerList() {
   return axios.get('/singer.json')   
}