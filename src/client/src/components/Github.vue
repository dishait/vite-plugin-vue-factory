<script setup lang="ts">
defineProps<{
	link: string
}>()
</script>

<template>
	<a
		:href="link"
		target="_blank"
		class="i-mdi:github-face text-3xl cursor-pointer"
	/>
</template>
