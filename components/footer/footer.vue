<template>
	<footer class="main-grid footer">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="cta">
						<a :href="'mailto:' + data.email" class="footer__link"
							><span class="cta__text">{{ data.footerCtaText }}</span>
							<span class="cta__text cta__reveal cta__reveal--mail">{{ data.email }}</span></a
						>
						<IconArrow class="cta__icon icon-arrow icon-arrow--medium" />
					</div>
				</div>
			</div>
			<div class="row">
	
				<div class="col-12 flex-end">
					<div class="footer__social">
						<span class="footer__social-text">connect: </span>
						<ul class="reset-ul footer__social-list">
							<li>
								<a :href="data.linkedIn" target="_blank"><IconLinkedIn /></a>
							</li>
							<li>
								<a :href="data.facebook" target="_blank"><IconFacebook /></a>
							</li>
							<li>
								<a :href="'mailto:' + data.email"><IconEmail /></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<style lang="scss" src="./footer.scss"></style>
<script lang="ts" src="./footer.ts"></script>
