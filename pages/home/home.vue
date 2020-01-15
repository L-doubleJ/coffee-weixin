<template>
	<view class="padding-lr">
		<swiper indicator-dots indicator-color="#D8D8D8" autoplay indicator-active-color="#54A9AC" interval="2500">
			<swiper-item>
				<image src="/static/home/banner.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/home/banner.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/home/banner.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/home/banner.png"></image>
			</swiper-item>
		</swiper>

		<view class="account-wrapper margin-top padding-sm">
			<view class="text text-sm">臻盈咖啡关联的公众号</view>
			<view class="content flex align-center">
				<view class="flex width100">
					<view class="circle flex justify-center align-center">
						<image src="../../static/logo-small.png"></image>
					</view>
					<view class="flex flex-direction justify-between margin-left">
						<view class="title">
							臻盈咖啡
						</view>
						<view class="context">
							关注公众号领取优惠券哦
						</view>
					</view>
				</view>
				<view class="btn flex justify-center align-center">
					关注
				</view>
			</view>
		</view>
		<navigator url="sign/sign">
			<view class="sign flex justify-center align-center">
				<text>每日签到</text>
			</view>
		</navigator>
	</view>
</template>

<script>
import { wxLogin } from '@/utils';

export default {
	data() {
		return {

		}
	},
	
	onLoad(option) {
		// 重新登录
		if (option.relogin) {
			wxLogin();
		}
	},
	
	methods: {

	}
}
</script>

<style lang="less">
	//签到
	.sign {
		text-align: center;
		width: 94upx;
		height: 94upx;
		border-radius: 50%;
		background-color: #67BCB9;
		color: #FFFFFF;
		font-size: 24upx;
		position: fixed;
		bottom: 123upx;
		right: 10upx;
		box-shadow: 0px 2px 10px 3px rgba(208, 235, 240, 0.5);

		text {
			width: 48upx;
		}
	}

	//微信小程序样式
	.wx-swiper-dot {
		border-radius: 0 !important;
		width: 28upx !important;
		height: 4upx !important;
	}

	swiper {
		height: 428upx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.account-wrapper {
		height: 163upx;
		box-shadow: 0px 2px 2px 1px rgba(236, 236, 236, 0.5);

		.text {
			color: #999999;
		}

		.content {
			height: 76upx;
			margin-top: 16upx;

			.circle {
				width: 76upx;
				height: 76upx;
				border-radius: 50%;
				box-shadow: 0px 2px 12px 0px rgba(196, 196, 196, 0.18);

				image {
					height: 20upx;
					width: 60upx;
				}
			}

			.title {
				color: #333333;
				font-size: 28upx;
			}

			.context {
				color: #666666;
				font-size: 24upx;
			}

			.btn {
				width: 121upx;
				height: 57upx;
				border-radius: 8upx;
				border: 1upx solid #67BCB9;
				color: #67BCB9;
				flex-shrink: 0;
			}
		}
	}
</style>
