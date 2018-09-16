// config
import Config from "@/config"

function formatNumber(n) {
	const str = n.toString()
	return str[1] ? str : `0${str}`
}

export function formatTime(date) {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	const t1 = [year, month, day].map(formatNumber).join('/')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${t1} ${t2}`
}


export function get(url) {
	return new Promise((resolve, reject) => {
		wx.request({
			url: Config.host + url,
			success: function (res) {
				if (res.data.code == 0) {
					resolve(res.data.data)
				} else {
					reject(res.data)
				}
			}
		})
	})
}


export default {
  formatNumber,
  formatTime,
  get
}
