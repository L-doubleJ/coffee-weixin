<template>
	<!-- 打卡日历页面 -->
	<view>
		<view class="padding">
			<view style="padding: 0 45upx;">
				<view class="line">
					<image src="../../../static/home/sign/head.png" class="left-icon"></image>
					<image src="../../../static/home/sign/head.png" class="right-icon"></image>
				</view>
			</view>
			<view class='all margin-top-xs'>
				<view class="bar flex align-center justify-center margin-top-sm">
					<!-- 上一个月 -->
					<view class="previous flex align-center justify-center" @click="handleCalendar(0)"></view>
					<!-- 显示年月 -->
					<view class="date">{{cur_year || "--"}} 年 {{cur_month || "--"}} 月</view>
					<!-- 下一个月 -->
					<view class="next flex align-center justify-center" @click="handleCalendar(1)"></view>
				</view>
				<!-- 显示星期 -->
				<view class="week margin-top padding-lr" v-if="langType=='ch'">
					<view v-for="(item,index) in weeks_ch" :key="index">{{item}}</view>
				</view>
				<view class="week margin-top padding-lr" v-else>
					<view v-for="(item,index) in weeks_en" :key="index">{{item}}</view>
				</view>
				<view v-if="true" class="myDateTable flex flex-wrap padding-lr">
					<view v-for="(item,j) in days" :key="j">
						<view class="cell-wrapper flex justify-center align-center" v-if="item.date==undefined||item.date == null">
							<view class='cell'>
								<text :decode="true">&nbsp;&nbsp;</text>
							</view>
						</view>
						<view v-else>
							<!-- 已签到日期 -->
							<view class="cell-wrapper flex justify-center align-center" v-if="item.isSign == true">
								<view class='cell bgWhite signed-wrapper' :class="{'bg-today':item.date==today&&cur_month==toMonth&&cur_year==toYear}">
									<image src="../../../static/home/sign/coffee-icon.png" class="signed"></image>
									<text>{{item.date}}</text>
								</view>
							</view>

							<!-- 今日未签到-->
							<view class="cell-wrapper flex justify-center align-center" v-else-if="item.date==today&&cur_month==toMonth&&cur_year==toYear">
								<view class="cell text-white bg-today bg-today">
									<text>{{item.date}}</text>
								</view>
							</view>
							<!-- 当前日期之后 -->
							<view class="cell-wrapper flex justify-center align-center" v-else>
								<view class="text-black cell">
									<text>{{item.date}}</text>
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>
			<view class="padding-lr margin-top-lg">
				<view class="btn flex justify-center align-center" @click="clickSignUp" v-if="!isSign()">立即签到</view>
				<view class="btn flex justify-center align-center" style="background-color: #CCCCCC;" v-else>已签到</view>
			</view>
		</view>
		<view class="award-wrapper padding">
			<view class="text-black text-lg">本月奖励</view>
			<view class="award-table flex margin-top">
				<view class="flex-sub flex flex-direction">
					<view class="key flex align-center justify-center">
						连签天数
					</view>
					<view class="val flex align-center justify-center">
						5天
					</view>
				</view>
				<view class="flex-treble flex flex-direction">
					<view class="key flex align-center justify-center">
						连签奖励
					</view>
					<view class="val flex align-center justify-center">
						xx优惠券*5；xx优惠券*2
					</view>
				</view>
			</view>
		</view>
		<view class="padding">
			<view class="margin-top-sm text-lg text-black">玩法说明</view>
			<view class="margin-top text-grey">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				days: [],
				SignUp: [],
				cur_year: 0, //当前选的年
				cur_month: 0, //当前选的月
				today: parseInt(new Date().getDate()), //本日
				toMonth: parseInt(new Date().getMonth() + 1), //本月
				toYear: parseInt(new Date().getFullYear()), //本年
				weeks_ch: ['日', '一', '二', '三', '四', '五', '六'],
				weeks_en: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
			};
		},
		props: {
			sendYear: {
				type: Number,
				default: new Date().getFullYear()
			},
			sendMonth: {
				type: Number,
				default: new Date().getMonth() + 1
			},
			dataSource: { //已签到的数据源
				type: Array,
				default: () => {
					return ["2020-01-08", "2020-01-04", "2020-01-03", "2020-01-06"]
				}
			},
			langType: { //只是示例一个翻译而已，要想所有都翻译自己可以再加加
				type: String,
				default: "ch"
			},
		},
		created() {
			this.cur_year = this.sendYear;
			this.cur_month = this.sendMonth;
			this.SignUp = this.dataSource;

			this.calculateEmptyGrids(this.cur_year, this.cur_month);
			this.calculateDays(this.cur_year, this.cur_month);
			this.onJudgeSign();
		},
		watch: {
			dataSource: 'onResChange',
		},
		methods: {
			isSign(){
				const res= this.days.find(item=>{
						return item.date == this.today
				})
				return res.isSign;
			},
			// 获取当月共多少天
			getThisMonthDays(year, month) {
				return new Date(year, month, 0).getDate()
			},
			// 获取当月第一天星期几
			getFirstDayOfWeek(year, month) {
				return new Date(Date.UTC(year, month - 1, 1)).getDay();
			},
			// 计算当月1号前空了几个格子，把它填充在days数组的前面
			calculateEmptyGrids(year, month) {
				//计算每个月时要清零
				this.days = [];
				const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
				if (firstDayOfWeek > 0) {
					for (let i = 0; i < firstDayOfWeek; i++) {
						var obj = {
							date: null,
							isSign: false
						}
						this.days.push(obj);
					}
				}
			},

			// 绘制当月天数占的格子，并把它放到days数组中
			calculateDays(year, month) {

				const thisMonthDays = this.getThisMonthDays(year, month);
				// this.columnsLen=Math.ceil(thisMonthDays/7);
				// console.log(this.columnsLen);
				for (let i = 1; i <= thisMonthDays; i++) {
					var obj = {
						date: i,
						isSign: false
					}
					this.days.push(obj);
				}
				//console.log(this.days);

			},

			onResChange(newD, oldD) {
				this.SignUp = newD;
				this.onJudgeSign();
			},
			//匹配判断当月与当月哪些日子签到打卡
			onJudgeSign() {
				var signs = this.SignUp;
				var daysArr = this.days;
				for (var i = 0; i < signs.length; i++) {
					var current = new Date(signs[i]); //.replace(/-/g, "/")
					var year = current.getFullYear();
					var month = current.getMonth() + 1;
					var day = current.getDate();
					day = parseInt(day);
					for (var j = 0; j < daysArr.length; j++) {
						//年月日相同则打卡成功   						
						if (year == this.cur_year && month == this.cur_month && daysArr[j].date == day) { //&& signs[i].isSign == "今日已打卡"
							// console.log(daysArr[j].date, day);
							daysArr[j].isSign = true;
						}
					}
				}
				this.days = daysArr;
			},

			// 切换控制年月，上一个月，下一个月
			handleCalendar(type) {
				const cur_year = parseInt(this.cur_year);
				const cur_month = parseInt(this.cur_month);
				var newMonth;
				var newYear = cur_year;
				if (type === 0) { //上个月
					newMonth = cur_month - 1;
					if (newMonth < 1) {
						newYear = cur_year - 1;
						newMonth = 12;
					}
				} else {
					newMonth = cur_month + 1;
					if (newMonth > 12) {
						newYear = cur_year + 1;
						newMonth = 1;
					}
				}
				this.calculateEmptyGrids(newYear, newMonth);
				this.calculateDays(newYear, newMonth);

				this.cur_year = newYear;
				this.cur_month = newMonth;

				this.SignUp = []; //先清空
				this.$emit('dateChange', this.cur_year + "-" + this.cur_month); //传给调用模板页面去拿新数据				
			},

			clickSignUp() { //0补签，1当日签到		
				//this.$http.postHttp("Comment/UpdateRecord", "", (res) => {//可以通过后台接口添加当前用户当日打卡记录，
				//console.log(res);
				//if (res!= undefined) {

				var str = "签到";
				uni.showToast({
					title: str + "成功",
					icon: 'success',
					duration: 1500
				});
				this.SignUp.push(this.cur_year + "-" + this.cur_month + "-" + this.today); //自动加假数据，写了接口就不用了

				// this.$emit('clickChange', this.cur_year + "-" + this.cur_month + "-" + date); //传给调用模板页面
				//refresh
				this.onJudgeSign();
				//}
				// })
			}
		}
	}
</script>

<style lang="less">
	.bg-today{
		background-color: #FFAF69;
		border-radius: 50%;
		color: white;
	}
	.award-wrapper{
		border-top: solid 10upx #F6F6F6;
		border-bottom: solid 10upx #F6F6F6;
		.award-table{
			border-radius:8upx;
			border:1upx solid rgba(205,205,205,1);
			height: 155upx;
			.key{
				margin-top: 1upx;
				flex: 2;
				background-color: #F8F8F8;
				color: #666666;
				box-sizing: border-box;
				border-right: 1upx solid rgba(205,205,205,1);
				border-bottom: 1upx solid rgba(205,205,205,1);
			}
			.val{
				flex: 3;
				color: #333333;
				border-right: 1upx solid rgba(205,205,205,1);
			}
		}
	}
	.btn {
		height: 82upx;
		background-color: #67BCB9;
		color: white;
		box-shadow: 0px 2upx 8upx 1upx rgba(177, 177, 177, 0.5);
		border-radius: 4upx;
	}

	.signed-wrapper {
		position: relative;

		.signed {
			bottom: 5upx;
			left: 5upx;
			width: 29upx;
			height: 23upx;
			position: absolute;
		}
	}

	.line {
		height: 12upx;
		background-color: #F6F6F6;
		border-radius: 2upx;
		position: relative;

		image {
			height: 44upx;
			width: 44upx;
			position: absolute;
		}

		.left-icon {
			left: 60upx;
			top: 0;
		}

		.right-icon {
			right: 60upx;
			top: 0;
		}
	}

	.previous {
		margin-right: 50upx;
		width: 50upx;
		height: 50upx;

		&::after {
			font-family: cuIcon;
			display: block;
			content: "\e6a3";
			font-size: 32upx;
			color: #BBBBBB;
			transform: rotate(180deg);
			text-align: center;
		}
	}

	.next {
		margin-left: 50upx;
		width: 50upx;
		height: 50upx;

		&::after {
			font-family: cuIcon;
			display: block;
			content: "\e6a3";
			font-size: 32upx;
			color: #BBBBBB;
			text-align: center;
		}
	}

	.myDateTable {
		.cell-wrapper {
			width: 90upx;
			height: 90upx;

			.cell {
				font-size: 32upx;
				width: 50upx;
				height: 50upx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

	}

	.date {
		font-size: 36upx;
		font-weight: 500;
		color: #333333;
	}

	.all {
		padding-top: 1upx;
		padding-bottom: 40upx;
		box-shadow: 0px 6upx 8upx 4upx rgba(203, 203, 203, 0.5);
		border-radius: 36upx;
	}

	.all .week {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		border-radius: 10px;
		background-color: #fff;
	}

	.all .week view {
		color: #999999;
		font-size: 31upx;
		text-align: center;
		flex-shrink: 0;
		width: 90upx;
		height: 50upx;
	}
</style>
