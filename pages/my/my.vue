<template>
	<view class="padding-lr">
		<view class="header-wrapper">
			<view class="flex header">
				<image :src="avatar" class="cu-avatar xl round" mode="widthFix" @click="lookAvatar"></image>
				<view class="flex flex-direction justify-center margin-left">
					<view class="title">Tzw_nine</view>
					<view class="code margin-top-xs">我的邀请码：MWJ020</view>
				</view>
			</view>
		</view>
		<navigator url="./coupon/coupon">
			<view class="list-wrapper">
				<view class="list-item flex align-center text-black">
					<image src="../../static/my/coupon.png"></image>
					<view class="margin-left-sm">我的优惠券</view>
				</view>
			</view>
		</navigator>
		<navigator url="./order/order">
		<view class="list-wrapper">
			<view class="list-item flex align-center text-black">
				<image src="../../static/my/order.png"></image>
				<view class="margin-left-sm">我的订单</view>
			</view>
		</view>
		</navigator>
		<navigator url="./visit/visit">
			<view class="list-wrapper">
				<view class="list-item flex align-center text-black">
					<image src="../../static/my/visit.png"></image>
					<view class="margin-left-sm">个人邀请码</view>
				</view>
			</view>
		</navigator>
		<navigator url="./code/code">
			<view class="list-wrapper">
				<view class="list-item flex align-center text-black">
					<image src="../../static/my/code.png"></image>
					<view class="margin-left-sm">兑换码兑换</view>
				</view>
			</view>
		</navigator>
		<navigator url="./callback/callback">
			<view class="list-wrapper">
				<view class="list-item flex align-center text-black">
					<image src="../../static/my/callback.png"></image>
					<view class="margin-left-sm">我要反馈</view>
				</view>
			</view>
		</navigator>
		<view class="list-wrapper" @click="callPhone">
			<view class="list-item flex align-center text-black">
				<image src="../../static/my/phone.png"></image>
				<view class="margin-left-sm">联系客服</view>
				<view class="right-text">0750-33883582</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/api/user';
export default {
	data() {
		return {
			avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2900675597,3091178467&fm=111&gp=0.jpg'
		}
	},
	
	onLoad() {
		getUserInfo().then(resp => {
			console.log('=== resp: ', resp);
		});
	},
	
	methods: {
		lookAvatar(){
			uni.previewImage({
				urls:[this.avatar]
			})
		},
		//打电话
		callPhone() {
			uni.makePhoneCall({
				phoneNumber: '0750-33883582' //仅为示例
			});
		}
	}
}
</script>

<style lang="less" scoped>
	.header-wrapper {
		padding-top: 1upx;
		height: 230upx;
		border-bottom: solid 1upx #F6F6F6;

		.header {
			margin-top: 60upx;

			image {
				width: 134upx;
				height: 134upx;
			}

			.title {
				color: #333333;
				font-size: 36upx;
			}

			.code {
				color: #999999;
				font-size: 26upx;
			}
		}
	}

	.list-wrapper {
		.list-item {
			position: relative;
			height: 95upx;
			border-bottom: solid 1upx #F6F6F6;

			image {
				width: 30upx;
				height: 30upx;
			}

			.right-text {
				position: absolute;
				right: 30upx;
				color: #999999;
			}
		}
	}

	.list-item::after {
		font-family: cuIcon;
		display: block;
		content: "\e6a3";
		position: absolute;
		font-size: 28upx;
		color: #BBBBBB;
		width: 60upx;
		text-align: center;
		right: -20upx;
		margin: auto;
	}
</style>
