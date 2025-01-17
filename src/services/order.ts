import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

/**
 * 填写订单-获取预付订单
 *
 * 此函数通过发送GET请求到/member/order/pre端点，获取会员在下单前的预览信息
 * 这些信息可能包括商品详情、订单总价、可用优惠等，帮助会员在正式下单前进行确认
 *
 * @returns {Promise<OrderPreResult>} 返回一个Promise，解析为OrderPreResult类型的数据
 * 这里使用了泛型来指定返回数据的类型，以便于类型校验和使用时的类型安全
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}
