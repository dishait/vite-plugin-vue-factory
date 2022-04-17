const debounce = (invoke, delay = 800) => {
	let timeout
	return (...rest) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			invoke(...rest)
		}, delay)
	}
}

const createSingleChildProcessScope = invoke => {
	let controller = null
	return (...rest) => {
		if (controller) {
			controller.abort()
		}
		controller = new AbortController()
		invoke(controller.signal, ...rest)
	}
}

module.exports = {
	debounce,
	createSingleChildProcessScope
}
