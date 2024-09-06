import type { ProfileDetail } from '@/types/member'
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
