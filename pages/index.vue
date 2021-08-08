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
		<Hero v-if="data.hero" :data="data.hero" />
		<!-- content area -->
		<ContentArea v-if="data.contentArea" :data="data.contentArea" />
		<!-- private work -->
		<PrivateWork
			v-if="data.privateWork && data.privateWorkUC"
			:privateWorkUC="data.privateWorkUC"
			:privateWork="data.privateWork"
		/>
		<!-- second content area -->
		<ContentArea v-if="data.secondContentArea" :data="data.secondContentArea" />
	</main>
</template>

<script lang="ts" src="./index.ts"></script>
