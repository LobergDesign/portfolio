<template>
	<main>
		<!-- hero -->
		<Hero v-if="data.items[0].hero" :data="data.items[0].hero" />
		<!-- content area -->
		<ContentArea v-if="data.items[0].contentArea" :data="data.items[0].contentArea" />

		<!-- private work -->
		<PrivateWork
			v-if="data.items[0].privateWork && data.items[0].privateWorkUC"
			:privateWorkUC="data.items[0].privateWorkUC"
			:privateWork="data.items[0].privateWork"
		/>
	</main>
</template>

<script lang="ts" src="./index.ts"></script>
