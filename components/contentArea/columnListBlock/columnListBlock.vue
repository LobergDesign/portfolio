<template>
	<div class="main-grid main-grid__indent">
		<div class="column-list-block">
			<div class="container">
				<ul class="row row-ul">
					<li v-for="(item, index) in data.listItemsCollection.items" :key="index" class="col-lg-4" data-class-animation>
						<h2 class="headline-4 column-list-block__title text-faint">
							{{ item.title }}
						</h2>
						<ul class="reset-ul column-list-block__list-content">
							<li v-for="(listItem, i) in item.listItems" :key="'key' + i">
								{{ listItem }}
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./columnListBlock.ts"></script>
<style lang="scss" src="./columnListBlock.scss"></style>
