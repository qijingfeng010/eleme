/*
https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&
latitude=22.609725&longitude=114.029113
01：接口功能：美食
参数：
    type=quality_meal;   //
    latitude=22.609725;  //纬度
    longitude=114.029113 //经度
*/

const FOODS_API = "/restapi/shopping/v1/sale_list_index"

/*
https://h5.ele.me/restapi/shopping/v2/foods_page/sift_factors?entry_id=20004689&
longitude=114.029113&latitude=22.609725&terminal=h5
02：接口功能：美食头部分类导航
参数：
    entry_id=20004689; //id
    longitude=114.029113 //纬度
    latitude=22.609725 //经度
    terminal=h5  //
*/

const FOODS_TOP_NAV_API = "/restapi/shopping/v2/foods_page/sift_factors"

/*
https://h5.ele.me/restapi/shopping/v1/restaurants/outside_filter/attributes?
latitude=22.609725&longitude=114.029113&terminal=h5
03：接口功能:筛选导航
参数：
    latitude=22.609725 //经度
    longitude=114.029113 //纬度
    terminal=h5 //
*/

const FILTER_NAV_API = "/restapi/shopping/v1/restaurants/outside_filter/attributes"


/*
https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.609725&
longitude=114.029113&keyword=&offset=0&limit=8&extras[]=activities&
extras[]=tags&terminal=h5&rank_id=ff53ef1c9c064a54baa11a830fb0ee5b&
brand_ids[]=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&
restaurant_category_ids[]=213&restaurant_category_ids[]=214&
restaurant_category_ids[]=215&restaurant_category_ids[]=219&
restaurant_category_ids[]=265&restaurant_category_ids[]=221&
restaurant_category_ids[]=263&restaurant_category_ids[]=218&
restaurant_category_ids[]=234&restaurant_category_ids[]=237&
restaurant_category_ids[]=240&restaurant_category_ids[]=241&
restaurant_category_ids[]=211&restaurant_category_ids[]=229
04:接口功能：餐饮列表数据
参数：
    latitude=22.609725&  //经度
    longitude=114.029113& //纬度
    keyword=&  //关键字
    offset=0&  
    limit=8&   //请求个数
    extras[]=activities&
    extras[]=tags&
    terminal=h5&
    rank_id=ff53ef1c9c064a54baa11a830fb0ee5b&
    brand_ids[]=&
    restaurant_category_ids[]=209
*/ 

const DINNER_DATA_API = "/restapi/shopping/v3/restaurants"

/*
 https://h5.ele.me/restapi/shopping/v2/foods_page/sift_factors?entry_id=20008121&
 longitude=114.029113&latitude=22.609725&terminal=h5
05：接口功能：晚餐分类导航数据
参数：
    entry_id=20008121& 
    longitude=114.029113&
    latitude=22.609725&
    terminal=h5
*/ 

const DINNER_KIND_DATA_API = "/restapi/shopping/v2/foods_page/sift_factors"

/*
https://h5.ele.me/restapi/shopping/v1/restaurants/filter-bar/attributes?
latitude=22.609725&longitude=114.029113&terminal=h5
06:接口功能：满减优惠、配送、发票、保险等数据
参数：
    latitude=22.609725&
    longitude=114.029113&
    terminal=h5
*/ 

const DISCOUNT_DATA_API = "/restapi/shopping/v1/restaurants/filter-bar/attributes"

/*
https://h5.ele.me/restapi/bgs/geo/current_city?latitude=22.609725&
longitude=114.029113
07:接口功能：当前定位城市数据
参数：
    latitude=22.609725&
    longitude=114.029113
*/

const CITY_DATA_API = "/restapi/bgs/geo/current_city"

/*
https://newretail.ele.me/newretail/main/sceneentries?lat=22.609725&
lng=114.029113&city_id=11&
device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
channel=supermarket&for=index
08:接口功能：导航标题数据
参数：
    lat=22.609725&
    lng=114.029113&
    city_id=11&
    device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
    channel=supermarket&
    for=index
*/

const MARKET_DATA_API = "/newretail/main/sceneentries"

/*
https://newretail.ele.me/newretail/main/shoplist?address=&channel=supermarket&
device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&scene_id=0&rule_id=0&
cat_id=0&scene_type=shop&rn=20&pn=1&user_type=default&fromalipay=0&type=1&
lng=114.029113&lat=22.609725&city_id=11
9:接口功能：商品列表及商户信息数据
参数：
    address=&
    channel=supermarket&
    device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
    scene_id=0&
    rule_id=0&
    cat_id=0&
    scene_type=shop&
    rn=20&
    pn=1&
    user_type=default&
    fromalipay=0&
    type=1&
    lng=114.029113&
    lat=22.609725&
    city_id=11
*/ 

const FOR_YOU_SELECTED_DATA_API = "/newretail/main/shoplist"

/*
https://newretail.ele.me/newretail/main/shopentries?lat=22.609725&lng=114.029113&
city_id=11&device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
channel=supermarket&for=index
10:接口功能：为你精选——特价及轮播图数据
参数：
    lat=22.609725&
    lng=114.029113&
    city_id=11&
    device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
    channel=supermarket&
    for=index
*/ 

const BANNER_DATA_API = "/newretail/main/shopentries"

/*
https://newretail.ele.me/newretail/main/shoplist?lng=114.029113&lat=22.609725&
city_id=11&address=&channel=supermarket&
device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&scene_id=0&
scene_type=shop&rn=20&pn=2&user_type=default&fromalipay=0&type=1
11:接口功能：商品列表数据（不知道在页面哪里）
参数：
    lng=114.029113&
    lat=22.609725&
    city_id=11&
    address=&
    channel=supermarket&
    device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
    scene_id=0&
    scene_type=shop&
    rn=20&
    pn=2&
    user_type=default&
    fromalipay=0&
    type=1
*/ 

const GOODS_LIST_DATA = "/newretail/main/shoplist"

/*
https://newretail.ele.me/newretail/main/scenedetail?address=&
channel=supermarket&device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
scene_id=935&rule_id=0&cat_id=0&scene_type=shop&rn=20&pn=1&user_type=default&
fromalipay=0&type=1&lng=114.029113&lat=22.609725&city_id=11
12:接口功能：商品列表数据（点击导航请求的数据）
参数：
    address=&
    channel=supermarket&
    device_id=2AE66BF461724A3DA2D471BD7B618C9C%7C1533554888428&
    scene_id=935&
    rule_id=0&
    cat_id=0&
    scene_type=shop&
    rn=20&
    pn=1&
    user_type=default&
    fromalipay=0&
    type=1&
    lng=114.029113&
    lat=22.609725&
    city_id=11
*/

const MARKET_GOODSLIST_DATA_API = "/newretail/main/scenedetail"

/*
https://h5.ele.me/restapi/member/gifts/suggest
13：接口功能：发现页面限时好礼数据
参数：

*/ 

const GIFTS_DATA_API = "/restapi/member/gifts/suggest"

/*
https://h5.ele.me/restapi/member/v1/discover?platform=1&block_index=0
14:接口功能：发现页面上部数据
参数：
    platform=1&
    block_index=0
*/ 

const GOLD_COIN_SHOPPINGMALL_API = "/restapi/member/v1/discover"


