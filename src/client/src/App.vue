<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { isDark } from './shared/theme'

const theme = computed(() => {
	return isDark.value ? darkTheme : null
})

const githubLink =
	'https://github.com/dishait/vite-plugin-vue-factory'
</script>

<template>
	<n-config-provider :theme="theme">
		<n-notification-provider>
			<GlobalApi />
		</n-notification-provider>

		<Header>
			<template #right>
				<Github :link="githubLink" />
				<Theme />
			</template>
		</Header>
		<router-view />
	</n-config-provider>
</template>
