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
            latitude:22.63205,
            longitude:114.061592,
            templates:['main_template','favourable_template','svip_template'],          
            terminal:'h5'
          }
    
       })
       .then(response=>{
           var str1='//fuss10.elemecdn.com/';
           var str2='.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
            let data=response.data[0].entries.map(item=>{
                var hash=item.image_hash
                var strF=hash.slice(0,1)
                var strT=hash.slice(1,3)
                var strL=hash.slice(3)
                var str=str1+strF+'/'+strT+'/'+strL+str2
                return{
                    id:item.id,
                    name:item.name,   
                    image:str             
                }
            })  
                    
            // console.log(data)          
            resolve(data);
       })
       .catch(error=>{
           console.log('连接失败')
           console.log(error)
       })
    })
}


//请求过滤商家的数据
//https://h5.ele.me/restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=22.63205&longitude=114.061592&terminal=h5

export function getRestaurants(){
    return new Promise((resolve,reject)=>{
        axios.get(API.FILTERRESTAURANTS,{
            params:{
                latitude:22.63205,
                longitude:114.061592,
                terminal:'h5'
            }
        })
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            console.log('连接失败')
        })
    })
}