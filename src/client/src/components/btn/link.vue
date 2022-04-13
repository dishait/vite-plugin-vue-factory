<script lang="ts" setup>
import { to } from '../../shared/base'
defineProps<{
	link: string
}>()
</script>

<template>
	<div
		class="cursor-pointer text-gray-600 transition transition-colors bg-gray-100 py-1 text-center rounded flex-1 hover:bg-gray-300"
		@click="to(link)"
	>
		地址
	</div>
</template>
