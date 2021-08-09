<template>
	<div class="app">
		<transition appear :css="false" v-on:before-appear="customBeforeAppear">
			<div class="app-init-effect">
				<div class="app-init-effect__counter">
					<span class="app-init-effect__counter-number" id="counter">0</span>
					<span class="app-init-effect__counter-percent" id="percent">%</span>
				</div>
				<div class="lines" data-lines>
					<span class="lines__item lines-effect"></span><span class="lines__item lines-effect"></span
					><span class="lines__item lines-effect"></span><span class="lines__item lines-effect"></span
					><span class="lines__item lines-effect"></span>
				</div>
			</div>
		</transition>
		<Header v-if="!$fetchState.pending" :data="header" />

		<Nuxt />
		<Footer v-if="!$fetchState.pending" :data="footer" />
	</div>
</template>
<script src="./default.ts"></script>
