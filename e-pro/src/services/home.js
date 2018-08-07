import axios from 'axios'
import API from '../api'



//请求首页轮播图数据

export function getHomeBannerData(){
    return new Promise((resolve,reject)=>{
       axios.get(API.HOME_BANNER_DATA,{
           /*
           latitude=22.63205
           &longitude=114.061592
           &templates[]=main_template
           &templates[]=favourable_template
           &templates[]=svip_template
           &terminal=h5
           */
          params:{
            
          }
    
       })
       .then(response=>{
          console.log(response)
       })
       .catch(error=>{
           console.log('连接失败')
       })
    })
}