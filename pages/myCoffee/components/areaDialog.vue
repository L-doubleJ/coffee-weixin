<template>
	<view class="area-dialog padding-lr" v-if="dialogVisible" @click.stop="">
		<view class="content-wrapper bg-white text-black padding">
			<view class="padding-bottom content">
				<view class="text-xl text-center width100">可用范围</view>
				<view class="flex margin-top">
					<view class=" text-gray">通用范围：</view>
					<view>一般市区自助机</view>
				</view>
				<view class="flex">
					<view class=" text-gray">可使用特殊范围：</view>
					<view>高速公路服务站</view>
				</view>
				<view class="flex">
					<view class=" text-gray">不可使用特殊范围：</view>
					<view>机场</view>
				</view>
			</view>
			<view class="flex width100 justify-center padding-top">
				<view class="btn flex justify-center align-center" @click="close">确定</view>
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
			close() {
				this.dialogVisible = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	//弹窗
	.area-dialog {
		top: 0;
		left: 0;
		z-index: 9999;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .6);

		.content-wrapper {
			margin-top: 272upx;
			border-radius: 12upx;

			.content {
				border-bottom: 1upx solid #F3F3F3;
			}

			.btn {
				width: 382upx;
				background-color: #67BCB9;
				color: white;
				height: 66upx;
				box-shadow: 0px 2upx 8upx 1upx rgba(153, 153, 153, 0.5);
				border-radius: 3upx;
			}
		}
	}
</style>
