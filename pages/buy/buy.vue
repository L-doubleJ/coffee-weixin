<template>
	<view>
		<view class="category flex flex-wrap">
			<view class="item margin-bottom-sm" v-for="(item, index) in category" :key="index">
				<navigator class="flex align-center flex-direction" :url="`./categoryBuy/categoryBuy?id=${index}`">
					<view class="icon margin-bottom-xs">
						<image :src="item.image" mode="aspectFill"></image>
					</view>
					<view class="text-sm">{{item.title}}</view>
				</navigator>
			</view>
		</view>
		<view class="bg-white padding-sm padding-bottom-sm margin-0 products">
			<view class="body">
				<view class="list margin-bottom" v-for="(item, index) in productList" :key="index">
					<navigator class="flex" :url="`./productDetail/productDetail?id=${index}`">
						<image :src="item.cover" mode="aspectFill"></image>
						<view class="padding-top-xs padding-bottom-xs flex flex-direction justify-between">
							<view>
								<view class="flex align-center">
									<view class="text-two-line text-lg margin-bottom-xs text-black" style="max-width: 360upx;">
										{{item.title}}
									</view>
									<view v-if="item.is_hot === 1" class="hot-tag margin-left-xs flex align-center justify-center">热销</view>
								</view>
								<view class="text-two-line margin-bottom-xs text-sm text-gray">
									{{item.detail}}
								</view>
							</view>
							<view class="flex justify-between align-end">
								<view class="flex">
									<view class="text-lg text-price text-red margin-right-xs">{{item.price}}</view>
									<view class="text-sm text-b0b0 text-line-through text-bbb">￥{{item.ot_price}}</view>
								</view>
								<view class="buy_btn text-sm flex align-center justify-center">购买</view>
							</view>
						</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				category: [{
						id:1,
						title: '当季精选',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					},
					{
						id:2,
						title: '咖啡豆',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					},
					{
						id:3,
						title: '袋泡咖啡',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					},
					{
						id:4,
						title: '当季精选',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					},
					{
						id:5,
						title: '咖啡豆',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					},
					{
						id:6,
						title: '袋泡咖啡',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					},
					{
						id:7,
						title: '当季精选',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					},
					{
						id:8,
						title: '咖啡豆',
						image: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200110/c22fd2466884e8ea04ee9a812f383856.png'
					}
				],
				productList: [{
						title: '金杯美式',
						price: 100.00,
						ot_price: 200.00,
						is_hot: 1,
						detail: '意大利浓缩咖啡(Espresso)与牛奶的经典混合大利浓缩咖啡(Espresso)与牛奶的经典混合',
						cover: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200113/f4a89467bf51be9ba2a59bf8fd39d484.png'
					},
					{
						title: '金杯美式',
						price: 100.00,
						ot_price: 200.00,
						is_hot: 0,
						detail: '意大利浓缩咖啡(Espresso)与牛奶的经典混合',
						cover: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200113/f4a89467bf51be9ba2a59bf8fd39d484.png'
					},
					{
						title: '金杯美式',
						price: 100.11,
						ot_price: 200.00,
						is_hot: 0,
						detail: '意大利浓缩咖啡(Espresso)与牛奶的经典混合',
						cover: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200113/f4a89467bf51be9ba2a59bf8fd39d484.png'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.category {
		.item {
			min-width: 25%;
			padding: 10upx;
			text-align: center;

			.icon {
				width: 106upx;
				height: 106upx;
				border-radius: 50%;

				image {
					width: 106upx;
					height: 106upx;
					border-radius: 50%;
				}
			}
		}
	}

	.products {
		// min-height: calc(100vh - 300upx);
		border-top: 12upx solid #F8F8F8;

		.body>.list>navigator>image {
			min-width: 260upx;
			width: 260upx;
			height: 260upx;
			margin-right: 11upx;
			border-radius: 3upx;
		}

		.buy_btn {
			background: #FFA569;
			color: #fff;
			width: 116upx;
			height: 48upx;
			text-align: center;
			border-radius: 5upx;
		}

		.hot-tag {
			width: 58upx;
			height: 28upx;
			border-radius: 4upx;
			background-color: #54A9AC;
			color: white;
			font-size: 18upx;
		}

		.buy_btn {
			background: #FFA569;
			color: #fff;
			width: 116upx;
			height: 48upx;
			text-align: center;
			border-radius: 5upx;
		}
	}
</style>
