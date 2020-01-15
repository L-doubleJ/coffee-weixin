<template>
	<view class="padding-bottom">
		<view class="header padding-lr flex-direction flex justify-center text-white">
			<view class="title">退货中</view>
			<view class="context margin-top-xs">卖家同意退货退款，请填写退货运单</view>
		</view>
		<view class="adress-wrapper flex padding align-center" @click="test">
			<image src="../../static/public/adress.png"></image>
			<view class="info margin-left-sm">
				<view class="address text-df">江门市 蓬江区 环市街道 建设三路智慧城8楼 822华城科技</view>
				<view class="flex align-center margin-top-xs">
					<view class="text-black">罗嘉宝</view>
					<view class="text-gray margin-left-xs">1368888888</view>
				</view>
			</view>
		</view>
		<view class="content flex padding">
			<view class="flex width100">
				<image src="../../static/home/banner.png" mode="aspectFill"></image>
				<text class="margin-left-sm">拿铁</text>
			</view>
			<view class="flex flex-direction text-right content-right margin-left text-df">
				<text class="num">x1</text>
			</view>
		</view>
		<view class="list-wrapper padding-lr">
			<view class="list flex justify-between align-center">
				<view class="text-black text-df">退款编号</view>
				<view class="text-gray">1256986201</view>
			</view>
			<view class="list flex justify-between align-center">
				<view class="text-black text-df">退款状态</view>
				<view class="text-gray">退货中</view>
			</view>
			<view class="list flex justify-between align-center">
				<view class="text-black text-df">退款类型</view>
				<view class="text-gray">仅退款</view>
			</view>
			<view class="list flex justify-between align-center">
				<view class="text-black text-df">退款原因</view>
				<view class="text-gray">不喜欢</view>
			</view>
			<view class="list flex justify-between align-center">
				<view class="text-black text-df">退款金额</view>
				<view class="text-black">¥ 68</view>
			</view>
			<view class="list flex justify-between align-center">
				<view class="text-black text-df">退款说明</view>
				<view class="text-gray">——</view>
			</view>
			<view class="btn margin-top text-white flex align-center justify-center">撤销</view>
			<view class="write margin-top-xs">填写退货运单</view>
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
			test() {
				uni.chooseLocation({
					success(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		background-color: #67BCB9;
		height: 195upx;

		.title {
			font-size: 36upx;
		}

		.context {
			font-size: 28upx;
		}
	}

	.adress-wrapper {
		border-bottom: 1upx solid #F6F6F6;

		image {
			width: 60upx;
			height: 60upx;
		}

		.info {
			.address {
				width: 568upx;
			}
		}

		&::after {
			font-family: cuIcon;
			display: block;
			content: "\e6a3";
			font-size: 28upx;
			color: #BBBBBB;
			width: 60upx;
			position: absolute;
			right: 0upx;
		}

	}

	.content {
		border-bottom: 16upx solid #F6F6F6;

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
	}

	.list-wrapper {
		.list {
			height: 95upx;
			border-bottom: 1upx solid #F6F6F6;
		}

		.btn {
			height: 78upx;
			background-color: #67BCB9;
			box-shadow: 0px 2upx 8upx 1upx rgba(153, 153, 153, 0.5);
			border-radius: 4upx;
		}

		.write {
			color: #67BCB9;
			font-size: 28upx;
			text-decoration: underline;
			text-align: center;
		}
	}
</style>
