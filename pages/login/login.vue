<template>
	<view class="container flex flex-direction align-center">
		<image src="../../static/logo.png" mode=""></image>
		<view style="margin-top: 151upx;">购买商城商品服务</view>
		<view>需要进行基础信息授权，用于记录订单购买用户</view>

		<view style="padding:35px;">
			<!-- #ifdef MP-WEIXIN -->
			<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo" withCredentials="true">微信授权</button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		
		onLoad: function() {
		},
		
		methods: {			
			getUserInfo(res) {
				console.log('=== res:', res);
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		image {
			margin-top: 240upx;
			height: 148upx;
			width: 456upx;
		}
	}
</style>
