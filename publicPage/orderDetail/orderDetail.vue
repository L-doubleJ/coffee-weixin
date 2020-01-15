<template>
	<view>
		<view class="state-wrapper flex align-center padding-lr text-xl">待收货</view>
		<view class="logistics align-center flex padding">
			<image src="/static/public/adress.png" mode=""></image>
			<view class="text-black margin-left-xs">
				<view>商品已到达江门分拨中心</view>
				<view class="text-gray margin-top-xs text-sm">
					2019-05-05 18:00:00
				</view>
			</view>
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
		<view class="content padding text-black">
			<view class="text-sm">商品</view>
			<view class="list-wrapper flex margin-top-sm">
				<image src="../../static/drink.png" mode=""></image>
				<view class="margin-left-xs">当季1产区挂耳式咖啡挂耳包手冲滤挂烘焙现磨原味纯黑咖啡粉</view>
				<view class="margin-left align-end justify-between flex flex-direction" style="flex-shrink: 0;">
					<view>
						<view class="text-red">¥ 68.00</view>
						<view class="text-sm text-gray text-right">x2</view>
					</view>
					<view class="btn flex justify-center align-center text-sm">退款</view>
				</view>
			</view>
			<view class="padding-tb" style="border-bottom: 1upx solid #F6F6F6;">
				<view class="margin-top-sm flex text-black text-sm justify-between align-center">
					<view>商品总价</view>
					<view>¥ 68</view>
				</view>
				<view class="margin-top-sm flex text-black text-sm justify-between align-center">
					<view>商品总价</view>
					<view>¥ 68</view>
				</view>
				<view class="margin-top-sm flex text-black text-sm justify-between align-center">
					<view>商品总价</view>
					<view>¥ 68</view>
				</view>
			</view>
			<view class="padding-top flex justify-end align-center">
				<view class="text-xl">实付款：</view>
				<view class="text-red" style="font-size: 30upx;">¥ 68</view>
			</view>
		</view>
		<view class="padding-sm text-black">
			<view>本单咖啡券</view>
			<view class="coffee-coupon flex justify-between align-center margin-top-xs">
				<view class="flex align-center">
					<image src="../../static/public/address-gray.png" mode=""></image>
					<view class="text-sm" style="color: #4293FC;">广州市建设三路75号智荟城</view>
				</view>
				<view class="flex all align-center">
					<view class="text-gray text-sm">查看所有</view>
				</view>
			</view>
			<view class="coupon-wrapper margin-top">
				<image src="/static/my/coupon/coupon-bg.png"></image>
				<view class="title text-xl">拿铁</view>
				<view class="date text-sm">有效期：不限</view>
				<view class="btn flex justify-center align-center" @click="specsDialogShow()">立即出杯</view>
				<view class="share flex align-center justify-center">
					<image src="/static/my/coupon/share-white.png" mode=""></image>
					<text class="btn-text">转赠</text>
				</view>
			</view>
		</view>
		<view class="padding text-black" style="border-top: 16upx solid #F6F6F6;">
			<view>订单信息</view>
			<view class="flex align-center justify-between margin-top-sm">
				<view class="text-sm text-gray">订单编号</view>
				<view class="flex align-center">
					<view class="text-sm" style="color:#54A9AC;">复制</view>
					<view class="text-gray text-sm margin-left-xs">125899501002</view>
				</view>
			</view>
			<view class="flex align-center justify-between margin-top-sm">
				<view class="text-sm text-gray">创建时间</view>
				<view class="text-gray text-sm">2019-05-05 12:42:25</view>
			</view>
			<view class="flex align-center justify-between margin-top-sm">
				<view class="text-sm text-gray">订单备注</view>
				<view class="text-gray text-sm">哈哈哈来</view>
			</view>
		</view>
		<view class="link flex align-center justify-center text-gray">
			<image src="../../static/my/phone.png" mode=""></image>
			<view>联系客服</view>
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
	.link{
		border-top:1upx solid #F6F6F6;
		height: 80upx;
		image{
			width: 40upx;
			height: 40upx;
		}
	}
	.state-wrapper {
		color: white;
		height: 195upx;
		background-color: #67BCB9;
	}

	.logistics {
		image {
			width: 55upx;
			height: 50upx;
		}

		border-bottom: 1upx solid #F6F6F6;
	}

	.header {
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

	.content {
		border-top: 16upx solid #F6F6F6;
		border-bottom: 16upx solid #F6F6F6;

		.list-wrapper {
			image {
				flex-shrink: 0;
				width: 148upx;
				height: 148upx;
			}

			.btn {
				color: #999999;
				width: 107upx;
				height: 48upx;
				border-radius: 24upx;
				border: 1px solid #999999;
			}
		}
	}

	.coffee-coupon {

		image {
			width: 45upx;
			height: 40upx;
		}

		.all {
			&::after {
				margin-top: 4upx;
				flex-shrink: 0;
				margin-left: 20upx;
				font-family: cuIcon;
				display: block;
				content: "\e6a3";
				font-size: 24upx;
				color: #BBBBBB;
			}
		}
	}

	.coupon-wrapper {
		color: #FFFFFF;
		position: relative;
		height: 228upx;

		image {
			width: 100%;
			height: 100%;
		}

		view {
			position: absolute;

		}

		.title {
			top: 30upx;

			left: 260upx;
		}

		.date {
			bottom: 93upx;
			left: 260upx;
		}

		.btn {
			width: 164upx;
			height: 54upx;
			background-color: white;
			color: #54A9AC;
			border-radius: 26upx;
			top: 30upx;
			right: 20upx;
		}

		.share {
			width: 120upx;
			height: 40upx;
			bottom: 15upx;
			right: 20upx;

			image {
				height: 40upx;
				width: 40upx;
			}

			.btn-text {
				color: white;
			}
		}
	}
</style>
