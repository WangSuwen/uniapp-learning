<template>
	<view class="money-item flex">
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
</template>

<script>
	export default {
		name:"songli-list",
		props: {
			item: null,
			index: 0,
			extraData: null
		},
		data() {
			return {
				
			};
		},
		onShow() {
			console.log(343434343, this.extraData);
		},
		methods: {
			titleClick(title){
				//如果要把点击事件传给页面，可以通过给extraData中添加对应的函数，然后在当前组件中触发这个函数，在页面中监听即可
				//注意，微信小程序中无法通过props传递事件，在微信小程序中可以使用uni.$emit、uni.$on代替
				if(this.extraData.titleClickedCallback){
					this.extraData.titleClickedCallback(title);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
		.money-item {
			height: 130rpx;
			border-bottom: 2rpx solid rgba(180, 182, 186, 0.2);
			&:last-child {
				border: none;
			}
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
			// justify-content: space-between;
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
	
</style>