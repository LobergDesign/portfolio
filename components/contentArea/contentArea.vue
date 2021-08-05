<template>
	<div class="content-area" v-if="data.contentBlocksCollection">
		<section
			v-for="(item, index) in data.contentBlocksCollection.items"
			:class="{ 'content-area__item': item.type != 'ComponentCta' }"
			:key="index"
		>
			<ContentAreaTextBlock v-if="item.type === 'ComponentTextarea'" :data="item" />
			<ContentAreaCtaBlock v-if="item.type === 'ComponentCta'" :data="item" />
			<ContentAreaTableListBlock v-if="item.type === 'ComponentTabelList'" :data="item" />
			<ContentAreaColumnListBlock v-if="item.type === 'ComponentColumnList'" :data="item" />
			<ContentAreaImageBlock
				v-if="item.type === 'ComponentImage'"
				:data="item"
				:class="{ 'is-first': index === 0 }"
			/>
		</section>
	</div>
</template>
<style lang="scss" src="./contentArea.scss"></style>
<script lang="ts" src="./contentArea.ts"></script>
