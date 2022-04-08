<script setup lang="ts">
defineProps({
	cover: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: '',
		require: true
	},
	description: {
		type: String,
		defalt: ''
	}
})
</script>

<template>
	<section
		class="flex shadow-lg rounded-lg p-5 items-center justify-center flex-col w-60 dark:shadow-gray-600 space-y-3"
	>
		<img :src="cover" :alt="title" class="w-25 h-25" />
		<div class="text-2xl text-dark-500 dark:text-gray-200">
			{{ title }}
		</div>
		<div class="text-gray-400">{{ description }}</div>

		<div
			class="text-white cursor-pointer transition transition-colors bg-emerald-600 py-1 w-80% text-center rounded hover:bg-emerald-700"
		>
			安装
		</div>
	</section>
</template>
