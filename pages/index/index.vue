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
		<view class="moneys">
			<z-paging
				ref="paging" 
				use-virtual-list 
				use-compatibility-mode 
				:fixed="false"
				:extra-data="extraData" 
				:cell-height-mode="tabIndex===0?'fixed':'dynamic'" 
				@query="queryList" 
				@innerCellClick="innerCellClick"
			>
			</z-paging>	
		</view>
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
				extraData: {
					// 给这个页面的虚拟列表取一个名字，这样在zp-virtual-cell中可以根据这个名字来区分不同页面的cell
					id: 'songli',
					// 这边可以附加其他的当前页面需要传给cell的值
					// 这里示范了通过props传递方法回调来代替cell组件内部emit的场景，如果需要监听点击cell可以直接通过@innerCellClick监听
					titleClickedCallback: (title) => {
						// 点击了标题
						console.log('点击了标题' + title)
					}
				},
				moneys: [
					/*
					{ id: 1, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 2, name: '李四', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 3, name: '王五', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 4, name: '赵六', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 5, name: '马齐', userRemark: '亲友备注', money: 19999923, type: '结婚', time: '2023-01-01' },
					{ id: 6, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 7, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 8, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 9, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 10, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 11, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' }
					*/
				],
				inputVal: ''
			}
		},
		methods: {
			queryList(pageNo, pageSize) {
				// 组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				// 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				// 模拟请求服务器获取分页数据，请替换成自己的网络请求
				this.moneys = this.moneys.concat([
					{ id: 1, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 2, name: '李四', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 3, name: '王五', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 4, name: '赵六', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 5, name: '马齐', userRemark: '亲友备注', money: 19999923, type: '结婚', time: '2023-01-01' },
					{ id: 6, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 7, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 8, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 9, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 10, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' },
					{ id: 11, name: '张三', userRemark: '亲友备注', money: 123, type: '结婚', time: '2023-01-01' }
				])
				this.$refs.paging.complete(this.moneys);
				console.log(this.moneys)
			},
			// 内置列表cell被点击时触发，会自动带两个参数：item和index过来
			innerCellClick(item, index){
				console.log('点击了' + item.title)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		--swiper-height: 260rpx;
		padding-top: env(safe-area-inset-top);
		.swiper {
			width: 100%;
			height: var(--swiper-height);
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
			// #ifdef H5
			height: calc(100vh - var(--swiper-height) - 70px);
			// #endif
			// #ifdef MP-WEIXIN
			height: calc(100vh - var(--swiper-height) - 30px);
			// #endif
			margin-top: 20rpx;
			box-sizing: border-box;
			padding: 25rpx 20rpx;
			border-radius: 16rpx;
			box-shadow: 0 0 25rpx rgba(130, 130, 130, 0.2);
			scrollbar-width: none;
			-ms-overflow-style: none;
		}
		::-webkit-scrollbar {
		  display: none;
		  width: 0;
		  height: 0;
		  color: transparent;
		}
	}
</style>
