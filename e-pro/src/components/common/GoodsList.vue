<template>
    <div class="goods_list">
		<div class="shopping-img">
			<img src="http://fuss10.elemecdn.com/8/23/ea86022714713ef2363b0a7a0351bpng
				.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/
				130x130/" alt="">
			<div class="small-font brand ">品牌</div>
		</div>
		<div class="list_detail">
			<div>
				<span class="store_name">一点点（国贸店）</span>
				<span class="more">...</span>
			</div>
			<div class="grade_count">
				<div class="grade_count_left">
					<span>☆☆☆☆☆</span>
					<span class="small-font grade">4.8</span>
					<span class="small-font sale_count small-font">月售1798</span>
				</div>
				<div class="grade_count_right">
					<span class="small-font on_time">准时达</span>
					<span class="small-font delivery">蜂鸟专送</span>
				</div>

			</div>
			<div class="delivery_">
				<ul class="delivery_left">
					<li class="small-font least">起送￥20</li>
					<li class="small-font delivery_cost">配送￥5</li>
				</ul>
				<ul class="delivery_right">
					<li class="small-font distance">899m</li>
					<li class="small-font times">37分钟</li>
				</ul>
			</div>
			<div class="store_type">
				<i class="small-font iconfont store_logo">&#xe615;</i>
				<span class="small-font sale_type">奶茶果汁</span>
			</div>
			<div class="promotion">
				<div class="special_offer">
					<span class="small-font special_offer_in">满减</span>
					<span class="small-font special_offer_contain">满39减10，满69减20</span>
					<b class="small-font more_offer">﹀</b>
				</div>
				<div class="special_offer">
					<span class="small-font special_offer_in">首单</span>
					<span class="small-font special_offer_contain">新用户下单立减19元</span>
				</div>
				<div class="special_offer">
					<span class="small-font special_offer_in">会员</span>
					<span class="small-font special_offer_contain">超级会员领8元无门槛红包</span>
				</div>
				<div class="special_offer">
					<span class="small-font special_offer_in">特价</span>
					<span class="small-font special_offer_contain">特价商品7.9元起</span>
				</div>
			</div>


		</div>
	</div>
</template>

<script>
export default {
	data(){
		
	}
}
</script>

<style>
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

.goods_list {
	width: 100%;
	padding-left: 0.1rem;
	padding-right: 0.1rem;
	padding-top: 0.2rem;
	box-sizing: border-box;
	display: flex;
}

.shopping-img {
	width: 0.7rem;
	height: 0.7rem;
	position: relative;
}

.shopping-img img {
	width: 100%;
	height: 100%;
	display: block;
}

.list_detail {
	padding-left: 0.13rem;
	font-size: 0.08rem;
	width: 80%;
}

.brand {
	font-size: .08rem;
	background: #fff100;
	color: #6f3f15;
	padding: .025rem .02rem;
	position: absolute;
	left: 0;
	top: 0;
}

.store_name {
	font-size: 0.15rem;
	color: #333;
	font-weight: bold;
}

.more {
	float: right;
}

.grade_count {
	position: relative;
}

.grade_count_right {
	float: right;
	display: flex;
	position: relative;
	right: -.1rem;
}

.grade_count_right span {
	flex: 1;
}

.grade_count_left,
.grade_count_right {
	display: inline-block;
}

.grade,
.sale_count,
.least,
.delivery_cost {
	font-size: 0.08rem;
	color: #707070;
}

.grade_count,
.delivery_,
.store_type,
.special_offer,
.first_order,
.member,
.sale_price {
	padding-top: 0.10rem;
}

.on_time {
	border: 1px solid #91caff;
	color: #2395ff;
	border-radius: 2px;
	font-size: 0.06rem;
	text-align: center;
	line-height: 0.12rem;
	padding: 4px;
	box-sizing: border-box;
	display: inline-block;
}

.delivery {
	padding: 4px;
	background: #0098ff;
	font-size: 0.06rem;
	color: #fff;
	line-height: 0.13rem;
	display: inline-block;
	border-radius: 2px;
}

.delivery_ {
	width: 100%;
	display: flex;
}

.delivery_left {
	flex: 1;
}

.delivery_right {
	flex: 1;
}

.delivery_left>li {
	float: left;
}

.delivery_right>li {
	float: right;
}

.least,
.times {
	padding-right: .05rem;
	border-right: solid 1px #dddddd;
}

.store_type {
	padding: .02rem .05rem;
	border: solid 1px #ddd;
	box-sizing: border-box;
	margin-top: .1rem;
	border-radius: 3px;
	display: inline-block;
}

.store_type .sale_type {
	font-size: 0.06rem;
	color: #666666;
	display: inline-block;
	position: relative;
	top: .02rem;
}

.promotion {
	width: 100%;
}

.special_offer {
	width: 100%;
	padding-top: .03rem;
}

.special_offer_in {
	display: inline-block;
	font-size: .09rem;
	color: #ce7b77;
	border: solid 1px #f4cfcc;
	background: #fff4f2;
	border-radius: 2px;
	padding: .02rem;
}

.special_offer>.more_offer {
	float: right;
}

.special_offer_contain {
	display: inline-block;
	font-size: .1rem;
	color: #666666;
}
</style>
