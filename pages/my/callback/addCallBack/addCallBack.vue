<template>
	<view>
		<view class="wrapper" style="min-height: 85vh;">
			<view class="bg-white padding">
				<view class="title-wapper flex">
					<text>问题详情</text>
				</view>
				<textarea class="text-sm dsc margin-top-sm width100" placeholder-class="place-holder" v-model="formData.detail"
				 placeholder="点击输入问题详情，例如在什么地点发生什么问题"></textarea>
			</view>
			<picker mode="selector" :range="picker" @change="pickerChange" class="state-wrapper text-df">
				{{picker[index] ? picker[index]:'请选择问题类别'}}
			</picker>
			<view class="padding-lr text-df margin-top-sm">上传</view>
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
		</view>
		<view class="padding-lr margin-top"><button class="btn flex align-center justify-center">提交</button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picker: ['1', '2'],
				index: -1,
				imgList: [],
				imgCount: 1
			}
		},
		onLoad() {

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

<style lang="less">
	//下箭头
	.state-wrapper::after {
		font-family: cuIcon;
		display: block;
		content: "\e6a3";
		position: absolute;
		font-size: 28upx;
		color: #BBBBBB;
		width: 60upx;
		text-align: center;
		right: 40upx;
		margin: auto;
		top: 50%;
		transform: translateY(-50%) rotate(90deg);
	}

	//输入框提示的样式
	.place-holder {
		color: #BBBBBB;
	}

	.state-wrapper {
		position: relative;
		border-top: 20upx solid #F6F6F6;
		border-bottom: 20upx solid #F6F6F6;
		padding: 25upx 30upx;
	}

	.btn {
		background-color: #67BCB9;
		font-size: 28upx;
		height: 78upx;
		color: white;
	}

	.title-wapper {
		color: #333333;
		font-size: 28upx;
	}

	.dsc {
		height: 260upx;
	}

	.icon {
		width: 38upx;
		height: 38upx;
	}

	.upload-title {
		background-color: #f1f1f1;
		border-radius: 4px;
		color: #999999;
		font-size: 20upx !important;
	}

	.title {
		color: #666666;
	}
</style>
