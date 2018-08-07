<template>
    <div id="search">
        <i class="iconfont">&#xe619;</i>
        <input type="text" placeholder="搜索饿了么商家、商品名称">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #search,body,html{
        width: 100%;
        height: 100%;
    }
    #search{
        position: relative;

    }
    #search .iconfont{
        position: absolute;
        left: 1.17rem;
        top: 0.07rem;
    }
    input{
        width: 3.55rem;
        height: 0.3rem;
        background: #fff;
        border: 1px solid red;
        margin-left: 0.1rem;
        padding-left: 1.27rem;
        box-sizing: border-box;
    }
</style>
