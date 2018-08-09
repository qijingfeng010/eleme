<template>
    <div id="search">
        <div class="search_top">
            <input type="text" placeholder="麦当劳 5元板烧鸡腿堡" class="search_inp">
            <i class="iconfont magnifying_glass">&#xe619;</i>
            <button class="cancel">取消</button>
        </div>
        <div class="history_search">
            <h3 class="history_tittle">
                历史搜索
                <i class="iconfont del">&#xe62a;</i>
            </h3>
            <div class="history_foods">
                <div class="foods_name">蛋糕</div>
                <div class="foods_name">小龙虾</div>
                <div class="foods_name">一点点</div>
                <div class="foods_name">肠粉</div>
            </div>
            <div class="hot_search">
                <h3 class="hot_tittle">热门搜索</h3>
                <ul class="hotsearch_foodsname">
                    <li>吮指鸭脖减15</li>
                    <li>奶茶</li>
                    <li>螺蛳粉</li>
                    <li>煲仔饭</li>
                    <li>粥</li>
                    <li>汉堡</li>
                    <li>一点点</li>
                    <li>寿司</li>
                    <li>烧烤</li>
                    <li>华莱士</li>
                    <li>蛋糕</li>
                    <li>面</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.small-font {
    font-size: 0.12rem;

    transform: scale(0.80);
    transform-origin: 0 0;

    -ms-transform: scale(0.80);
    /* IE 9 */
    -ms-transform-origin: 0 0;
    /* IE 9 */
    -webkit-transform: scale(0.80);
    /* Safari 和 Chrome */
    -webkit-transform-origin: 0 0;
    /* Safari 和 Chrome */
    -moz-transform: scale(0.80);
    /* Firefox */
    -moz-transform-origin: 0 0;
    /* Firefox */
    -o-transform: scale(0.80);
    /* Opera */
    -o-transform-origin: 0 0;
    /* Opera */
}
#search{
    width: 100%;
}
.search_top{
    padding-top: .12rem;
    padding-left: .1rem;
    padding-right: .1rem;
    height: .3rem;
    position: relative;
    /* box-sizing: border-box; */
}
.search_inp{
    position: absolute;
    width: 2.98rem;
    height: .3rem;
    font-size: .14rem;
    color: #999999;
    padding-left: .36rem;
    box-sizing: border-box;
    border: 0;
    background: #f5f5f5;
    outline: none;
}
.search_inp:focus{
    color: #426bf2;
}
.magnifying_glass{
    position: absolute;
    left: .16rem;
    top: .2rem;
    font-size: .14rem;
}
.cancel{
    font-size: .14rem;
    color: #333333;
    background: none;
    border: 0;
    outline: none;
    position: absolute;
    right: .2rem;
    top: .2rem;
}
.history_search{
    /* width: 100%; */
    margin-top: .24rem;
    padding-left: .15rem;
    padding-right: .16rem;
}
.history_tittle{
    font-size: .13rem;
    color: #333333;
}
.del{
    float: right;
    font-size: .11rem;
    color: #999999;
}
.history_foods{
    width: 100%;
    display: flex;
}
.foods_name{
   flex-direction: start;
    padding: .11rem .165rem;
    background: #f5f5f5;
    border-radius: .04rem;
    font-size: .11rem;
    color: #666666;
    margin-top: .13rem;
    margin-right: .1rem;
}
.hot_search{
    width: 100%;
    margin-top:.22rem;
}
.hot_tittle{
    font-size: .13rem;
    color: #333333;
}
.hotsearch_foodsname{
    width: 100%;
    margin-top: .03rem;
    display: flex;
    flex-wrap: wrap;
}
.hotsearch_foodsname li{
    list-style: none;
    flex-direction: start;
    padding: .11rem .16rem;
    font-size: .11rem;
    color: #666666;
    background: #f5f5f5;
    margin-top: .1rem;
    border-radius: .05rem;
    margin-right:.1rem;
}
.hotsearch_foodsname li:nth-child(1){
    color: #0085ff;
    background: #e0f1ff;
}

</style>
