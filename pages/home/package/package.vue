<template>
	<view class="padding">
		<view class="list-wrapper">
			<image src="../../../static/main.png" mode=""></image>
			<view class="title text-black margin-top-sm">
				当季1产区挂耳式咖啡挂耳包手冲滤挂烘焙现磨原味纯黑咖啡粉
			</view>
			<view class="flex align-center justify-between margin-top-xs">
				<view class="flex align-center">
					<text class="text-red">￥</text>
					<text class="text-red" style="font-size: 40upx;">198.2</text>
					<text class="text-gray self-end text-xs margin-left-xs" style="margin-bottom: 3upx; text-decoration: line-through;">￥299.00</text>
					<view class="date flex align-center margin-left-xs">
						<image src="../../../static/home/package/quick.png"></image>
						<view class="text-white text-xs">28后下架</view>
					</view>
				</view>
				<view class="text-gray" style="font-size: 22upx;">余量：181</view>
			</view>
		</view>
		<view class="list-wrapper">
			<image src="../../../static/main.png" mode=""></image>
			<view class="title text-black margin-top-sm">
				当季1产区挂耳式咖啡挂耳包手冲滤挂烘焙现磨原味纯黑咖啡粉
			</view>
			<view class="flex align-center justify-between margin-top-xs">
				<view class="flex align-center">
					<text class="text-red">￥</text>
					<text class="text-red" style="font-size: 40upx;">198.2</text>
					<text class="text-gray self-end text-xs margin-left-xs" style="margin-bottom: 3upx; text-decoration: line-through;">￥299.00</text>
					<view class="date flex align-center margin-left-xs">
						<image src="../../../static/home/package/quick.png"></image>
						<view class="text-white text-xs">28后下架</view>
					</view>
				</view>
				<view class="text-gray" style="font-size: 22upx;">余量：181</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.list-wrapper{
		image{
			width: 100%;
			height: 346upx;
		}
		.title{
			font-size: 32upx;
		}
		.date{
			padding: 5upx  10upx 5upx 0upx;
			border-radius: 4upx;
			background-color: #67BCB9;
			image{
			width:30upx;
			height:26upx;
			margin-top: 4upx;
			}
		}
	}
	.list-wrapper+.list-wrapper{
		margin-top: 30upx;
	}
</style>
