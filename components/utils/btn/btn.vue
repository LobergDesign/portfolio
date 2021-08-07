<template>
	<nuxt-link :to="slug" class="btn">
		<span v-if="text">{{ text }}</span>
		<span v-else>Read more</span>
		<IconArrow />
	</nuxt-link>
</template>
<style lang="scss" src="./btn.scss"></style>
<script lang="ts" src="./btn.ts"></script>
