<script setup lang="ts">
defineProps({
	logo: {
		type: String,
		default: '/favicon.svg'
	},
	title: {
		type: String,
		default: 'factory'
	}
})
</script>

<template>
	<header
		class="shadow px-2 h-15 flex items-center justify-between dark:shadow-gray-600"
	>
		<section class="flex items-center">
			<img
				:src="logo"
				title="logo"
				class="w-9 ml-2 mr-4 mb-2"
			/>
			<h1 class="text-3xl">{{ title }}</h1>
		</section>
		<section class="mr-5">
			<slot name="right" />
		</section>
	</header>
</template>
