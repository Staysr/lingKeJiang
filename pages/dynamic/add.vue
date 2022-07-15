<template>
	<view class="content">
		<!-- list 部分 -->
		<view v-for="(item,index) in 10" class="cu-card dynamic no-card"
			style="border-radius: 15px;margin-left: 30rpx;margin-top: 20rpx;margin-right: 30rpx;margin-bottom: 20rpx;">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar" @click="dyinfo">
					<view class="cu-item">
						<view class="cu-avatar radius lg"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
						</view>
						<view class="content flex-sub">
							<view>芳如家政 (经四路万达中心)</view>
							<view class="text-gray text-sm flex justify-between">
								2019年12月3日
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
				</view>
				<view class="grid flex-sub padding-lr" :class="isCard?'col-3 grid-square':'col-1'">
					<view class="bg-img" :class="isCard?'':'only-img'"
						style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
						v-for="(item,index) in isCard?9:1" :key="index">
					</view>
				</view>
				<view class="text-sm text-right padding">
					<view style="display: inline-block;float: left;margin-left:  15rpx;">
						<img style="width: 20rpx;padding-top: 12rpx;" src="../../static/forward.svg">
						<text style="margin-left: 12rpx;">分享</text>
					</view>
					<view style="display: inline-block;margin-right: 20rpx;">
						<img style="width: 20rpx;padding-top: 12rpx;" src="../../static/like.svg">
						<text style="margin-left: 12rpx;">收藏</text>
					</view>
					<view style="display: inline-block;">
						<img style="width: 20rpx;padding-top: 12rpx;" src="../../static/comment.svg">
						<text style="margin-left: 12rpx;">评论</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				isCard: false,
			};
		},
		methods: {
			dyinfo() {
				uni.navigateTo({
					url: '../dynamicDetails/dynamicDetails'
				});
			}
		}
	}
</script>

<style>
</style>
