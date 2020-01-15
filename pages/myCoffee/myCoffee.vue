<template>
	<view class="padding">
		<view class="address-wrapper flex flex-direction justify-between">
			<view class="flex justify-between align-center">
				<view class="text-gray">当前位置</view>
				<view class="address link flex align-center">附近的咖啡机</view>
			</view>
			<view class="text-black" style="font-size: 22upx;">…建设路192号中信广场负一层中天购物城西南门</view>
		</view>
		<view class="coupon-wrapper margin-top">
			<image src="/static/my/coupon/coupon-bg.png"></image>
			<view class="title text-xl">拿铁</view>
			<view class="scope text-sm" @click="areaDialogDialogShow">查看可用范围</view>
			<view class="btn flex justify-center align-center" @click="specsDialogShow()">立即出杯</view>
			<view class="share flex align-center justify-center">
				<image src="/static/my/coupon/share-white.png" mode=""></image>
				<text class="btn-text">转赠</text>
			</view>
		</view>
		<view class="coupon-wrapper margin-top">
			<image src="/static/my/coupon/coupon-bg-gray.png"></image>
			<view class="title text-xl">拿铁</view>
			<view class="scope text-sm" style="color: white;">查看可用范围</view>
			<view class="btn flex justify-center align-center" style="color: #BEBEBE;">立即出杯</view>
			<view class="share flex align-center justify-center">
				<image src="/static/my/coupon/share-white.png" mode=""></image>
				<text class="btn-text">转赠</text>
			</view>
		</view>
		<!-- 弹出框 -->
		<specs-dialog ref="specsDialog" />
		<area-dialog ref="areaDialog"></area-dialog>

	</view>
</template>

<script>
	import specsDialog from './components/specsDilaog.vue';
	import areaDialog from './components/areaDialog.vue';
	export default {
		data() {
			return {

			}
		},
		components: {
			areaDialog,
			specsDialog
		},
		methods: {
			specsDialogShow() {
				this.$refs.specsDialog.init();
			},
			areaDialogDialogShow() {
				this.$refs.areaDialog.init();
			}
		}
	}
</script>

<style lang="less" scoped>
	.address-wrapper {
		padding: 20upx 30upx;
		height: 121upx;
		box-shadow: 0px 2upx 8upx 1upx rgba(220, 220, 220, 0.5);
		border-radius: 61upx;

		.link {
			color: #54A9AC;

			&::after {
				font-family: cuIcon;
				display: block;
				content: "\e6a3";
				font-size: 20upx;
				color: #54A9AC;
				margin-left: 4upx;
				margin-top: 3upx;
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

		.scope {
			top: 85upx;
			left: 260upx;
			text-decoration: underline;
			color: #FFDF85;
		}

		.btn {
			width: 164upx;
			height: 54upx;
			background-color: white;
			color: #54A9AC;
			border-radius: 4upx;
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
