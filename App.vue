<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.content {
		// #ifdef MP-WEIXIN
		height: 100vh;
		// #endif
		
		// #ifdef H5
		height: -webkit-fill-available;
		// #endif
	}
</style>
