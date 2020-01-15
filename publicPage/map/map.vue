<template>
	<view>
		<map style="width: 100vw; height: 100vh;" scale="15" show-location="true" :latitude="latitude" :longitude="longitude"
		 :markers="covers" @markertap="markertap">
			<cover-view class="location-container padding-left margin-right">
				<cover-view class="location-wrapper padding bg-white">
					<cover-view class="title">
						附近的咖啡机
					</cover-view>
					<cover-view class="list padding-tb flex justify-between align-center" @click="openMap">
						<cover-view class="key text-black">江门市五邑中医院 </cover-view>
						<cover-view class="val margin-right-sm">1.1km > </cover-view>
					</cover-view>
					<cover-view class="list padding-tb flex justify-between align-center">
						<cover-view class="key text-black">江门市五邑中医院 </cover-view>
						<cover-view class="val margin-right-sm">1.1km > </cover-view>
					</cover-view>
				</cover-view>
			</cover-view>	
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 22.59514,
				longitude: 113.07845,
				covers: [{
						id: 2,
						width: 35,
						height: 25,
						latitude: 22.59514,
						longitude: 113.07845,
						iconPath: '/static/drink/map/coffee.png',
					},
					{
						id: 1,
						width: 35,
						height: 25,
						latitude: 22.619596595816233,
						longitude: 113.06789875030518,
						iconPath: '/static/drink/map/coffee.png'
					}
				]
			}
		},
		onLoad() {
			uni.getLocation({
				altitude: true,
				success: (res) => {
					console.log(res)
					console.log(res.latitude)
					console.log(res.longitude)
					this.latitude = res.latitude;
					this.longitude = res.longitude;
				}
			});
		},
		methods: {
			openMap() {
				uni.openLocation({
					latitude: 22.619596595816233,
					longitude: 113.06789875030518
				})
			},
			markertap(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="less">
	.location-container {
		width: 700upx;
		position: fixed;
		bottom: 10upx;

		.location-wrapper {
			box-shadow: 0px 2upx 6upx 0px #D8D8D8;
			border-radius: 12upx;

			.title {
				height: 70upx;
				color: #333333;
				font-size: 30upx;
				font-weight: 500;
				border-bottom: 1upx solid #F6F6F6;
			}

			.list {
				.key {
					font-size: 28upx;
				}

				.val {
					color: #54A9AC;
					font-size: 28upx;
				}
			}
		}
	}
</style>
