<template>
	<div data-animation-section>
		<a :href="url" target="_blank" class="large-cta" data-animation-item>
			<div class="main-grid">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<span class="large-cta__text">Launch site</span>
							<span class="large-cta__reveal hide-on-mobile">{{ url }}</span>
							<IconArrow class="large-cta__icon" />
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>
<style lang="scss" src="./largeCta.scss"></style>
<script lang="ts" src="./largeCta.ts"></script>
