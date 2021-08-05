<template>
	<div class="main-grid image-block">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<NuxtImg
						v-if="data.image"
						provider="cloudinary"
						:src="data.image[0].url"
						:alt="data.image[0].imageTitle"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./imageBlock.ts"></script>
<style lang="scss" src="./imageBlock.scss"></style>
