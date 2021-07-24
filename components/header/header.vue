<template>
	<div>
		<header class="header">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<IconPin /><span>{{ data.headerValueOne }}</span>
					</div>
					<div class="col-sm-4 flex-horizontal-center">
						<nuxt-link to="/">
							{{ data.headerValueTwo }}
						</nuxt-link>
					</div>
					<div class="col-sm-4 flex-end">
						<button type="button">
							<IconDots />
						</button>
					</div>
				</div>
			</div>
		</header>
		<div class="header__menu">
			<ul>
				<li v-for="(item, index) in data.mainMenuCollection.items" :key="index">
					<nuxt-link :to="item.slug ? item.slug : '/'">
						<template v-if="item.menuName">
							{{ item.menuName }}
						</template>
						<template v-else>
							{{ item.slug }}
						</template>
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" src="./header.scss"></style>
<script lang="ts" src="./header.ts"></script>
