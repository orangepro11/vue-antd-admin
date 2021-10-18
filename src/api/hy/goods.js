import { get } from '@/utils/muni-http'

export const getGoodsList = () => get('v1/vip_goods/get_goods_list')
