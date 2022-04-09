<script setup lang="ts">
import { to } from '../shared/base'

defineProps<{
	modules: {
		link: string
		cover?: string
		title: string
		description?: string
	}[]
}>()
</script>

<template>
	<div
		class="p-10 grid gap-5 grid-cols-1"
		xl="grid-cols-4 gap-20"
		lg="grid-cols-3 gap-10"
		md="grid-cols-2 gap-7 p-20"
	>
		<section
			class="flex shadow rounded-lg p-6 items-center justify-center flex-col dark:shadow-gray-600 space-y-4"
			v-for="module of modules"
			:key="module.title"
		>
			<img
				:src="module.cover"
				:alt="module.title"
				class="w-25 h-25"
			/>
			<div
				class="text-2xl text-dark-500 dark:text-gray-200"
			>
				{{ module.title }}
			</div>
			<div class="text-gray-400">
				{{ module.description }}
			</div>

			<div class="flex w-full space-x-4">
				<div
					class="text-light-100 flex-1 cursor-pointer transition transition-colors bg-emerald-600 py-1 text-center rounded hover:bg-emerald-700"
				>
					安装
				</div>
				<div
					class="cursor-pointer text-gray-600 transition transition-colors bg-gray-100 py-1 text-center rounded flex-1 hover:bg-gray-300"
					@click="to(module.link)"
				>
					地址
				</div>
			</div>
		</section>
	</div>
</template>
