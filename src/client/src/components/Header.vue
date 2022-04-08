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
	<header class="shadow px-2 py-3">
		<section class="flex items-center">
			<img
				:src="logo"
				title="logo"
				class="w-9 h-10 ml-2 mr-4"
			/>
			<h1 class="text-3xl">{{ title }}</h1>
		</section>
	</header>
</template>
