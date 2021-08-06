<template>
	<div>
		<header class="header flex-vertical-center" ref="header" :class="{ 'is-active': isMenuActive }">
			<div class="main-grid">
				<div class="container">
					<div class="row">
						<div class="col-sm-4 flex-vertical-center">
							<div class="init-animation">
								<nuxt-link to="/" hide-on-scroll>
									<span>
										{{ data.headerValueOne }}
									</span>
									<span>Home</span>
								</nuxt-link>
							</div>
						</div>
						<div class="col-sm-4 flex-center-center">
							<div class="init-animation">
								<span hide-on-scroll>
									{{ data.headerValueTwo }}
								</span>
							</div>
						</div>
						<div class="col-sm-4 flex-end">
							<div class="init-animation">
								<button type="button" class="header__menu-icon" v-on:click="toggleMenu()">
									<span></span>
									<span></span>
									<span></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div class="header-menu" :class="{ 'is-active': isMenuActive }">
			<div class="header-menu__bg"></div>
			<div class="header-menu__bg"></div>
			<div class="header-menu__bg"></div>
			<div class="header-menu__bg"></div>
			<div class="header-menu__bg"></div>
			<div class="header-menu__bg"></div>
			<ul class="header-menu__list">
				<li v-for="(item, index) in data.mainMenuCollection.items" class="flex-center-center" :key="index">
					<nuxt-link :to="item.slug ? '/' + item.slug + '/' : '/'" class=" main-grid">
						<template v-if="item.menuName">
							<span class="header-menu__list-text">{{ item.menuName }} </span>
							<span class="header-menu__list-reveal">{{ item.menuName }} </span>
						</template>
						<template v-else>
							<span class="header-menu__list-text">{{ item.slug }}</span>
							<span class="header-menu__list-reveal">{{ item.slug }}</span>
						</template>
						<IconArrow class="header-menu__list-icon icon-arrow icon-arrow--medium" />
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" src="./header.scss"></style>
<style lang="scss" src="./headerMenu.scss"></style>
<script lang="ts" src="./header.ts"></script>
