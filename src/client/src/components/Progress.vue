<script setup lang="ts">
import { isDark } from '../shared/theme'

const percentage = useClamp(0, 0, 100)

const [visible, toggleVisible] = useToggle()

const open = () => toggleVisible(true)

const hidden = () => toggleVisible(false)

const usePercentage = (v?: number) => {
	if (!v) {
		return percentage.value
	}
	return (percentage.value = v)
}

const status = computed(() => {
	if (percentage.value === 0) {
		return 'initial'
	}

	if (percentage.value === 100) {
		return 'success'
	}

	return 'pending'
})

const railColor = computed(() => {
	return isDark.value ? '#343a40' : '#f3f4f6'
})
</script>

<template>
	<slot
		:open="open"
		:hidden="hidden"
		:status="status"
		:percentage="percentage"
		:usePercentage="usePercentage"
	/>
	<n-modal
		preset="card"
		class="mx-50"
		:closable="false"
		v-model:show="visible"
	>
		<n-progress
			type="line"
			processing
			color="#059669"
			:rail-color="railColor"
			:percentage="percentage"
			indicator-placement="inside"
		/>
	</n-modal>
</template>
