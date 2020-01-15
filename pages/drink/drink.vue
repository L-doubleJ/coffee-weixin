<template>
	<view class="padding">
		<view class="address-wrapper flex flex-direction justify-between">
			<view class="flex justify-between align-center">
				<view class="text-gray">当前位置</view>
				<view class="address link flex align-center">附近的咖啡机</view>
			</view>
			<view class="text-black" style="font-size: 22upx;">…建设路192号中信广场负一层中天购物城西南门</view>
		</view>
		<view class="flex text-black list-wrapper margin-top">
			<image src="/static/drink.png" mode=""></image>
			<view class="flex flex-direction justify-between margin-left-sm">
				<view>
					<view class="flex align-center">
						<view style="font-size: 30upx;">拿铁</view>
						<view class="hot-tag margin-left-xs flex align-center justify-center">热销</view>
					</view>
					<view class="text-gray margin-top-xs" style="font-size: 22upx;">意大利浓缩咖啡(Espresso)与牛奶的经典混合</view>
				</view>
				<view class="flex justify-between align-center">
					<view class="flex align-end">
						<view class="text-red text-lg">¥ 20</view>
						<view class="text-gray margin-left-xs text-sm" style="text-decoration: line-through;margin-bottom: 3upx;">¥24</view>
					</view>
					<view class="btn flex justify-center align-center">购买</view>
				</view>
			</view>
		</view>
		<view class="foot padding width100 flex text-white align-center" v-if="showTips">
			<view class="text-sm">高尔夫1号华府您好，目前我们的业务仅覆盖到北京、上海、广州、深圳、杭州，为您带来不便，非常抱歉！</view>
			<view class="detail-btn margin-left-sm flex justify-center align-center text-xs">查看详情</view>
		</view>
		<shopping-cart></shopping-cart>
	</view>
</template>

<script>
	import shoppingCart from '../../components/shoppingCar.vue'
	export default {
		data() {
			return {
				showTips:false
			}
		},
		components:{
			shoppingCart
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.foot{
		background-color: rgba(0,0,0,0.7);
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1;
		.detail-btn{
			flex-shrink: 0;
			width:126upx;
			height:48upx;
			border-radius:4upx;
			border:1upx solid rgba(255,255,255,1);
		}
	}
.address-wrapper {
		padding: 20upx 30upx;
		height: 121upx;
		box-shadow: 0px 2upx 8upx 1upx rgba(220, 220, 220, 0.5);
		border-radius: 61upx;

		.link {
			color: #54A9AC;

			&::after {
				font-family: cuIcon;
				display: block;
				content: "\e6a3";
				font-size: 20upx;
				color: #54A9AC;
				margin-left: 4upx;
				margin-top: 3upx;
			}
		}
	}
	.list-wrapper{
		image{
			width: 258upx;
			height: 258upx;
		}
		.hot-tag{
			width:58upx;
			height:28upx;
			border-radius:4upx;
			background-color: #54A9AC;
			color: white;
			font-size: 18upx;
		}
		.btn{
			background-color: #FFA569;
			width:116upx;
			height:48upx;
			color: white;
			border-radius:4upx;
			font-size: 24upx;
		}
	
	}

</style>
