<template>
	<h2 class="cta-block">
		<div class="main-grid" data-cta-animation-section>
			<span class="cta-block__title flex-vertical-center" data-cta-animation-section-text>
				{{ data.title[0] }}
			</span>
			<span class="cta-block__title flex-vertical-center flex-end" data-cta-animation-section-text>
				{{ data.title[1] }}
			</span>
			<div class="lines">
				<span class="lines__item" data-cta-animation-section-lines></span
				><span class="lines__item" data-cta-animation-section-lines></span
				><span class="lines__item" data-cta-animation-section-lines></span>
			</div>
		</div>
	</h2>
</template>
<script lang="ts" src="./ctaBlock.ts"></script>
<style lang="scss" src="./ctaBlock.scss"></style>
