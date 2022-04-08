<script setup lang="ts">
const githubLink =
	'https://github.com/dishait/vite-plugin-vue-factory'
</script>

<template>
	<Header>
		<template #right>
			<Github :link="githubLink" />
			<Theme />
		</template>
	</Header>
	<router-view />
</template>
