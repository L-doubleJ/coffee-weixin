<template>
	<view v-if="dialovVisable">
		<view class="car-container width100">
			<view  v-if="goodsShow">
				<view class="header flex justify-end align-center padding-sm">
					<image src="../static/public/clear.png"></image>
					<view class="text-gray ">清空购物车</view>
				</view>
				<scroll-view scroll-y class="content">
					<view class="list-wrapper padding flex justify-between align-center text-black">
						<view>拿铁</view>
						<view class="flex align-center">
							<view class="text-red">¥ 28</view>
							<image class="margin-lr-sm" src="../static/public/reduce.png" mode=""></image>
							<view class="flex">1</view>
							<image class="margin-left-sm" src="../static/public/add.png" mode=""></image>
						</view>
					</view>
					<view class="list-wrapper padding flex justify-between align-center text-black">
						<view>拿铁</view>
						<view class="flex align-center">
							<view class="text-red">¥ 28</view>
							<image class="margin-lr-sm" src="../static/public/reduce.png" mode=""></image>
							<view class="flex">1</view>
							<image class="margin-left-sm" src="../static/public/add.png" mode=""></image>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="footer flex align-center justify-end text-black">
				<view class="develop flex justify-center align-center" :style="developStyle" @click="goodsShow = !goodsShow;"></view>
				<view class="text-sm">(共2件)</view>
				<view class="margin-left-xs text-sm">合计：</view>
				<view class="text-red text-lg" style="margin-top: 5upx;">¥ 78</view>
				<view class="balance-btn flex justify-center align-center margin-left-sm">马上结算</view>
			</view>
		</view>
		<view class="mark" v-if="goodsShow" @click.stop="goodsShow=false"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsShow: true,
				dialovVisable:false
			}
		},
		computed: {
			developStyle() {
				if (this.goodsShow) {
					return 'transform: rotate(-90deg);'
				} else {
					return 'transform: rotate(90deg);'
				}
			}
		},
		methods: {
		init(){
			this.dialovVisable = true;
		}
		}
	}
</script>

<style lang="less" scoped>
	.car-container {
		background-color: white;
		z-index: 9999;
		position: fixed;
		bottom: 0;
		left: 0;

		.header {
			background-color: #F4F4F4;

			image {
				width: 40upx;
				height: 40upx;
			}
		}

		.content {
			max-height: 432upx;

			.list-wrapper {
				border-bottom: 1upx solid #F4F4F4;

				&:nth-last-child(1) {
					border-bottom: none;
				}

				image {
					width: 48upx;
					height: 48upx;
				}
			}
		}

		.footer {
			padding: 10upx 20upx;
			border-top: 1upx solid #F4F4F4;

			.balance-btn {
				color: white;
				width: 218upx;
				height: 78upx;
				font-size: 30upx;
				background-color: #67BCB9;
				box-shadow: 0px 2upx 8upx 1upx rgba(228, 228, 228, 0.5);
				border-radius: 39upx;
			}

			.develop {
				position: absolute;
				left: 30upx;
				width: 50upx;
				height: 50upx;
				transform: rotate(-90deg);
				transition: all 0.4s;

				&::before {
					font-family: cuIcon;
					display: block;
					align-items: center;
					content: "\e6a3";
					font-size: 28upx;
					color: #BBBBBB;
				}
			}

		}
	}

	.mark {
		width: 100vw;
		height: 100vh;
		z-index: 999;
		position: fixed;
		background-color: rgba(0, 0, 0, .6);
		bottom: 0;
		left: 0;
	}
</style>
