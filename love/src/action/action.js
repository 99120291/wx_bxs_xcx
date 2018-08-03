import * as api from '../api/api'

/***
 * 获取用户信息
 */
export const getUserInfo = async (code, encryptedData, iv) => {
  // 异步获取远程数据
  let result = await api.getUserInfo(code, encryptedData, iv)

  if(result && result.status == 1){
    // 获取用户信息成功
    let userinfo = JSON.parse(result.data)

    return userinfo
  }
}

export const getStoreList2 = async (storeId) => {
  let result = await api.getStoreList2(storeId)
  return result
}
/***
 * 获取店铺信息
 */
export const getStoreById = async (leagueId) => {
  // 异步获取远程数据
  let result = await api.getStoreById(leagueId)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 获取房源列表
 */
export const getPanoList = async (leagueId, type, index, size, key) => {
  // 异步获取远程数据
  let result = await api.getPanoList(leagueId, type, index, size, key)
  if(result && result.head.code == 1){
    return result
  }
}

/***
 * 获取门店列表
 */
export const getStoreList = async (leagueId) => {
  // 异步获取远程数据
  let result = await api.getStoreList(leagueId)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 获取经纪人列表
 */
export const getBrokerList = async (leagueId) => {
  // 异步获取远程数据
  let result = await api.getBrokerList(leagueId)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 通过ID获取用户信息
 */
export const getUserInfoById = async (userId) => {
  // 异步获取远程数据
  let result = await api.getUserInfoById(userId)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 通过ID获取用户房源列表
 */
export const getUserHouseList = async (userId) => {
  // 异步获取远程数据
  let result = await api.getUserHouseList(userId)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 获取门店推荐房源
 */
export const getStoreRecommendHouse = async (leagueId) => {
  // 异步获取远程数据
  let result = await api.getStoreRecommendHouse(leagueId)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 记录访问足记
 */
export const addVisitFoot = async (appid, openid, vtourId) => {
  // 异步获取远程数据
  let result = await api.addVisitFoot(appid, openid, vtourId)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 获取访问足记
 */
export const getVisitFoot = async (appid, openid) => {
  // 异步获取远程数据
  let result = await api.getVisitFoot(appid, openid)
  if(result && result.head.code == 1){
    return result
  }
}

/***
 * 记录联系记录
 */
export const addContactRecord = async (appid, openid, userId, type) => {
  // 异步获取远程数据
  let result = await api.addContactRecord(appid, openid, userId, type)
  if(result && result.head.code == 1){
    return result.body.data
  }
}

/***
 * 获取联系记录
 */
export const getContactRecord = async (appid, openid) => {
  // 异步获取远程数据
  let result = await api.getContactRecord(appid, openid)
  if(result && result.head.code == 1){
    return result
  }
}

/***
 * 获取收藏记录
 */
export const getCollectionRecord = async (appid, openid, index, size) => {
  // 异步获取远程数据
  let result = await api.getCollectionRecord(appid, openid, index, size)
  if(result && result.head.code == 1){
    return result
  }
}

/***
 * 根据地理位置获取门店列表
 */
export const getStoreByLocation = async (lng, lat) => {
  // 异步获取远程数据
  let result = await api.getStoreByLocation(lng, lat)
  if(result && result.head.code == 1){
    return result.body.data
  }
}
