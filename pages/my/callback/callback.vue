<template>
	<view class="padding">
		<view style="min-height: 85vh;">
			<view class="list-wrapper flex flex-direction padding-sm margin-bottom-sm bg-white">
				<view class="date">2019-05-06 18:37</view>
				<view class="content flex flex-direction justify-center">
					<view class="flex align-center">
						<image src="../../../static/my/callback/question.png"></image>
						<view class="key margin-left-xs">问题类别：</view>
						<view class="value">无法出杯</view>
					</view>
					<view class="flex align-center margin-top-sm">
						<image src="../../../static/my/callback/talk.png"></image>
						<view class="key margin-left-xs">回复：</view>
						<view class="value">关你憨憨</view>
					</view>
				</view>
			</view>
			<view class="list-wrapper flex flex-direction padding-sm margin-bottom-sm bg-white">
				<view class="date">2019-05-06 18:37</view>
				<view class="content flex flex-direction justify-center">
					<view class="flex align-center">
						<image src="../../../static/my/callback/question.png"></image>
						<view class="key margin-left-xs">问题类别：</view>
						<view class="value">无法出杯</view>
					</view>
					<view class="flex align-center margin-top-sm">
						<image src="../../../static/my/callback/talk.png"></image>
						<view class="key margin-left-xs">回复：</view>
						<view class="value">关你憨憨</view>
					</view>
				</view>
			</view>
		</view>
		<navigator url="addCallBack/addCallBack">
		<button class="btn">我要反馈</button>
		</navigator>
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

<style lang="less">
	.btn {
		background-color: #67BCB9;
		color: white;
		font-size:28upx;
	}

	page {
		background-color: #F6F6F6;
	}

	.list-wrapper {
		box-shadow: 0px 2upx 4upx 0px rgba(240, 240, 240, 0.5);
		border-radius: 8upx;
		height: 218upx;

		.date {
			min-height: 52upx;
			color: #999999;
			border-bottom: 1upx solid #F6F6F6;
		}

		.content {
			height: 100%;

			image {
				width: 30upx;
				height: 30upx;
			}

			.key {
				color: #999999;
			}

			.value {
				color: black;
			}
		}
	}
</style>
