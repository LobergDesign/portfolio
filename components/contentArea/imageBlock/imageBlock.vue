<template>
	<div class="main-grid image-block" data-animation-section>
		<div class="container">
			<div class="row">
				<div class="col-12" data-animation-item>
					<NuxtImg
						v-if="data.image"
						provider="cloudinary"
						:src="data.image[0].url"
						:alt="data.image[0].imageTitle"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./imageBlock.ts"></script>
<style lang="scss" src="./imageBlock.scss"></style>
