<script setup lang="ts">
import { to } from '../shared/base'

defineProps<{
	link: string
}>()
</script>

<template>
	<div
		class="i-mdi:github-face text-2xl cursor-pointer"
		@click="to(link)"
	/>
</template>
