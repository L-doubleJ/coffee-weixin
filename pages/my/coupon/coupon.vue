<template>
	<view class="padding">
		<view class="coupon-wrapper margin-top-sm">
			<image src="../../../static/my/coupon/coupon-bg.png"></image>
			<view class="title text-xl">6元代金券</view>
			<view class="scope text-sm">范围：拿铁</view>
			<view class="context text-sm">内容：满100.优惠5元</view>
			<view class="date text-sm">有效期：不限</view>
			<view class="btn flex align-center justify-center">
				<image src="../../../static/my/coupon/share.png" mode=""></image>
				<text class="btn-text">转赠</text>
			</view>
		</view>
		<view class="coupon-wrapper margin-top-sm">
			<image src="../../../static/my/coupon/coupon-bg.png"></image>
			<view class="title text-xl">6元代金券</view>
			<view class="scope text-sm">范围：拿铁</view>
			<view class="context text-sm">内容：满100.优惠5元</view>
			<view class="date text-sm">有效期：不限</view>
			<view class="btn flex align-center justify-center">
				<image src="../../../static/my/coupon/share.png" mode=""></image>
				<text class="btn-text">转赠</text>
			</view>
		</view>
		<view class="used text-sm text-center margin-top">显示已用优惠券</view>
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
	.used{
		color: #666666;
		text-decoration: underline;
	}
	// 主题色 #67BCB9
	.coupon-wrapper{
		color: #FFFFFF;
		position: relative;
		height: 228upx;
		image{
			width: 100%;
			height: 100%;
		}
		view{
			position: absolute;
			
		}
		.title{
				top: 30upx;
				left: 260upx;
		}
		.scope{
			top:85upx;left: 260upx;
		}
		.context{
			top: 120upx;left: 260upx;
		}
		.date{
			bottom:20upx;left: 260upx;
		}
		.btn{
			width: 120upx;
			height: 40upx;
			background-color: white;
			top: 30upx;
			right: 20upx;
			border-radius: 20upx;
			image{
				height: 40upx;
				width: 40upx;
			}
			.btn-text{
				color: #67BCB9;
			}
		}
	}
</style>
