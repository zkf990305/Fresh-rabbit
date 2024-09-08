import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 获取会员个人资料的API请求
 *
 * 本函数发起一个HTTP GET请求，以获取会员的个人资料详情
 * 使用场景包括但不限于会员资料页面，管理员查看会员资料等
 *
 * @returns ProfileDetail 返回会员的个人资料详细信息
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 更新会员个人资料的API函数
 *
 * 本函数通过HTTP PUT请求发送会员个人资料数据到服务器，以更新相应会员的资料信息
 * 主要用于会员资料页面的保存或更新操作
 *
 * @param data 包含更新的个人资料信息的对象，符合ProfileParams接口
 * @returns 返回一个Promise对象，该对象在请求完成后解析为ProfileDetail类型的对象
 */
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
