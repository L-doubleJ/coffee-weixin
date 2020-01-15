<template>
	<view class="container flex-direction text-black flex align-center" style="height: 100vh;">
		<image src="/static/no-data.png"></image>
		<view class="text text-lg">活动已结束</view>
		<view class="margin-top-sm text-gray">快去首页，参与其他活动吧，丰富奖品等着你</view>
		<view class=" margin-top btn flex justify-center align-center" @click="goHome">返回首页</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
		goHome(){
			uni.reLaunch({
				url:'../home'
			})
		}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		image {
			width: 352upx;
			height: 352upx;
			margin-top: 150upx;
		}

		.text {
			font-size: 32upx;
			margin-top: 80upx;
		}

		.btn {
			width: 442upx;
			height: 82upx;
			color: white;
			font-size: 30upx;
			background-color: #67BCB9;
			box-shadow: 0px 2upx 8upx 4upx rgba(231, 231, 231, 0.5);
			border-radius: 4upx;
		}
	}
</style>
