import request from '@/utils/http.js';

/**
 * 发送到服务器进行登录流程
 * 获取session_key
 * 
 * @param {String} code 
 */
export function loginByWechat(code) {
	return request({
		url: 'mobile/login',
		data: {
			code
		},
		method: 'POST'
	});
}

/**
 * 绑定用户信息
 * 
 * @param {Object} data
 */
export function bindUser(data) {
	return request({
		url: 'mobile/user/bind',
		data,
		method: 'POST'
	});
}

/**
 * 获取用户数据
 * 
 * @param {Object} data
 */
export function getUserInfo(data) {
	return request({
		url: 'mobile/user/info',
		data
	});
}