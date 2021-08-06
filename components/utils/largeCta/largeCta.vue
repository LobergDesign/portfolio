<template>
	<a :href="url" target="_blank" class="large-cta">
		<div class="main-grid">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<span class="large-cta__text">Launch site</span>
						<span class="large-cta__reveal">{{ url }}</span>
						<IconArrow class="large-cta__icon" />
					</div>
				</div>
			</div>
		</div>
	</a>
</template>
<style lang="scss" src="./largeCta.scss"></style>
<script lang="ts" src="./largeCta.ts"></script>
