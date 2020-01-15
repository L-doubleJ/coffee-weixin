<template>
	<view>
		<view class="ac-header margin-bottom-sm">
			<view class="image-content banner flex">
				<image mode="aspectFill" :src="detail.image"></image>
			</view>

			<view class="header-box margin-bottom-sm ">
				<view class="header">
					<view class="text-bold text-price">
					{{detail.price}}
				</view>
				<view class="text-bold text-black">
					{{detail.price}}
				</view>
				<view class="text-b0b0 text-sm margin-top-xs">已售：<text class="text-red">{{detail.stock}}</text></view>
				</view>
				
			</view>
			<!-- <view class="info">
				<view class="list flex justify-between">
					<view class="text-sm text-666"><text class="cuIcon-locationfill margin-right-xs text-b0b0"></text> 江门东湖影剧院</view>
					<text class="cuIcon-right text-999"></text>
				</view>
				<a href="tel:07508227381">
					<view class="list flex justify-between">
						<view class="text-sm text-666"><text class="cuIcon-mobilefill margin-right-xs text-b0b0"></text> 0750-8227381</view>
						<text class="cuIcon-right text-999"></text>
					</view>
				</a>
			</view> -->
			<view class="info">
				<view class="list flex justify-between">
					<view class="text-sm text-666">江门东湖影剧院</view>
					<view class="text-sm text-666">江门东湖影剧院</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {
					title: 'asd',
					price: 150,
					title: 'asd',
					image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200113/397d65c30428fd6cb763f99916345722.png'
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.banner image {
		width: 100%;
		height: 352upx;
	}
	.ac-header {
		position: relative;
		background: #F8F8F8;
		
		.header-box {
			padding: 0upx 30upx;
			position: absolute;
			bottom: 250upx;
			width: 100%;
		}

		.header {
			padding: 22upx;
			box-shadow: 0px 2px 13px 2px rgba(200, 200, 200, 0.5);
			border-radius: 6upx;
			background: #fff;
			
		}

		.info {
			background: #fff;
			padding-top: 100upx;

			.list {
				padding: 30upx;
				border-bottom: 2upx solid #F6F6F6;
			}

			a {
				text-decoration: none;
			}
		}
	}
</style>
