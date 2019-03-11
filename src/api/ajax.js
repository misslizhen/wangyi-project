import axios from 'axios'
export default function (url,data={},methods='GET') {
  return new Promise((resolve,reject)=>{
    let promise
    if(methods === 'GET'){
      console.log(url, '测试');
      promise = axios.get(url,{params:data})
    }else {
      promise = axios.post(url,data)
    }
    promise
      .then((response)=>{
        resolve(response.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  })
}
