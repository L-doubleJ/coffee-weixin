<template>
	<view class="padding">
		<view class="flex justify-center">
			<image src="../../../static/my/visit/main.png" class="main-bg"></image>
		</view>
		<view class="input-wrapper flex-direction flex justify-between margin-top">
			<input type="text" placeholder-class="place-holder" placeholder="输入兑换码获取奖品" class="input padding-lr-sm" />
			<button class="btn">提交</button>
		</view>
		<view class="explain-wrapper flex flex-direction justify-between margin-top">
			<view class="title">活动说明</view>
			<view class="context">{{text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '成功参与此次活动的用户，均可获得现金券，此礼券通用，无最低消费限制，不可用于其他类商品交易；现金券有效期5月1日-5月31日，礼券不可转让、不可返现。'
			}
		}
	}
</script>

<style lang="less">
	//输入框提示的样式
	.place-holder {
		color: #BBBBBB;
	}

	page {
		background-color: #D9EBE6;
	}

	.main-bg {
		width: 551upx;
		height: 396upx;
		margin-top: 47upx;
	}

	.input-wrapper {
		background-color: white;
		height: 278upx;
		padding: 43upx 30upx;
		box-shadow: 0px 2upx 8upx 2upx rgba(210, 210, 210, 0.5);
		border-radius: 4upx;

		.input {
			height: 82upx;
			border: 1upx solid #D2D2D2;
			border-radius: 4upx;
		}

		.btn {
			width: 100%;
			background-color: #67BCB9;
			color: white;
			font-size: 30upx;
			box-shadow: 0px 2upx 8upx 1upx rgba(177, 177, 177, 0.5);
			border-radius: 4upx;
		}
	}

	.explain-wrapper {
		background-color: white;
		height: 213upx;
		padding: 27upx;
		box-shadow: 0px 2upx 16upx 0px rgba(219, 219, 219, 0.5);
		border-radius: 4upx;

		.title {
			font-size: 30upx;
			color: #333333;
		}

		.context {
			color: #666666;
			font-size: 24upx;
		}
	}
</style>
