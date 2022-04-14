<script setup lang="ts">
import { isDark } from '../shared/theme'
import { Status } from '../types/progresser'

const percentage = useClamp(0, 0, 100)

const [visible, toggleVisible] = useToggle()

const open = () => toggleVisible(true)
const close = () => toggleVisible(false)

const usePercentage = (v: number = percentage.value) => {
	return (percentage.value = v)
}

const status = ref<Status>('initial')
const useStatus = (v: Status = status.value) => {
	return (status.value = v)
}

const railColor = computed(() => {
	return isDark.value ? '#343a40' : '#f3f4f6'
})
</script>

<template>
	<slot
		:open="open"
		:close="close"
		:status="status"
		:useStatus="useStatus"
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
