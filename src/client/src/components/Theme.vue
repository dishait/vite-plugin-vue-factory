<script lang="ts" setup>
import { isDark, toggleDark } from '../shared/theme'

const icon = computed(() => {
	return isDark.value
		? 'i-ic:outline-dark-mode'
		: 'i-ic:outline-wb-sunny'
})
</script>

<template>
	<div
		:class="icon"
		@click="toggleDark()"
		class="cursor-pointer text-3xl"
	></div>
</template>
