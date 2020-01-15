<template>
	<view>
		<view class="state-wrapper padding-lr flex flex-direction justify-center">
			<view class="text-xl">退货中</view>
			<view class="margin-top-xs">卖家同意退货退款，请填写退货运单</view>
		</view>
		<view class="padding header flex align-center text-black">
			<image src="/static/public/adress.png" mode=""></image>
			<view class="text-black margin-left-xs">
				<view>江门市 蓬江区 环市街道 建设三路智慧城8楼 822华城科技</view>
				<view>
					<text class="text-sm">罗家宝</text>
					<text class="text-gray margin-left-sm text-sm">13612312312</text>
				</view>
			</view>
		</view>
		<view class="content flex padding">
			<view class="flex width100">
				<image src="/static/home/banner.png" mode="aspectFill"></image>
				<text class="margin-left-sm">拿铁</text>
			</view>
			<view class="text-right content-right margin-left text-df">
				<text class="num">x1</text>
			</view>
		</view>
		<view class="padding-lr padding-tb-sm text-black">
			<view class="list-item padding-tb flex justify-between">
				<view>退款编号</view>
				<view class="text-sm text-gray">1256986201</view>
			</view>
			<view class="list-item padding-tb flex justify-between">
				<view>退款状态</view>
				<view class="text-sm text-gray">退货中</view>
			</view>
			<view class="list-item padding-tb flex justify-between">
				<view>退款类型</view>
				<view class="text-sm text-gray">仅退款</view>
			</view>
			<view class="list-item padding-tb flex justify-between">
				<view>退款类型</view>
				<view class="text-sm">¥ 68</view>
			</view>
			<view class="list-item padding-tb flex justify-between">
				<view>退款说明</view>
				<view class="text-sm">暂无说明</view>
			</view>
		</view>
		<view class="padding">
			<view class="btn flex justify-center align-center">撤销</view>
		</view>
		<view class="padding text-center" style="padding-top: 0;">
			<view style="text-decoration: underline;color: #67BCB9;">填写退货运单</view>
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

<style lang="less" scoped>
	.btn {
		color: white;
		height: 78upx;
		box-shadow: 0px 2upx 8upx 1upx rgba(153, 153, 153, 0.5);
		border-radius: 4upx;
		background-color: #67BCB9;
	}

	.state-wrapper {
		height: 195upx;
		color: white;
		background-color: #67BCB9;
	}

	.list-item {
		border-bottom: 1upx solid #EDEDED;
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

	.header {
		border-bottom: 1upx solid #F6F6F6;

		image {
			flex-shrink: 0;
			width: 55upx;
			height: 50upx;
		}

		&::after {
			flex-shrink: 0;
			margin-left: 20upx;
			font-family: cuIcon;
			display: block;
			content: "\e6a3";
			font-size: 28upx;
			color: #BBBBBB;

		}
	}
</style>
