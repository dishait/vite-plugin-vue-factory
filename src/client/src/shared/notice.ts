import { n } from './global-api'
import { NAvatar } from 'naive-ui'
import { isDark } from './theme'
import { normalizePublicUrl } from './url'

interface IOptions {
	src: string
	title: string
	description?: string
}

export const notice = (options: IOptions) => {
	const { title, src, description } = options
	const bg = isDark.value ? '#48484e' : 'white'

	n.notification.create({
		title,
		description,
		duration: 2000,
		avatar: () =>
			h(NAvatar, {
				src: normalizePublicUrl(src),
				size: 'small',
				style: {
					'background-color': bg
				}
			})
	})
}
