<template>
	<view class="content">
		<text class="login-text">登录</text>
		<image src="../../static/login-bg.png" mode="widthFix" class="login-bg"></image>
		<view class="form">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello World1'
			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	page {
		height: 100vh;
		background: linear-gradient(180deg, #CDE1FF 0%, rgba(205, 225, 255, 0.00) 100%);
	}
	.content {
		display: flex;
		// height: 100%;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.login-text {
			margin-top: 56rpx;
			font-family: SF Pro;
			font-size: 44rpx;
			font-weight: 510;
			line-height: 44rpx;
			letter-spacing: 0.4em;
			text-align: center;
		}
		.login-bg {
			width: 100%;
			top: 0;
			position: absolute;
		}
		.form {
			margin-top: 390rpx;
			width: 100%;
			height: 500rpx;
			background-color: purple;
		}
	}

</style>
