export type Modules = {
	/**
	 * 链接
	 */
	link: string
	/**
	 * 封面
	 */
	cover?: string
	/**
	 * 标题
	 */
	title: string
	/**
	 * 描述
	 */
	description?: string

	install?: (useTask: (...rest: string[]) => void) => void
}[]

export type ExtractArrayItem<A extends unknown[]> =
	A extends Array<infer R> ? R : never
