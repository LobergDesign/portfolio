<template>
	<div class="text-block main-grid">
		<div class="container" data-animation-section>
			<div class="row flex-center-center">
				<div class="col-xl-5 col-lg-8">
					<h3 class="intro" data-animation-item>{{ data.intro }}</h3>
				</div>
			</div>
			<div class="row flex-horizontal-center">
				<div class="col-lg-5" data-animation-item v-if="data.firstRteSection">
					<div v-html="toHtmlString(data.firstRteSection.json)"></div>
				</div>
				<div class="col-lg-5" data-animation-item v-if="data.secondRteSection">
					<div v-html="toHtmlString(data.secondRteSection.json)"></div>
				</div>
			</div>
			<div class="row flex-center-center" v-if="data.link">
				<div class="col-lg-5" data-animation-item>
					<UtilsBtn :slug="data.link.slug" :text="data.linkTextOverwrite" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./textBlock.ts"></script>
