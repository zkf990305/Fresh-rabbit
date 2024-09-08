/** 封装通用信息 */
type BaseProfile = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
}
/** 小程序登录 登录用户信息 */
export type LoginResult = BaseProfile & {
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}
/**
 * 定义用户资料的详细信息类型
 * 该类型包含了用户的基本信息以及可选的额外信息
 */
export type ProfileDetail = BaseProfile & {
  // 用户的性别，可选
  gender?: Gender
  // 用户的生日，可选
  birthday?: string
  // 用户的完整位置信息，可选
  fullLocation?: string
  // 用户的职业，可选
  profession?: string
}
// 定义一个类型别名Gender，它只能是'女'或'男'
export type Gender = '女' | '男'

/**
 * 定义了一个名为ProfileParams的类型，该类型是从ProfileDetail类型中选择nickname、gender、birthday和profession属性，
 * 并且可选地包含provinceCode、cityCode和countyCode属性。
 * 这个类型用于简化和标准化用户资料相关接口的参数处理。
 */
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  // 省份编码
  provinceCode?: string
  // 城市编码
  cityCode?: string
  // 区/县编码
  countyCode?: string
}
