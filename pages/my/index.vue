<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="tabbar">
			<view style="height: 500rpx;">
				<img style="width: 100%;" src="../../static/my_bg.svg" alt="">
				<view class="avatar">
					<view class="cu-avatar lg round margin-left"
						style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);">
					</view>
				</view>
				<view class="text-xl padding test">
					<text class="text-black text-bold">这是用户名称</text>
				</view>
				<view class="center-cunt">
					<view class="padding">
						<view class="grid text-bold text-center col-3">
							<view class="padding">193</view>
							<view class="padding tesr-pan">34</view>
							<view class="boder-left"></view>
							<view class="padding tesr-pan">143</view>
							<view>我的关注</view>
							<view class="test-bow">我的收藏</view>
							<view class="boder-right"></view>
							<view class="test-bow">我的评论</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar text-bold" style="position: absolute;top: 420rpx; left: 5rpx;">
			<view class="action">
				<span style="margin-left: 20rpx; color:#333333">商户服务</span>
			</view>
		</view>
		<!-- 下体服务 -->
		<view class="cu-list grid col-4 no-border">
			<view class="cu-item">
				<view>
					<img class="img-my" src="../../static/certification.svg" alt="">
				</view>
				<text style="color: #333333;">我的认证</text>
			</view>
			<view class="cu-item">
				<view>
					<img class="img-my" src="../../static/dynamic.svg" alt="">
				</view>
				<text style="color: #333333;">动态管理</text>
			</view>
			<view class="cu-item">
				<view>
					<img class="img-my" src="../../static/shop.svg" alt="">
				</view>
				<text style="color: #333333;">商品管理</text>
			</view>
			<view class="cu-item">
				<view>
					<img class="img-my" src="../../static/order.svg" alt="">
				</view>
				<text style="color: #333333;">订单管理</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
	.content {
		background-color: #fff;
		height: 1200rpx;
	}

	.avatar {
		position: absolute;
		top: 130rpx;
		left: 20rpx;
	}

	.test {
		position: absolute;
		top: 120rpx;
		left: 150rpx;
	}

	.center-cunt {
		position: absolute;
		top: 220rpx;
		left: 15rpx;
	}

	.tesr-pan {
		padding-left: 95rpx;
	}

	.test-bow {
		padding-left: 70rpx
	}

	.boder-left {
		width: 2rpx;
		height: 55rpx;
		position: absolute;
		top: 85rpx;
		left: 274rpx;
		border-width: 0 0 0 1px;
		border-style: solid;
		border-color: #9CA5AA;
	}

	.boder-right {
		width: 2rpx;
		height: 55rpx;
		position: absolute;
		top: 84rpx;
		right: -25rpx;
		border-width: 0 0 0 1px;
		border-style: solid;
		border-color: #9CA5AA;
	}

	.img-my {
		height: 66rpx;
		width: 56rpx;
	}
</style>
