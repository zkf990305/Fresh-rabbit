import { http } from '@/utils/http'
import type { CartItem } from '@/types/cart'
/**
 * 将商品添加到会员购物车的API请求函数
 *
 * @param data - 包含商品SKU ID和数量的对象
 * @returns 返回一个Promise对象，表示HTTP请求的结果
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST', // 使用POST方法发起请求
    url: '/member/cart', // 请求的URL路径
    data, // 请求体数据，包含skuId和count
  })
}

/**
 * 获取会员购物车列表API
 *
 * 此函数通过发送GET请求到/member/cart接口，获取当前会员的购物车列表
 * 它不需要任何参数，因为购物车信息通常是根据当前登录的用户来获取的
 *
 * @returns {Promise<CartItem[]>} 返回一个Promise，解析为CartItem类型的数组，代表购物车中的商品列表
 */
export const getMemberCartListAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
 * 删除会员购物车中的商品
 *
 * 该函数通过发送DELETE请求到/member/cart端点，来删除会员购物车中指定的商品
 * 主要用于购物车页面当用户选择删除商品时调用
 *
 * @param data 包含要删除的商品ID数组的对象
 *             - ids: string[] 要删除的商品ID数组 `SKUID集合`
 * @returns Promise 返回axios请求的Promise对象，包含服务器的响应
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
