<template>
	<h2 class="cta-block">
		<div class="main-grid">
			<span class="cta-block__title flex-vertical-center">
				{{ data.title[0] }}
			</span>
			<span class="cta-block__title flex-vertical-center flex-end">
				{{ data.title[1] }}
			</span>
			<div class="lines">
				<span class="lines__item"></span><span class="lines__item"></span><span class="lines__item"></span>
			</div>
		</div>
	</h2>
</template>
<script lang="ts" src="./ctaBlock.ts"></script>
<style lang="scss" src="./ctaBlock.scss"></style>
