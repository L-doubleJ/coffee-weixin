<template>
	<view>
		<view class="content padding flex margin-top-sm">
			<view class="flex width100">
				<image src="/static/home/banner.png" mode="aspectFill"></image>
				<text class="margin-left-sm">拿铁</text>
			</view>
			<view class="flex flex-direction text-right justify-between content-right margin-left text-df">
				<text>￥123</text>
				<text class="num">x1</text>
			</view>
		</view>
		<view class="option padding" style="padding-top: 0;">
			<view class="text-black flex align-center justify-between padding-tb">
				<view>退款类型</view>
				<picker mode="selector" :range="picker" @change="pickerChange" class=" text-gray text-sm">
					<view class="state-wrapper flex align-center">{{picker[index]}}</view>
				</picker>
			</view>
			<view class="text-black flex align-center justify-between padding-tb" style="border-bottom: 1upx solid #F6F6F6;">
				<view>退款金额</view>
				<view class="text-red">¥ 68</view>
			</view>
			<view class="margin-top">
				退款说明
			</view>
			<textarea class="text-sm dsc margin-top-sm width100" placeholder-class="place-holder" placeholder="点击输入详细退款原因"></textarea>
		</view>
		<view class="text-df margin-top-sm padding-lr">上传</view>
		<view class="cu-form-group margin-top-sm">
			<view class="grid col-3 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" @tap="ViewImage" :key="index" :data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
					<text class='cuIcon-cameraadd'><text class="text-sm">上传凭证(1张)</text></text>
				</view>
			</view>
		</view>
		<view class="padding-sm">
			<view class="submit-btn flex justify-center align-center">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picker: ['仅退款', '2'],
				index: 0,
				imgList: [],
				imgCount: 1
			}
		},
		methods: {
			pickerChange(e) {
				this.index = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: this.imgCount,
					success: (res) => {
						const size = 4 * 1024 * 1024;
						let arr = res.tempFiles.filter(item => item.size < size);
						arr.length < res.tempFiles.length && uni.showModal({
							title: '提示',
							showCancel: false,
							content: '图片不能大于4m'
						});
						arr.map(item => this.imgList.push(item.path));
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				this.imgList.splice(e.currentTarget.dataset.index, 1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.state-wrapper{
		&::after {
			margin-top: 4upx;
			flex-shrink: 0;
			margin-left: 20upx;
			font-family: cuIcon;
			display: block;
			content: "\e6a3";
			font-size: 24upx;
			transform: rotate(90deg);
			color: #BBBBBB;
		}
	}
	.submit-btn{
		color: white;
		box-shadow:0px 2upx 8upx 1upx rgba(153,153,153,0.5);
		border-radius:4upx;
		height: 78upx;
		background-color: #67BCB9;
	}
	.dsc {
		height: 180upx;
	}

	.place-holder {
		color: #BBBBBB;
	}

	.content {

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

	.option {
		border-top: 16upx solid #F6F6F6;
		border-bottom: 16upx solid #F6F6F6;
	}
</style>
