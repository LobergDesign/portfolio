<template>
	<section class="main-grid main-grid__indent">
		<div class="container">
			<ul class="row row-ul work__list">
				<li v-for="(item, index) in privateWorkUC.items" :key="index" class="col work__list-item">
					<nuxt-link :to="'/work/' + item.slug + '/'">
						<h4 v-if="item.pageTitle">
							{{ item.pageTitle }}
						</h4>
						<div class="work__list-item-image" v-if="item.previewImage">
							<NuxtImg provider="cloudinary" :src="item.previewImage[0].url" />
						</div>
						<!-- <div class="work__list-item-body">
							<p>{{ item.role }}</p>
						</div> -->
						<IconArrow />
					</nuxt-link>
				</li>
				<li v-for="(item, i) in privateWork.items" :key="'index' + i" class="col work__list-item">
					<nuxt-link :to="'/work/' + item.slug + '/'">
						<h4 v-if="item.pageTitle">
							{{ item.pageTitle }}
						</h4>
						<div class="work__list-item-image" v-if="item.previewImage">
							<NuxtImg provider="cloudinary" :src="item.previewImage[0].url" />
						</div>
						<!-- <div class="work__list-item-body">
							<p>{{ item.role }}</p>
						</div> -->
						<IconArrow />
					</nuxt-link>
				</li>
			</ul>
		</div>
	</section>
</template>
<style lang="scss" src="./privateWork.scss"></style>
<script lang="ts" src="./privateWork.ts"></script>
