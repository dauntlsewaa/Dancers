import request from '../../utils/request'

enum API {
    SWIPER = '/promotion/ads/search/findByPosition?access_token=c494ae44-3adc-48ca-8749-5128a53358d7&position=pc_mainpage',//轮播图数据
    VIDEOLIST = '/moment/moments/rec/default?access_token=c494ae44-3adc-48ca-8749-5128a53358d7&column=recommend&pageSize=20&pageNum=0&localCache=0', // 推荐视频列表
    SCREEN = '/moment/properties/filter/original?access_token=c494ae44-3adc-48ca-8749-5128a53358d7',//筛选数据
    INTEREST = '/avocation/avocations/rec/user?access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1&pageNum=0&pageSize=20',//推荐技能

}

export const reqSwiperList = () => request.get(API.SWIPER)

export const reqVideoList = () => request.get(API.VIDEOLIST)

export const reqScreen = () => request.get(API.SCREEN)

export const reqInterest = ()=> request.get(API.INTEREST)

