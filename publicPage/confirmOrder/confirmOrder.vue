<template>
	<view>
		<view class="padding header flex align-center">
			<view class="width100 flex flex-direction">
				<view class="flex">
					<image src="../../static/public/address-gray.png" mode=""></image>
					<view class="text-black">江门市 蓬江区 环市街道 建设三路智慧城8楼 822华城科技</view>
				</view>
				<view class="flex margin-sm">
					<image class="perImg" src="../../static/public/person-gray.png" mode=""></image>
					<view class="text-gray text-sm margin-left-xs">邱佳佳 13123123123123</view>
				</view>
			</view>
			<view class="text-sm margin-left" style="color: #67BCB9; flex-shrink: 0;">选择</view>
		</view>
		<view class="content padding text-black">
			<view class="text-sm">商品</view>
			<view class="list-wrapper flex margin-top-sm">
				<image src="../../static/drink.png" mode=""></image>
				<view class="margin-left-xs">当季1产区挂耳式咖啡挂耳包手冲滤挂烘焙现磨原味纯黑咖啡粉</view>
				<view class="margin-left align-end flex flex-direction" style="flex-shrink: 0;">
					<view class="text-red">¥ 68.00</view>
					<view class="text-sm text-gray">x2</view>
				</view>
			</view>
			<view class="list-wrapper flex margin-top-sm">
				<image src="../../static/drink.png" mode=""></image>
				<view class="margin-left-xs">当季1产区挂耳式咖啡挂耳包手冲滤挂烘焙现磨原味纯黑咖啡粉</view>
				<view class="margin-left align-end flex flex-direction" style="flex-shrink: 0;">
					<view class="text-red">¥ 68.00</view>
					<view class="text-sm text-gray">x2</view>
				</view>
			</view>
		</view>
		<view class="setting-container padding-lr text-black">
			<view class="setting-list flex justify-between align-center ">
				<view>优惠券</view>
				<view class="right-point text-sm flex align-center">
					<view>6元优惠券</view>
				</view>
			</view>
			<view class="setting-list flex justify-between align-center ">
				<view>积分</view>
				<view class="text-sm flex align-center">
					<view>可用500积分抵5元</view>
					<view class="margin-left-sm">
						<switch checked color="#67BCB9"/>
					</view>
				</view>
			</view>
			<view class="setting-list flex justify-between align-center ">
				<view>配送方式</view>
				<view class="text-sm flex align-center">
					<view>商家免邮</view>
				</view>
			</view>
			<view class="setting-list flex justify-between align-center ">
				<view>买家留言</view>
				<view class="text-sm flex align-center">
					<input style="width: 340upx;" placeholder="建议留言前事先与商家沟通确认"/>
				</view>
			</view>
		</view>
		<view class="total-wrapper padding-lr">
			<view class="flex justify-between text-black text-sm margin-top">
				<view>商品总价</view>
				<view class="text-red">¥ 68.00</view>
			</view>
			<view class="flex justify-between text-black text-sm margin-top">
				<view>优惠券</view>
				<view class="text-red">- ¥ 68.00</view>
			</view>
			<view class="flex justify-between text-black text-sm margin-top">
				<view>积分抵扣</view>
				<view class="text-red">- ¥ 68.00</view>
			</view>
			<view class="flex justify-between text-black text-sm margin-top">
				<view>运费</view>
				<view class="text-red">¥ 4.00</view>
			</view>
			<view class="padding-sm margin-top-sm text-center total">
				<view class="flex align-center justify-end">
					<view>合计：</view>
					<view class="text-red">68.00</view>
				</view>
			</view>
		</view>
		<view class="footer flex align-center justify-end text-black">
			<view class="text-sm">(共2件)</view>
			<view class="margin-left-xs text-sm">合计：</view>
			<view class="text-red text-lg" style="margin-top: 5upx;">¥ 78</view>
			<view class="balance-btn flex justify-center align-center margin-left-sm">提交订单</view>
		</view>
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
	.header{
		image{
			width: 50upx;
			height: 40upx;
		}
		.perImg{
			margin-left: 5upx;
			width: 30upx;
			height: 30upx;
		}
	}
	.content{
		border-top: 16upx solid #F6F6F6;
		border-bottom: 16upx solid #F6F6F6;
		.list-wrapper{
			image{
				flex-shrink: 0;
				width: 148upx;
				height: 148upx;
			}
		}
	}
	.setting-container{
		border-bottom: 16upx solid #F6F6F6;
		.setting-list{
			height: 99upx;
		}
		.setting-list+.setting-list{
			border-top: 1upx solid #F6F6F6;
		}
		.right-point::after{
			margin-left: 20upx;
			margin-top: 5upx;
			font-family: cuIcon;
			display: block;
			content: "\e6a3";
			font-size: 28upx;
			color: #BBBBBB;
		}
	}
	.total-wrapper{
		margin-bottom: 100upx;
	}
	.total{
		border-top: 1upx solid #F6F6F6;
	}
	
	.footer {
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10upx 20upx;
		border-top: 1upx solid #F4F4F4;
	
		.balance-btn {
			color: white;
			width: 218upx;
			height: 78upx;
			font-size: 30upx;
			background-color: #67BCB9;
			box-shadow: 0px 2upx 8upx 1upx rgba(228, 228, 228, 0.5);
			border-radius: 39upx;
		}
	}

</style>
<style>
	switch .wx-switch-input.wx-switch-input-checked{
		background-color: #67BCB9 !important;
		border-color:  #67BCB9 !important;
	}
</style>

