import request from '@/utils/request'

enum API {
    SEARCH = '/setup/setups/search/findByGroupType?groupType=skill_level&access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1',//我的资料
    SETUPS = '/setup/setups/search/findByGroupType?access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1&groupType=vip_product',//我的会员
    COLLECT = '/moment/moments/collect/dynamic_manager?access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1&pageSize=10',//资源动态
}

// 我的资料接口
export const reqSearch = () => request.get(API.SEARCH)
//我的会员接口
export const reqSetups = () => request.get(API.SETUPS)
//资源动态
export const reqCollect = () => request.get(API.COLLECT)