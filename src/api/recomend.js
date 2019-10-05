import jsonp from '../utils/jsonp'
import {commomParams,options} from './config'
import axios from 'axios'
export function getRecommomend(){
    const url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data=Object.assign({},commomParams,{
        platform : 'h5',
        uin:0,
        needNewconde:1
    })
    
    return jsonp(url,data,options)
}
export  function getDiscList(){
 return axios.get('/recommend.json')
}
