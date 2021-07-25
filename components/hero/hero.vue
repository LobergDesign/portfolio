<template>
	<section class="hero">
		<h1 class="hero__text">
			<span class="hero__text-wrap flex-vertical-center">
				<span class="greeting">{{ data.greetingText }}</span>
			</span>
			<span class="hero__text-wrap flex-vertical-center flex-end">
				<span>{{ data.title[0] }}</span>
			</span>
			<span class="hero__text-wrap flex-vertical-center">
				<span>{{ data.title[1] }}</span>
			</span>
			<span class="hero__text-wrap flex-vertical-center flex-end">
				<span>{{ data.title[2] }}</span>
			</span>
		</h1>
		<div class="hero__circle-effect" v-if="data.rotateEffectText">
			<CircleEffect :text="data.rotateEffectText" />
		</div>
		<!-- <div class="lines">
			<span class="lines__item"></span><span class="lines__item"></span><span class="lines__item"></span
			><span class="lines__item"></span><span class="lines__item"></span>
		</div> -->
	</section>
</template>
<style lang="scss" src="./hero.scss"></style>
<script lang="ts" src="./hero.ts"></script>
