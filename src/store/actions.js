import {GETDATA,GETCATEGORY} from './mutations-types'
import {getIndex,getCate} from "../api/index";

export default {
  //获取首页数据请求
  async getMsg ({commit}) {
    const result = await getIndex()
    console.log('result',result.data);
    if(result.code===0){
      commit(GETDATA,result.data)
    }
  },

  //获取分类数据请求
  async getCate ({commit}) {
    const result = await getCate()
    console.log(result.data);
    if(result.code ===0) {
      commit(GETCATEGORY,result.data)
    }
  }

}
