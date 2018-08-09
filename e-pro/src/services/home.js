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
           var str1='http://fuss10.elemecdn.com/';
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
            var arr=[]
            var arr1=data.splice(1,10)   
            var arr2=data
            arr.push(arr1,arr2)
            // console.log(arr.length) 
            // console.log(arr) 
            resolve(arr);
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

//最近距离
//https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.63205&longitude=114.061592&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=5&rank_id=&terminal=h5

export function getDistanceData(){
   return new Promise((resolve,reject)=>{
       axios.get(API.DISTANCE,{
           params:{
            latitude:22.63205,
            longitude:114.061592,
            offset:0,
            limit:8,   
            extras:['activities','tags'],
            extra_filters:'home',
            order_by:5,
            rank_id:'',     
            terminal:'h5'
           }
       })
       .then(response=>{  
           let data= response.data.items.map(res=>{
                var res=res.restaurant;  
                // console.log(res)            
                var str2='?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
                var str1="//fuss10.elemecdn.com/"
                var path=res.image_path                
                var strF=path.slice(0,1)
                var strT=path.slice(1,3)
                var strL=path.slice(3)
                var a=path.slice(-3)
                var str=''
                if(a=='png'){
                    str=str1+strF+'/'+strT+'/'+strL+'.png'+str2
                }else{
                    str=str1+strF+'/'+strT+'/'+strL+'.jpeg'+str2
                    
                }
                // 处理店铺销售商品类型的数据
                var flavors = res.flavors;
                var flavorsName = "";
                for(var i=0;i<flavors.length;i++){
                    flavorsName += flavors[i].name;
                }
                // 处理优惠活动的数据
               
                return{      
                    id:res.authentic_id,              
                    imgUrl:str,
                    name:res.name,
                    rating:res.rating,
                    // supports:res.supports[0][icon_name],
                    num:res.recent_order_num,
                    amount:res.float_minimum_order_amount,
                    tips:res.tips,
                    distance:res.distance,
                    time:res.order_lead_time,
                    tags:res.support_tags,
                    description:res.activities[1].description,
                    attribute:res.activities[0].description,
                    ship:res,
                    // text:[res.delivery_mode.text ||null]
                    tips:res.piecewise_agent_fee.tips,
                    flavors:flavorsName
        
                } 
           })
           resolve(data)
       })
       .catch(error=>{
           console.log('请求失败')
       })
   })
}




















