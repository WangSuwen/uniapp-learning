<template>
	<view class="content">
		<z-swiper v-model="list">
		  <z-swiper-item v-for="(item, index) in list" :key="index">
		    <text class="swiper-item">{{item}}</text>
		  </z-swiper-item>
		</z-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1,2,3,4]
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: $uni-bg-color-grey;
		.swiper-item {
			width: 100%;
			height: 300rpx;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
