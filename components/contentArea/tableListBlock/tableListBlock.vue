<template>
	<div class="main-grid main-grid__indent">
		<div class="table-list-block">
			<div class="container">
				<ul class="row row-ul">
					<li
						v-for="(headlines, headlinesIndex) in data.tabelHeadlines"
						class="col-4 table-list-block__headlines"
						:key="headlinesIndex"
					>
						<span class="text-faint">
							{{ headlines }}
						</span>
					</li>
				</ul>
				<ul class="row row-ul">
					<li
						v-for="(item, index) in data.tabelItemsCollection.items"
						class="col-12 table-list-block__item"
						:key="index"
					>
						<div class="table-list-block__content">
							<div class="row">
								<div class="col-sm-4">{{ item.year }}</div>
								<div class="col-sm-4">{{ item.place }}</div>
								<div class="col-sm-4">{{ item.description }}</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./tableListBlock.ts"></script>
<style lang="scss" src="./tableListBlock.scss"></style>
