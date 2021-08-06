<template>
	<section class="hero">
		<h1 class="hero__text" :class="{ 'has-number': number }">
			<span class="hero__text-wrap flex-vertical-center">
				<span class="greeting"  v-if="data.greetingText">{{ data.greetingText }}</span>
			</span>
			<span class="hero__text-wrap flex-vertical-center flex-end" v-if="data.title && data.title[0]">
				<span>{{ data.title[0] }}</span>
			</span>
			<span class="hero__text-wrap flex-vertical-center" v-if="data.title && data.title[1]">
				<span>{{ data.title[1] }}</span>
				<!-- <div class="hero__info-section" v-if="data.launchYear || data.heroInfoText">
					<p v-if="data.launchYear">
						{{ data.launchYear }}
					</p>
					<div v-if="data.heroInfoText" v-html="toHtmlString(data.heroInfoText.json)"></div>
				</div> -->
			</span>
			<span class="hero__text-wrap flex-vertical-center flex-end" v-if="data.title && data.title[2]">
				<span>{{ data.title[2] }}</span>
			</span>
		</h1>
		<span class="hero__number" v-if="number"> 0{{ number }} </span>

		<div class="hero__circle-effect" data-scroll-animation v-if="data.rotateEffectText" :class="{ 'has-number': number }">
			<CircleEffect :text="data.rotateEffectText" />
		</div>
	</section>
</template>
<style lang="scss" src="./hero.scss"></style>
<script lang="ts" src="./hero.ts"></script>
