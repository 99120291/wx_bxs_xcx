import wepy from 'wepy'
import interfaces from '../utils/login'
import {LEAGUE_ID} from '../common/config'
import {getStoreById, getStoreByLocation} from '../action/action'
/***
 * 注意：
 * 1. 默认式混合：对于组件data数据，components组件，events事件以及其它自定义方法采用默认式混合，即如果组件未声明该数据，组件，事件，自定义方法等，那么将混合对象中的选项将注入组件这中。对于组件已声明的选项将不受影响。
 * 2. 兼容式混合：对于组件methods响应事件，以及小程序页面事件将采用兼容式混合，即先响应组件本身响应事件，然后再响应混合对象中响应事件。
 */
export default class BaseMixin extends wepy.mixin {
  data = {
    leagueId: '',
    userInfo: '',
    store: '',
    shareTitle: '房产门店',
    sharePath: '/pages/recommend',
    shareImage: ''
  }

  methods = {
    tap () {
      console.log('mixin method tap')
    }
  }

  computed = {
  }

  watch = {
  }

  onShow() {
  }

  async onLoad() {
    // 初始化
    // 设置用户信息
    this.userInfo = await interfaces.login()
    // 设置店铺信息
    this.store = await this.getStore()
    // 设置组织ID
    this.leagueId = await this.getLeagueId()

    // 在函数运行周期之外的函数里去修改数据需要手动调用$apply方法。
    this.$apply()

    // 开启转发按钮
    wepy.showShareMenu({
      withShareTicket: true
    })
  }

  // 获取用户信息
  getUserInfo () {
    return interfaces.login()
  }

  // 设置店铺信息
  async getStore () {
    // 设置店铺信息
    let store = wepy.getStorageSync('store')
    if(!store){
      // 根据地理位置获取门店列表
      let storeList = await this.getStoreByLocation()
      if (storeList) {
        // 获取最近的店铺
        store = storeList[0]
      } else {
        // 根据ID获取 store 信息
        store = await getStoreById(LEAGUE_ID)
      }
      // 将选择的门店存储在本地
      await wepy.setStorage({
        key: 'store',
        data: store
      })
    }
    return store
  }

  // 根据地理位置获取门店列表
  async getStoreByLocation () {
    // 获取地理位置信息
    let location = await this.getLocation()
    if(location){
      // 根据地理位置获取门店列表
      let storeList = await getStoreByLocation(location.longitude, location.latitude)
      if(storeList){
        return storeList
      }
    }
  }

  // 获取地理位置信息
  async getLocation () {
    try {
      let location = await wepy.getLocation({type: 'wgs84'})
      return location
    }catch (e) {
      console.log(e)
    }
  }

  // 获取组织ID
  async getLeagueId () {
    let store = await this.getStore()
    if(store){
      return store.id
    }else{
      return LEAGUE_ID
    }
  }
}
