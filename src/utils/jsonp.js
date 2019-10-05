import originJSONP from 'jsonp'

export default function jsonp(url,data,option){
      url+=(url.indexOf('?')<0 ?'?':'&')+param(data)
      return new Promise((reslove,reject)=>{
           originJSONP(url,option,(err,response)=>{
               if(!err){
                 reslove(response)
               }else{
                   reject(err)
               }
           })
    }).catch(err=>{
        console.log(reject(error))
    })
}

function param(data){
    let url=''
    for(let k in data){
        let value=data[k]!==undefined?data[k]:''
        url+=`&${k}=${encodeURIComponent(value)}`
    }
    return url?url.substring(1):''
}
