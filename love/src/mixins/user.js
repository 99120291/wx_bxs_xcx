import wepy from 'wepy'
/***
 * 注意：
 * 1. 默认式混合：对于组件data数据，components组件，events事件以及其它自定义方法采用默认式混合，即如果组件未声明该数据，组件，事件，自定义方法等，那么将混合对象中的选项将注入组件这中。对于组件已声明的选项将不受影响。
 * 2. 兼容式混合：对于组件methods响应事件，以及小程序页面事件将采用兼容式混合，即先响应组件本身响应事件，然后再响应混合对象中响应事件。
 */
export default class BaseMixin extends wepy.mixin {
  data = {
    userInfo: this.getUserInfo()
  }

  methods = {
  }

  computed = {
  }

  watch = {
  }

  onShow() {
  }

  async onLoad() {
  }

  // 获取用户信息
  getUserInfo () {
    return wepy.getStorageSync('userinfo')
  }
}
