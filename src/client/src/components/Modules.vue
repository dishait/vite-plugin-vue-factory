<script setup lang="ts">
import type {
	Modules,
	ExtractArrayItem
} from '../../../config/client'
import { notice } from '../shared/notice'
import { normalizePublicUrl } from '../shared/url'
import type { IProgresser } from '../types/progresser'

defineProps<{
	modules: Modules
}>()

const handleInstall = async (
	module: ExtractArrayItem<Modules>,
	progresser: IProgresser
) => {
	let {
		open,
		close,
		status,
		useStatus,
		usePercentage,
		percentage
	} = progresser

	const { cover, title } = module

	if (status === 'pending') {
		return open()
	}

	// 成功
	if (status === 'success') {
		return notice({
			src: cover,
			title: `${title} 已安装成功`
		})
	}

	if (status === 'fail') {
		usePercentage(0)
		await nextTick()
	}

	// 加载中
	useStatus('pending')

	open()

	const { pause, resume, isActive } = useIntervalFn(() => {
		// 到 90 时，如果还没成功就锁住
		if (percentage === 90 && useStatus() === 'pending') {
			return pause()
		}

		if (percentage === 100 && useStatus() === 'success') {
			notice({
				src: cover,
				title: `${title} 已安装成功`
			})
			pause()
			close()
			return
		}

		usePercentage(++percentage)
	}, 100)

	const { onFetchError, onFetchResponse, data, error } =
		useFetch(`/__factory?title=${title}`)

	// // 失败
	onFetchError(() => {
		notice({
			src: cover,
			title: `${title} 安装失败`,
			description: error.value
		})
		close()
		useStatus('fail')
	})

	// // 成功返回，等待变动时恢复
	onFetchResponse(() => {
		console.log(data.value)
		console.log('onFetchResponse')
		watchOnce(isActive, () => {
			useStatus('success')
			resume()
		})
	})
}
</script>

<template>
	<div
		xl="grid-cols-4 gap-20"
		lg="grid-cols-3 gap-10"
		md="grid-cols-2 gap-7 p-20"
		class="p-10 grid gap-5 grid-cols-1"
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
