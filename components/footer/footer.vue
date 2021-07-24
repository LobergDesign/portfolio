<template>
	<footer>
		<div class="circular-effect">
			<svg viewBox="0 0 200 200">
				<path
					id="circle"
					d="
        M 100, 100
        m -60, 0
        a 60,60 0 1,0 120,0
        a 60,60 0 1,0 -120,0
    "
					style="fill: transparent"
				></path>

				<text>
					<textPath alignment-baseline="top" class="text" xlink:href="#circle">
					- {{ data.rotateEffectText }} - {{ data.rotateEffectText }}
					</textPath>
				</text>
			</svg>
		</div>
		<a :href="'mailto:' + data.email">{{ data.footerCtaText }} - {{ data.email }}</a>
		<div>
			<a :href="data.facebook" target="_blank">{{ data.facebook }}</a>
		</div>
		<div>
			<a :href="data.linkedIn" target="_blank">{{ data.linkedIn }}</a>
		</div>
		<div>
			<a :href="'mailto:' + data.email">{{ data.email }}</a>
		</div>
	</footer>
</template>
<style lang="scss" src="./footer.scss"></style>
<script lang="ts" src="./footer.ts"></script>
