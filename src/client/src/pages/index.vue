<script setup lang="ts">
import { useFetch } from '@vueuse/core'
const installRouter = async () => {
	const { data } = await useFetch('/__factory_api')
	console.log(data.value)
}
</script>

<template>
	<div @click="installRouter()" class="cursor-pointer">
		Install Router
	</div>
</template>
