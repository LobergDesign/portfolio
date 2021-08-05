<template>
	<main>
		<!-- hero -->
		<Hero v-if="data.items[0].hero" :data="data.items[0].hero" />
		<!-- content area -->
		<ContentArea v-if="data.items[0].contentArea" :data="data.items[0].contentArea" />
	</main>
</template>

<script lang="ts" src="./index.ts"></script>
