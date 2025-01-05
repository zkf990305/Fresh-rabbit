import type { AddressParams } from '@/types/address'
import { http } from '@/utils/http'

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取会员地址信息的API
 *
 * 此函数通过发送GET请求到/member/address端点，来获取当前会员的地址信息
 * 它返回一个Promise对象，解析为AddressParams类型的数组，每个元素代表一个地址信息
 *
 * @returns {Promise<AddressParams[]>} 一个Promise，解析为AddressParams类型的数组
 */
export const getMemberAddressAPI = () => {
  return http<AddressParams[]>({
    method: 'GET',
    url: '/member/address',
  })
}
