import {
	PREFIX_KEY
} from './constant';

import {
	loginByWechat
} from '@/api/user';

/* 
 * formatMoney(s,type) 
 * 功能：金额按千位逗号分隔
 * 参数：s，需要格式化的金额数值. 
 * 参数：type,判断格式化后的金额是否需要小数位. 0 不要小数点，1 保留小数点
 * 参数：symbol,数字前面的符号
 * 返回：返回格式化后的数值字符串. 
 */
export const formatMoney = (s, type, symbol) => {
	if (/[^0-9\.]/.test(s))
		return "0.00";
	if (s == null || s == "null" || s == "")
		return "0.00";
	s = s.toString().replace(/^(\d*)$/, "$1.");
	s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
	s = s.replace(".", ",");
	var re = /(\d)(\d{3},)/;
	while (re.test(s))
		s = s.replace(re, "$1,$2");
	s = s.replace(/,(\d\d)$/, ".$1");
	if (type == 0) {
		var a = s.split(".");
		if (a[1] == "00") {
			s = a[0];
		}
	}
	s = symbol ? symbol + s : s
	return s;
}

/**
 * 微信登录
 */
export function wxLogin() {
	return new Promise((resolve, reject) => {
		uni.showToast({
			title: '登录中...',
			icon: 'none',
			mask: true
		});
		
		uni.login({
			provider: 'weixin',
			success: function({ code }) {
				loginByWechat(code).then(resp => {
					console.log('=== login resp:', resp);
					uni.hideToast();
					if (resp.data.code === 1) {
						setToken(resp.data.data.token);
						setStorage('session_key', resp.data.data.session_key);
					}
				}).catch(error => {
					console.error('=== Error. ', error);
					reject(error);
				});
			}
		});
	});
}

/**
 * 获取token
 */
export function getToken() {
	return getStorage('token');
}

/**
 * 设置token
 * 
 * @param {String} token
 */
export function setToken(token) {
	return setStorage('token', token);
}

/**
 * 清除token
 */
export function removeToken() {
	return removeStorage('token');
}

/**
 * 切换页面
 * 
 * @param {String} url
 */
export function switchTab(url) {
	uni.switchTab({
		url
	});
}

/**
 * 跳转到登录页(授权页)
 */
export function goToLogin(params) {
	uni.reLaunch({
		url: '/pages/login/login' + getQueryString(params)
	});
}

/**
 * 切换到首页
 */
export function goToHome() {
	switchTab('/pages/home/home');
}

/**
 * 获取指定本地缓存数据
 * 
 * @param {String} key
 */
export function getStorage(key) {
	return uni.getStorageSync(PREFIX_KEY + key);
}

/**
 * 设置指定本地缓存数据
 * 
 * @param {String} key
 * @param {Mixed} value
 */
export function setStorage(key, value) {
	return uni.setStorageSync(PREFIX_KEY + key, value);
}

/**
 * 移除指定本地缓存数据
 * 
 * 
 * @param {String} key
 */
export function removeStorage(key) {
	return uni.removeStorageSync(PREFIX_KEY + key);
}

/**
 * Object -> queryString
 * 
 * @param {Object} params
 */
export function getQueryString(params) {
	let query = '';
	if (params) {
		try {
			const p = Object.keys(params).forEach(key => {
				return key + '=' + params[key];
			});
			query = '?' + p.join('&');
		} catch (e) {
			query = '';
		}
	}
	return query;
}