import { REQUEST_API_HOST } from '@/utils/constant';
import { getToken, removeToken, goToLogin } from '@/utils';

const _request = (url, resolve, reject, data = {}, method = 'GET') => {
	uni.request({
		header:{
			'Content-Type': 'application/json', // 默认json
			'Authorization': getToken()
		},
		url: REQUEST_API_HOST + url,
		method,
		data,
		success:(res) => {
			console.log('=== request. url:', url, ', res:', res);
			// token 失效
			if (res.data.code === 10002) {
				removeToken();
				uni.redirectTo({
					url: '/pages/home/home?relogin=true'
				})
			}
			// 重新授权
			if (res.data.code === 10005) {
				goToLogin();
			}
			resolve(res);
		},
		fail:(err) => {
			reject(err);
		}
	})
}

export default ({
	url,
	data,
	method
}) => {
	return new Promise((resolve, reject) => {
		_request(url, resolve, reject, data, method);
	});
}
