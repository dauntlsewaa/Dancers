import request from '../../utils/request'

enum API {
    TITLE = '/setup/tdks/index_recommend?access_token=b5d686c9-7f49-4e07-a439-051b3bf24bf1',//网页标题
    SWIPER = '/promotion/ads/search/findByPosition?access_token=c494ae44-3adc-48ca-8749-5128a53358d7&position=pc_mainpage',//轮播图数据
    VIDEOLIST = '/moment/moments/rec/default?access_token=c494ae44-3adc-48ca-8749-5128a53358d7&column=recommend&pageSize=20&pageNum=0&localCache=0', // 推荐视频列表
    SCREEN = '/moment/properties/filter/original?access_token=c494ae44-3adc-48ca-8749-5128a53358d7',//筛选数据
    INTEREST = '/avocation/avocations/rec/user?access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1&pageNum=0&pageSize=20',//推荐技能
    PROPERTIES = '/moment/properties/filter/original?access_token=b5d686c9-7f49-4e07-a439-051b3bf24bf1',//作品筛选
}
// 网页标题接口
export const reqTitle = () => request.get(API.TITLE)
// 轮播图数据接口
export const reqSwiperList = () => request.get(API.SWIPER)
// 推荐视频列表接口
export const reqVideoList = () => request.get(API.VIDEOLIST)
// 筛选数据接口
export const reqScreen = () => request.get(API.SCREEN)
// 推荐技能接口
export const reqInterest = () => request.get(API.INTEREST)

//作品筛选接口
export const reqProperties = () => request.get(API.PROPERTIES)

