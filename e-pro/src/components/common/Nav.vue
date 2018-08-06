<template>
    <ul id="nav">
        <!-- 遍历导航 -->
        <li v-for="(item,i) in navList" :key="i"  @click="selectNav(item.path)"
        class="nav-item" :class="{active:show==item.path}">
            <i class="iconfont"><b v-html='item.icon'></b></i>
            <i>{{item.title}}</i>
        </li>
         
    </ul>
</template>

<script>
export default {
   

    data(){
        return{
            show:"/home",
            navList:[
                {title:'首页',path:'/home',icon:'&#xe722;'},
                {title:'发现',path:'/discover',icon:'&#xe602;'},
                {title:'订单',path:'/order',icon:'&#xe63c;'},
                {title:'我的',path:'/mine',icon:'&#xe612;'}
            ]
        }
    },
    methods:{
        selectNav(path){
            this.show=path
            console.log(this.show)
            this.$router.push(path)
        }
    }

}
</script>

<style scoped>
   #nav{
       width: 100%;
       height: 0.49rem;
       background: #fafafa;
       /* background: red; */
       display: flex;
       position: absolute;
       bottom: 0;
       left: 0
   }
   #nav>li{
       flex:1;
       text-align: center;
       /* line-height: 0.49rem; */
       font-size: 0.1rem;
       color: #818181;    
       padding-top: 0.08rem;  
       box-sizing: border-box
   }
   #nav>li>i{
       display: flex;
       flex-direction: column;
   }
   .nav-item.active i,.nav-item.active b{
       color: #2395ff
   }


</style>
