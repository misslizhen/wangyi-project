import {GETDATA,GETCATEGORY} from "./mutations-types";

export default {

  [GETDATA] (state,firstViewMsg) {
    state.firstViewMsg = firstViewMsg
  },

  [GETCATEGORY] (state,cate) {
    state.cate = cate
  }


}
