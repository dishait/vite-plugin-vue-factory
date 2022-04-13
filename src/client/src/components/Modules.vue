<script setup lang="ts">
import type {
	Modules,
	ExtractArrayItem
} from '../../../shared/types'
import { notice } from '../shared/notice'
import { useStartInstalled } from '../shared/install'
import { normalizePublicUrl } from '../shared/url'

defineProps<{
	modules: Modules
}>()

interface IProgresser {
	open: Function
	hidden: Function
	percentage: number
	status: 'initial' | 'success' | 'pending'
	usePercentage: (v?: number) => number
}

const handleInstall = (
	module: ExtractArrayItem<Modules>,
	progresser: IProgresser
) => {
	let { open, status, hidden, percentage, usePercentage } =
		progresser

	if (status === 'success') {
		return notice({
			title: `${module!.title} 已安装`,
			src: module.cover || ''
		})
	}

	open()

	if (useStartInstalled(module.title)) {
		return
	}
}
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
				:src="normalizePublicUrl(module.cover)"
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
				<Progress v-slot="progresser">
					<btn-install
						:status="progresser.status"
						:percentage="progresser.percentage"
						@click="handleInstall(module, progresser)"
					/>
				</Progress>
				<btn-link :link="module.link" />
			</div>
		</section>
	</div>
</template>
