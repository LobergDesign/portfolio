// export default {
// 	watch: {
// 		$route() {
// 			this.lmS.update();
// 		},
// 	},
// 	mounted() {
// 		this.$nextTick(
// 			function () {
// 				this.lmS = new this.locomotiveScroll({
// 					el: document.querySelector("#scroll-wrap"),
// 					smoothMobile: false,
// 					smooth: true,
// 				});

// 				window.addEventListener("resize", () => {
// 					this.onLmsResize.bind(this);
// 				});
// 			}.bind(this)
// 		);
// 	},

// 	destroyed() {
// 		setTimeout(() => {
// 			this.lmS.destroy();
// 		}, 1000);
// 		window.removeEventListener("resize", this.onLmsResize);
// 	},
// 	methods: {
// 		// locomotive scroll
// 		onLmsResize() {
// 			this.lmS.update();
// 		},
// 	},
// };
