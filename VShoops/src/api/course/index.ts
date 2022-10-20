import request from '../../utils/request'


enum API {
    THEME = 'moment/activityZones/collect/default?access_token=02e7ccfe-0e01-48d3-90e0-7e60239f18cd&pageSize=16',

}


//我的课程主题请求函数
export const reqCourseTheme = () => request.get(API.THEME)