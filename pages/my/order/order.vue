<template>
	<view class="padding">
		<view class="list-wrapper padding bg-white margin-top-sm">
			<view class="header-wrapper flex">
				<view class="width100"> 订单编号：OR125849840</view>
				<view class="state text-right">待发货</view>
			</view>
			<view class="content flex margin-top-sm">
				<view class="flex width100">
					<image src="../../../static/home/banner.png" mode="aspectFill"></image>
					<text class="margin-left-sm">拿铁</text>
				</view>
				<view class="flex flex-direction text-right justify-between content-right margin-left text-df">
					<text>￥123</text>
					<text class="num">x1</text>
				</view>
			</view>
			<view class="flex justify-end margin-top align-center">
				<text class="text-xs">共2件商品 合计：</text>
				<text class="text-df">¥ 50</text>
			</view>
		</view>
		<view class="list-wrapper padding bg-white margin-top-sm">
			<view class="header-wrapper flex">
				<view class="width100"> 订单编号：OR125849840</view>
				<view class="state text-right">待发货</view>
			</view>
			<view class="content flex margin-top-sm">
				<view class="flex width100">
					<image src="../../../static/home/banner.png" mode="aspectFill"></image>
					<text class="margin-left-sm">拿铁</text>
				</view>
				<view class="flex flex-direction text-right justify-between content-right margin-left text-df">
					<text>￥123</text>
					<text class="num">x1</text>
				</view>
			</view>
			<view class="flex justify-end margin-top align-center">
				<text class="text-xs">共2件商品 合计：</text>
				<text class="text-df">¥ 50</text>
			</view>
			<view class="flex justify-end margin-top">
				<view class="btn text-white flex justify-center text-sm align-center">确认收货</view>
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
	page{
		background-color: #F6F6F6;
	}
	.list-wrapper {
		border-radius: 8upx;

		.header-wrapper {
			height: 60upx;
			border-bottom: 1upx solid #F6F6F6;

			.state {
				flex-shrink: 0;
				color: #FFA569;
			}
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
		}

		.btn {
			width: 144upx;
			height: 50upx;
			background-color: #67BCB9;
			border-radius:4upx;
		}

	}

	page {
		background-color: #F6F6F6;
	}
</style>
