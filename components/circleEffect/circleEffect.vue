<template>
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
				<textPath xlink:href="#circle">
					- {{ text }} - {{ text }}
				</textPath>
			</text>
		</svg>
	</div>
</template>
<style lang="scss" src="./circleEffect.scss"></style>
<script lang="ts" src="./circleEffect.ts"></script>
