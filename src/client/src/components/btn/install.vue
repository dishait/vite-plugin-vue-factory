<script setup lang="ts">
import type { Status } from '../../types/progresser'

const props = defineProps<{
	percentage: number
	status: Status
}>()

const message = computed(() => {
	const { percentage, status } = props
	if (status === 'initial') {
		return '安装'
	}

	if (status === 'pending' || percentage < 100) {
		return `${percentage}%`
	}

	if (status === 'success') {
		return '已安装'
	}

	if (status === 'fail') {
		return '重试'
	}
})

const bg = computed(() => {
	const { status } = props
	return status === 'fail' ? 'bg-red-600' : 'bg-emerald-600'
})

const hover = computed(() => {
	const { status } = props
	return status === 'fail' ? 'bg-red-700' : 'bg-emerald-700'
})
</script>

<template>
	<div
		:class="bg"
		:hover="hover"
		class="text-light-100 flex-1 cursor-pointer transition transition-colors py-1 text-center rounded"
	>
		{{ message }}
	</div>
</template>
