<template>
	<main>
		<Hero :data="data.hero" />
		<ContentArea :data="data.contentArea" />
		<PrivateWork :privateWorkUC="data.privateWorkUC" :privateWork="data.privateWork" />
		<div class="main-grid">
			

			<!-- <pre>
			{{ data }}
		</pre
			> -->
		</div>
	</main>
</template>

<script lang="ts" src="./index.ts"></script>
