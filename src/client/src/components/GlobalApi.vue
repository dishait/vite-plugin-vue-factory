<script setup lang="ts">
import { useNotification } from 'naive-ui'
import { n } from '../shared/global-api'

n.notification = useNotification()
</script>

<template>
	<slot />
</template>
