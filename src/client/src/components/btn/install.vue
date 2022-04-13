<script setup lang="ts">
const props = defineProps<{
	percentage: number
	status: 'initial' | 'success' | 'pending'
}>()

const message = computed(() => {
	const { percentage, status } = props
	if (status === 'initial') {
		return '安装'
	}
	if (status === 'success') {
		return '已安装'
	}
	return `${percentage}%`
})
</script>

<template>
	<div
		class="text-light-100 flex-1 cursor-pointer transition transition-colors bg-emerald-600 py-1 text-center rounded hover:bg-emerald-700"
	>
		{{ message }}
	</div>
</template>
