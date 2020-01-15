<template>
	<view class="padding" style="padding-top: 0upx;">
		<view style="min-height: 85vh;">
			<view class="list-wrapper margin-top flex align-center">
				<radio></radio>
				<view class="coupon-wrapper">
					<image src="/static/my/coupon/coupon-bg.png"></image>
					<view class="title text-xl">6元代金券</view>
					<view class="scope text-sm">范围：拿铁</view>
					<view class="date text-sm">有效期：不限</view>
				</view>
			</view>
			<view class="list-wrapper margin-top flex align-center">
				<radio></radio>
				<view class="coupon-wrapper">
					<image src="/static/my/coupon/coupon-bg.png"></image>
					<view class="title text-xl">6元代金券</view>
					<view class="scope text-sm">范围：拿铁</view>
					<view class="context text-sm">内容：满100.优惠5元</view>
					<view class="date text-sm">有效期：不限</view>
				</view>
			</view>
		</view>
		<view class="btn margin-top flex justify-center align-center">确定</view>
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
		background-color: #67BCB9;
		color: white;
		box-shadow: 0upx 2upx 8upx 1upx rgba(153, 153, 153, 0.5);
		border-radius: 4upx;
		height: 78upx;
	}

	image {
		margin-left: 20upx;
		width: 621upx;
		height: 206upx;
	}

	.coupon-wrapper {
		color: #FFFFFF;
		position: relative;
		height: 206upx;

		image {
			width: 621upx;
			height: 206upx;
		}

		view {
			position: absolute;

		}

		.title {
			top: 30upx;
			left: 260upx;
		}

		.context {
			top: 120upx;
			left: 260upx;
		}

		.scope {
			top: 85upx;
			left: 260upx;
		}

		.date {
			bottom: 16upx;
			left: 260upx;
		}
	}
</style>
<style>
	radio .wx-radio-input.wx-radio-input-checked {
		background-color: #67BCB9 !important;
		border-color: #67BCB9 !important;
	}
</style>
