<script setup lang="ts">
defineProps({
	logo: {
		type: String,
		default: '/favicon.svg'
	},
	title: {
		type: String,
		default: 'Factory'
	}
})
</script>

<template>
	<header
		class="shadow px-2 h-15 flex items-center justify-between dark:shadow-dark-50"
	>
		<section class="flex items-center">
			<img :src="logo" title="logo" class="w-9 ml-2 mr-4" />
			<h1 class="text-3xl">{{ title }}</h1>
		</section>
		<section class="mr-5">
			<slot name="right" />
		</section>
	</header>
</template>
