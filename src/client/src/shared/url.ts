// 规范化静态资源路径
export const normalizePublicUrl = (url?: string) => {
	return import.meta.env.PROD ? '/__factory' + url : url
}
