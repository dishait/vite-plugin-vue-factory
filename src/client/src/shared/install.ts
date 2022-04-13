const startInstallSet = new Set<string>()

export const useStartInstalled = (key: string) => {
	if (startInstallSet.has(key)) {
		return true
	}

	startInstallSet.add(key)
	return false
}
