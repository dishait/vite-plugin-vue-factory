<script lang="ts" setup>
defineProps<{
	link: string
}>()
</script>

<template>
	<a
		:href="link"
		target="_blank"
		class="cursor-pointer text-gray-600 transition transition-colors bg-gray-100 py-1 text-center rounded flex-1 hover:bg-gray-300"
	>
		地址
	</a>
</template>
