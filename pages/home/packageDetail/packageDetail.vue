<template>
	<view>
		<view class="container padding">
			<view class="content flex margin-top">
				<view class="flex width100">
					<image src="/static/home/banner.png" mode="aspectFill"></image>
					<view class="margin-left-sm flex flex-direction justify-between">
						<text class="text-df">拿铁</text>
						<view class="specs flex align-center">选择规格</view>
					</view>
				</view>
				<view class="flex flex-direction text-right justify-between content-right margin-left text-df">
					<text class="text-red">￥123</text>
					<text class="num">x1</text>
				</view>
			</view>
			<view class="content flex margin-top">
				<view class="flex width100">
					<image src="/static/home/banner.png" mode="aspectFill"></image>
					<view class="margin-left-sm flex flex-direction justify-between">
						<text class="text-df">拿铁</text>
						<view class="specs flex align-center">选择规格</view>
					</view>
				</view>
				<view class="flex flex-direction text-right justify-between content-right margin-left text-df">
					<text class="text-red">￥123</text>
					<text class="num">x1</text>
				</view>
			</view>
			<view class="content flex margin-top">
				<view class="flex width100">
					<image src="/static/home/banner.png" mode="aspectFill"></image>
					<view class="margin-left-sm flex flex-direction justify-between">
						<text class="text-df">拿铁</text>
						<view class="specs flex align-center">选择规格</view>
					</view>
				</view>
				<view class="flex flex-direction text-right justify-between content-right margin-left text-df">
					<text class="text-red">￥123</text>
					<text class="num">x1</text>
				</view>
			</view>
		</view>
		<view class="padding" style="padding-bottom: 111upx;">
			<view class="text-df text-black">活动说明</view>
			<view class="margin-top">成功参与此次活动的用户，均可获得现金券，此礼券通用，无最低消费限制，不可用于其他类商品交易；现金券有效期5月1日-5月31日，礼券不可转让、不可返现。</view>
		</view>
		<view class="topay-wrapper padding-lr flex align-center justify-end">
			<view class="flex flex-direction justify-center text-black">
				<view class="flex align-center">
					<view style="margin-bottom:5upx">套餐价：</view>
					<view class="text-red">¥ </view>
					<view class="text-red margin-left-xs" style="font-size: 30upx;">78.00</view>
				</view>
				<view class="text-xs self-end">
					已节省：¥ 10.00
				</view>
			</view>
			<view class="btn flex justify-center align-center margin-left-sm">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.topay-wrapper{
		width: 100%;
		border-top:1upx solid #F4F4F4;
		height: 111upx;
		
		position: fixed;
		bottom: 0px;
		.btn{
			color: white;
			height: 78upx;
			width: 218upx;
			box-shadow:0px 2upx 8upx 1upx rgba(228,228,228,0.5);
			border-radius:39upx;
			background-color: #67BCB9;
		}
	}
	.container {
		padding-top: 0upx;
		border-bottom: 10upx solid #F8F8F8;
	}

	.content {
		height: 150upx;

		image {
			width: 150upx;
			height: 150upx;
		}

		.content-right {
			flex-shrink: 0;
		}

		.num {
			color: #999999;
		}

		.specs {
			color: #67BCB9;

			&::after {
				margin-left: 10upx;
				font-family: cuIcon;
				display: block;
				content: "\e6a3";
				font-size: 24upx;
				color: #67BCB9;
				transform: rotate(90deg);
				text-align: center;
			}
		}
	}
</style>
