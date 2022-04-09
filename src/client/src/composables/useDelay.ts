export const useDelay = (delay = 500) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(null)
		}, delay)
	})
}
