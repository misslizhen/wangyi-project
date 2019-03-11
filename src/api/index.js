import ajax from './ajax'

// 首页获取数据api
export const getIndex = () => ajax('/index')

//分类获取数据api
export const getCate = (cateList) => ajax('/cate',{cateList})

