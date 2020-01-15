<template>
	<view class="flex flex-direction">
		<image class="main" src="/static/main.png"></image>
		<view class="detail-container">
			<view class="padding detail-wrapper">
				<view class="width100 detail padding">
					<view class="text-black" style="font-size: 30upx;">当季1产区挂耳式咖啡挂耳包手冲滤挂烘焙现磨原味纯黑咖啡粉 x3</view>
					<view class="price-wrapper flex align-center padding-tb-xs">
						<text class="text-red text-df">拼团价：¥</text>
						<text class="text-red" style="font-size: 40upx;">80.80</text>
						<text class="text-gray self-end text-xs margin-left-sm" style="text-decoration: line-through;margin-bottom: 4upx;">原价：¥99</text>
					</view>
					<view class="margin-top-sm tag text-xs">成团赠品</view>
					<view class="give-wrapper flex padding-tb-sm justify-between">
						<view class="text-black width100">日本进口CAFEDE KONA挂耳咖啡滤纸 便携滴漏式手冲咖啡粉过滤袋</view>
						<view class="text-gray margin-left-xl" style="flex-shrink: 0;">x 3</view>
					</view>
					<view class="flex margin-top-xs justify-between">
						<view class="text-black width100">全场通用优惠券5元</view>
						<view class="text-gray margin-left-xl" style="flex-shrink: 0;">x 2</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content-container padding">
			<view class="flex padding-tb-xs align-center">
				<view class="text-black text-df">活动时间：</view>
				<view style="color: #67BCB9;">2019-11-25 至 20</view>
			</view>
			<view class="flex padding-tb-xs align-center">
				<view class="text-black text-df">成团限时：</view>
				<view class="text-gray">24小时</view>
			</view>
			<view class="flex padding-tb-xs align-center">
				<view class="text-black text-df">成团人数：</view>
				<view class="text-gray">2</view>
			</view>
		</view>
		<view class="tips-wrapper padding">
			<view class="text-black text-df">活动说明：</view>
			<view class="margin-top text-gray">1、选择商品开团/参团 </view>
			<view class="text-gray margin-top-xs">2、邀请好友参团</view>
			<view class="text-gray margin-top-xs">3、人满成团</view>
		</view>
		<view class="person-wrapper padding">
			<view class="text-black text-df">直接参团</view>
			<view class="list padding-tb-sm flex align-center justify-between">
				<view class="flex align-center justify-center">
					<image src="/static/my/callback/question.png" mode=""></image>
					<view class="text-black margin-left-xs">Dorothy Wilson</view>
				</view>
				<view class="btn flex justify-center align-center">去拼单</view>
			</view>
			<view class="list padding-tb-sm flex align-center justify-between">
				<view class="flex align-center justify-center">
					<image src="/static/my/callback/question.png" mode=""></image>
					<view class="text-black margin-left-xs">Dorothy Wilson</view>
				</view>
				<view class="btn flex justify-center align-center">去拼单</view>
			</view>
		</view>
		<view class="visit-btn flex justify-center align-center">邀请朋友参团</view>
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
	.main {
		height: 352upx;
		width: 100%;
	}

	.detail-container {
		height: 412upx;
		background-color: #F6F6F6;
		position: relative;

		.detail-wrapper {
			padding-top: 0upx;
			width: 100%;
			position: absolute;
			left: 0;
			top: -30upx;
		}

		.detail {
			box-shadow: 0px 8upx 16upx 6upx rgba(235, 235, 235, 0.5);
			border-radius: 16upx;
			height: 412upx;
			background-color: white;

			.price-wrapper {
				border-bottom: 2upx solid #F6F6F6;
			}

			.tag {
				color: white;
				display: inline-block;
				padding: 0 12upx;
				background: linear-gradient(145deg, rgba(255, 165, 90, 1) 0%, rgba(255, 173, 112, 1) 100%);
				border-radius: 4upx;
			}

			.give-wrapper {
				border-bottom: 1upx solid #F6F6F6;
			}
		}

	}

	.tips-wrapper {
		border-top: 10upx solid #F8F8F8;
		border-bottom: 10upx solid #F8F8F8;
	}

	.person-wrapper {
		.list {
			border-bottom: 1upx solid #F6F6F6;

			image {
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}

			.btn {
				background-color: #67BCB9;
				width: 136upx;
				height: 64upx;
				border-radius: 4upx;
				color: white;
			}
		}
	}
	.visit-btn{
		background-color: #67BCB9;
		height:82upx;
		color: white;
	}
</style>
