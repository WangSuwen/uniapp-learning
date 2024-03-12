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
	// #ifdef MP-WEIXIN
	page {
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	// #endif
	
	//  H5/webview 
	body {
		box-sizing: border-box;
		padding: 10rpx 20rpx 0;
	}
	/*每个页面公共css */
	/*
	.content {
		// #ifdef MP-WEIXIN
		height: 100vh;
		// #endif
		
		// #ifdef H5
		height: -webkit-fill-available;
		// #endif
	}
	*/
	.flex {
		display: flex;
	}
	.f-ai-c {
		align-items: center;
	}
</style>
