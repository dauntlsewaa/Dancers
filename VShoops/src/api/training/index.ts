import request from '@/utils/request'

enum API {
    VIEWRECORDS = '/moment/viewRecords?access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1&pageSize=10',//历史记录
    PLANS = '/trainingCenter/plans/search/findByUserId?access_token=ab9a2034-fc59-4110-99af-7968a5c4f3d1&pageSize=20&pageNum=0&type=system',//练习室数据
}


// 历史记录接口
export const reqViewrecords = () => request.get(API.VIEWRECORDS)

//练习室数据接口
export const reqPlans = () => request.get(API.PLANS)