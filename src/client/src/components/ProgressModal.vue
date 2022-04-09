<script setup lang="ts">
const props = defineProps<{
	visible: boolean
	modelValue: number
}>()

const emit = defineEmits(['update:modelValue'])

const percentage = useVModel(props, 'modelValue', emit)
</script>

<template>
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
			rail-color="#f3f4f6"
			:percentage="percentage"
			indicator-placement="inside"
		/>
	</n-modal>
</template>
