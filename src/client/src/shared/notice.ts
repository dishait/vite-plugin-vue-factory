import { n } from './global-api'
import { NAvatar } from 'naive-ui'
import { isDark } from './theme'

interface IOptions {
	src: string
	title: string
}

export const notice = (options: IOptions) => {
	const { title, src } = options
	const bg = isDark.value ? '#48484e' : 'white'

	n.notification.create({
		duration: 2000,
		title: title,
		avatar: () =>
			h(NAvatar, {
				src,
				size: 'small',
				style: {
					'background-color': bg
				}
			})
	})
}
