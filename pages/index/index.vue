<template>
	<view class="content">
		<swiper
			class="swiper"
			:indicator-dots="true" 
			indicator-active-color="rgb(255, 255, 255)"
			indicator-color="rgb(101, 108, 129)"
			:autoplay="true" 
			:interval="3000" 
			:duration="1000"
			:circular="true"
		>
			<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
				<image class="image" :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<scroll-view scroll-y="true" class="moneys">
			<view class="money-item flex f-ai-c" v-for="(item, index) in moneys" :key="item.id">
				<view class="type-icon">
					<text>囍</text>
				</view>
				<view class="info flex">
					<view class="user-info flex f-ai-c">
						<text>{{item.name}}</text>
						<text>{{item.userRemark}}</text>
					</view>
					<view class="date">
						<text>{{item.type}}</text>
						<text>{{item.time}}</text>
					</view>
				</view>
				<text class="money">-{{item.money}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg'
				],
				moneys: [
					{ id: 1, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 2, name: '李四', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 3, name: '王五', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 4, name: '赵六', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 5, name: '张三', userRemark: '亲友备注', money: 19999923, type: '结婚', time: '2023-01-01' },
					{ id: 6, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 7, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 8, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 9, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 10, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 11, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' }
				]
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding-bottom: 280rpx;
		padding-top: env(safe-area-inset-top);
		box-sizing: border-box;
		.swiper {
			width: 100%;
			height: 260rpx;
			overflow: hidden;
			.swiper-item {
				border-radius: 15rpx;
			}
			.image {
				width: 100%;
				height: 300rpx;
				object-fit: cover;
			}
		}
		.moneys {
			margin-top: 20rpx;
			box-sizing: border-box;
			padding: 25rpx 20rpx;
			border-radius: 16rpx;
			box-shadow: 0 0 25rpx rgba(130, 130, 130, 0.2);
			.money-item {
				height: 130rpx;
				border-bottom: 2rpx solid rgba(180, 182, 186, 0.2);
				&:last-child {
					border: none;
				}
				.type-icon {
					width: 80rpx;
					height: 80rpx;
					margin-right: 20rpx;
					border-radius: 50%;
					background: rgb(239, 231, 216);
					text-align: center;
					line-height: 80rpx;
					font-weight: 500;
					color: rgb(222, 98, 91);
				}
				.info {
					flex-grow: 1;
					flex-direction: column;
					justify-content: space-between;
					.user-info {
						margin-bottom: 10rpx;
						text:nth-child(1) {
							font-weight: 700;
							font-size: 32rpx;
						}
						text:nth-child(2) {
							display: block;
							text-align: center;
							margin-left: 20rpx;
							padding: 6rpx;
							border-radius: 4rpx;
							background-color: rgb(239,214,161);
							font-weight: 700;
							font-size: 20rpx;
							color: rgb(250, 255, 255);
						}
					}
					.date {
						font-size: 22rpx;
						color: rgb(70, 70, 70);
						text:nth-child(1) {
							position: relative;
							margin-right: 20rpx;
							&::after {
								position: absolute;
								content: '';
								top: 50%;
								right: -12rpx;
								transform: translateY(-50%);
								width: 2rpx;
								height: 80%;
								background-color: rgb(70, 70, 70, 0.7);
							}
						}
					}
				}
				.money {
					flex-grow: 1;
					display: block;
					text-align: right;
					font-weight: 700;
				}
			}
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
