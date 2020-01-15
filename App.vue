<script>
import Vue from 'vue';
import { wxLogin, getToken } from '@/utils';
export default {
	onLaunch: function() {
		const token = getToken();
		console.log('=== onLaunch > token:', token);
		if (!token) {
			wxLogin();
		}
		
		uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				};
				// #endif

				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				// #endif

				// #ifdef MP-ALIPAY
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
				// #endif
			}
		});
	},

	onShow: function() {

	},

	onHide: function() {

	}
}
</script>

<style lang="less">
/*每个页面公共css */
page {
	background-color: #FFFFFF;
}

.width100 {
	width: 100%;
}

//color UI
@import "colorui/main.css";
@import "colorui/icon.css";
</style>
