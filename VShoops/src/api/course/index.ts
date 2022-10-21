
import request from '@/utils/request'

enum API {
    PROPERTIES = '/moment/properties/filter/vip_zone?access_token=2f03d256-27ad-461a-b0e6-79ee574031f1',//会员专区/兴趣技能区域
    FILTER = '/moment/properties/filter/video_course?access_token=2f03d256-27ad-461a-b0e6-79ee574031f1',//视频课/兴趣技能区域
    STREAMING = '/moment/properties/filter/live_course?access_token=2f03d256-27ad-461a-b0e6-79ee574031f1',//直播课/兴趣技能区域
    ACTIVITYZONES = '/moment/activityZones/collect/default?access_token=2f03d256-27ad-461a-b0e6-79ee574031f1&pageSize=16',//主题页/图片数据
    THEME = '/moment/activityZones/collect/default?access_token=02e7ccfe-0e01-48d3-90e0-7e60239f18cd&pageSize=16',
}

//会员专区/兴趣技能区域
export const reqProperties = () => request.get(API.PROPERTIES)

//视频课/兴趣技能区域
export const reqFilter = () => request.get(API.FILTER)

//直播课/兴趣技能区域
export const reqStreaming = () => request.get(API.STREAMING)

//主题页/图片数据
export const reqActivityzones = () => request.get(API.ACTIVITYZONES)

//我的课程主题请求函数
export const reqCourseTheme = () => request.get(API.THEME)





