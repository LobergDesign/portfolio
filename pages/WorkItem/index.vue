<template>
	<main>
			<!-- curtains -->
		<div class="curtains">
			<div class="curtains__item"></div>
			<div class="curtains__item"></div>
			<div class="curtains__item"></div>
			<div class="curtains__item"></div>
			<div class="curtains__item"></div>
		</div>
		<!-- hero -->
		<Hero v-if="data.items[0].hero" :data="data.items[0].hero" :number="data.items[0].workNumber" />

		<!-- content area -->
		<ContentArea v-if="data.items[0].contentArea" :data="data.items[0].contentArea" />

		<!-- CTA  -->
		<UtilsLargeCta v-if="data.items[0].siteUrl" :url="data.items[0].siteUrl" />
	</main>
</template>

<script lang="ts" src="./index.ts"></script>
