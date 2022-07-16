<template>
	<view class="content">
		<!-- list 部分 -->
		<view v-for="(item,index) in newsList" class="cu-card dynamic no-card"
			style="border-radius: 15px;margin-left: 30rpx;margin-top: 20rpx;margin-right: 30rpx;margin-bottom: 20rpx;">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar" @click="dyinfo(item.id)">
					<view class="cu-item">
						<view class="cu-avatar radius lg" :style="'background-image:url(' +  item.user.image +  ')'">
						</view>
						<view class="content flex-sub">
							<view>{{ item.user.company_auth.company_name }}</view>
							<view class="text-gray text-sm flex justify-between">
								{{ item.create_time }}
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					{{ item.title }}
				</view>
				<view class="grid flex-sub padding-lr"
					:class="item.activity_images.length > 1 ?'col-3 grid-square':'col-1'">
					<view class="bg-img" @click="preview(item.activity_images)" :class="item.activity_images.length > 1 ?'':'only-img'"
						:style="'background-image:url(' +  items.image +  ')'"
						v-for="(items,index) in item.activity_images" :key="index">
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
	import http from '@/components/utils/http.js';
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				isCard: false,
				newsList: []
			};
		},
		methods: {
			dyinfo(e) {
				uni.navigateTo({
					url: '../dynamicDetails/dynamicDetails?id=' + e
				});
			},
			preview(urls){
				let arrUrls = [];
				for (var i= 0; i<urls.length; ){
					arrUrls.push(urls[i]['image'])
				}
				console.log(arrUrls)
				uni.previewImage({
					urls: arrUrls,
				});
			},
		},
		onLoad() {
			var complexId = uni.getStorageSync('community')
			let data = {};
			if (complexId != undefined) {
				data = {
					complex: uni.getStorageSync('community')
				};
			}
			http.httpRequest({
				url: 'activity/',
				method: 'get'
			}, data).then(res => {
				//Todo 弹出4级小区选择器
				if (res.statusCode == 200) {
					this.newsList = res.data.results
					return;
				}
				uni.showToast({
					icon: 'none',
					title: '请求错误'
				});
			}, error => {
				console.log(error);
			})
		}
	}
</script>

<style>
</style>
