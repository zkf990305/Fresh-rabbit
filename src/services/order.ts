import type {
  OrderPreResult,
  OrderCreateParams,
  OrderCreateResult,
  OrderResult,
} from '@/types/order'
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

/**
 * 填写订单-获取立即购买订单
 *
 * 此函数用于在会员下单前，根据商品SKU ID、商品数量和可选的地址ID，
 * 获取订单的预览信息这些信息帮助会员确认订单详情，如商品、数量、地址等
 *
 * @param data 包含请求参数的对象
 * @param data.skuId 商品SKU ID，用于标识特定的商品配置
 * @param data.count 商品数量，表示希望购买的数量
 * @param data.addressId 可选参数，会员的地址ID，用于预览中显示配送地址信息
 * @returns 返回一个Promise对象，解析为OrderPreResult类型的数据，包含订单预览的信息
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 创建会员订单的API请求函数
 *
 * 该函数通过发送POST请求到/member/order接口，根据传入的订单参数创建一个新的订单
 * 主要用于在前端应用中创建订单并获取服务器返回的订单创建结果
 *
 * @param data 订单创建参数，包含创建订单所需的信息，如商品ID、购买数量等
 * @returns 返回一个Promise对象，解析为订单创建结果，包括订单ID、创建状态等信息
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

/**
 * 根据ID获取会员订单信息的API接口
 *
 * @param id 会员订单的唯一标识符
 * @returns 返回一个Promise对象，解析后包含会员订单信息
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const getMemberOrderRepurchaseByIdAPI = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
  })
}
