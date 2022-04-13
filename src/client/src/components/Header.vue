<script setup lang="ts">
import { normalizePublicUrl } from '../shared/url'
const props = defineProps({
	logo: {
		type: String,
		default: '/favicon.svg'
	},
	title: {
		type: String,
		default: 'factory'
	}
})

const normalizedLogo = computed(() => {
	return normalizePublicUrl(props.logo)
})
</script>

<template>
	<header
		class="shadow px-2 h-18 flex sticky top-0 items-center justify-between bg-white"
		dark="shadow-gray-600 bg-transparent"
	>
		<section class="flex items-center">
			<img
				:src="normalizedLogo"
				title="logo"
				class="w-10 mx-4"
			/>
			<h1 class="text-3xl">{{ title }}</h1>
		</section>
		<section class="mr-5 space-x-10 flex items-center">
			<slot name="right" />
		</section>
	</header>
</template>
