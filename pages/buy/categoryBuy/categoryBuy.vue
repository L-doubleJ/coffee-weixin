<template>
	<view>
		<scroll-view scroll-x class="bg-4343 nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect"
			 :data-id="index">
				<view>{{item.name}}</view>
				<view v-if="index===TabCur" class="acitve"></view>
			</view>
		</scroll-view>

		<view class="bg-white padding-sm padding-bottom-sm margin-0 products">
			<view class="body">
				<view class="list margin-bottom" v-for="(item, index) in productList" :key="index">
					<navigator class="flex">
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
				TabCur: 0,
				scrollLeft: 0,
				tabList: [{
						name: '全部',
						type: 0
					},
					{
						name: '挂耳',
						type: 2
					},
					{
						name: '速溶',
						type: 3
					},
					{
						name: '咖啡豆',
						type: 4
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
						price: 100.00,
						ot_price: 200.00,
						is_hot: 0,
						detail: '意大利浓缩咖啡(Espresso)与牛奶的经典混合',
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
						price: 100.00,
						ot_price: 200.00,
						is_hot: 0,
						detail: '意大利浓缩咖啡(Espresso)与牛奶的经典混合',
						cover: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200113/f4a89467bf51be9ba2a59bf8fd39d484.png'
					},
					{
						title: '金杯美式',
						price: 100.00,
						ot_price: 200.00,
						is_hot: 0,
						detail: '意大利浓缩咖啡(Espresso)与牛奶的经典混合',
						cover: 'https://hcpark-1251739808.cos.ap-guangzhou.myqcloud.com/upload/20200113/f4a89467bf51be9ba2a59bf8fd39d484.png'
					}
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.nav .cu-item {
		position: relative;

		&.cur {
			border-bottom: 0upx solid #67BCB9;
		}

		.acitve {
			height: 4upx;
			width: 40%;
			left: 50%;
			margin-left: -20%;
			display: block;
			background: #67BCB9;
			position: absolute;
			bottom: 16upx;
			border-radius: 4upx;
		}

	}

	.products {
		height: calc(100vh - 100upx);
		overflow: auto;

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
