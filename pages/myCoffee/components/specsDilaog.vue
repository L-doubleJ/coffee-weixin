<template>
	<view class="specs-dialog padding-lr" v-if="dialogVisible" @click.stop="">
		<view class="content-wrapper bg-white text-black">
			<view class="padding flex justify-between align-center">
				<view class="flex align-end">
					<view class="text-black text-xl">拿铁</view>
					<view class="text-gray margin-left-xs">Latte</view>
				</view>
				<image src="/static/close.png" @click.stop="close"></image>
			</view>
			<view class="content padding">
				<view style="font-size: 30upx;">规格</view>
				<view class="margin-top flex">
					<view class="specs-group flex justify-center align-center">淡口味</view>
					<view class="specs-group flex justify-center align-center margin-left-sm">大众口味</view>
					<view class="specs-group flex justify-center align-center margin-left-sm">自定义</view>
				</view>

				<view class="margin-top-lg flex align-center">
					<view class="key">咖啡浓度：</view>
					<view class="flex justify-around width100">
						<view class="val flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
					</view>
				</view>
				<view class="margin-top-lg flex align-center">
					<view class="key">咖啡浓度：</view>
					<view class="flex justify-around width100">
						<view class="val flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
					</view>
				</view>
				<view class="margin-top-lg flex align-center">
					<view class="key">咖啡浓度：</view>
					<view class="flex justify-around width100">
						<view class="val flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
						<view class="val  flex align-center justify-center">很淡</view>
					</view>
				</view>
			</view>
			<view class="padding">
				<view class="btn flex align-center justify-center">
					确认兑换
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false
			}
		},
		methods: {
			init() {
				this.dialogVisible = true;
			},
			close(){
				this.dialogVisible = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	.active{
		border: 1upx solid #67BCB9;	
		box-sizing: border-box;
		color: #67BCB9 !important;
	}
	//弹窗
	.specs-dialog {
		top: 0;
		left: 0;
		z-index: 9999;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .6);

		.content-wrapper {
			margin-top: 175upx;
			border-radius: 12upx;

			image {
				width: 32upx;
				height: 32upx;
			}

			.content {
				border-top: 8upx solid #F3F3F3;
				border-bottom: 1upx solid #F3F3F3;

				.specs-group {
					width: 172upx;
					height: 62upx;
					border-radius: 4upx;
					color: #666666;
					background-color: #F8F8F8;
				}

				.key {
					flex-shrink: 0;
					width: 130upx;
					font-size: 26upx;
				}

				.val {
					width: 88upx;
					height: 48upx;
					border-radius: 4upx;
					color: #666666;
					background-color: #F8F8F8;
				}
			}
			.btn {
				height: 66upx;
				background-color: #67BCB9;
				color: white;
				box-shadow: 0px 2upx 8upx 1upx rgba(153, 153, 153, 0.5);
				border-radius: 3upx;
			}
		}
	}
</style>
