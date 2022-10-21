import request from '../../utils/request'


enum API {
    THEME = 'moment/activityZones/collect/default?access_token=02e7ccfe-0e01-48d3-90e0-7e60239f18cd&pageSize=16',
    VIDEO ='moment/moments/rec/default?access_token=c494ae44-3adc-48ca-8749-5128a53358d7&column=recommend&pageSize=20&pageNum=0&localCache=0'
}


//我的课程主题请求函数
export const reqCourseTheme = () => request.get(API.THEME)

//视频播放
export const reqVideoPlay = () => request.get(API.VIDEO)