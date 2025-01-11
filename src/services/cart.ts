import { http } from '@/utils/http'

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
