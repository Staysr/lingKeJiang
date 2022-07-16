<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="tabbar">
			<img class="bgImg" src="../../static/info@2.png">
			<view class="cu-card dynamic" style="position: absolute;top:180rpx; width: 750rpx;">
				<view v-if="companyList != ''"  class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar radius lg"
								:style="'background-image:url(' +  companyList.image +  ')'">
							</view>
							<view class="content flex-sub text-bold">
								<view>{{ companyList.company_auth.company_name }}</view>
							</view>
							<view style="margin-right: 15rpx;">
								<button class="cu-btn round bg-blue shadow">关注</button>
							</view>
						</view>
					</view>
					<view style="height: 175rpx; padding: 0;margin-bottom:0" class="text-content">
						<view class="map">
							<view style="padding-top: 25rpx;">
								<text style="color: #999999;margin-left: 40rpx;" class="cuIcon-locationfill"></text>
								<view style="display: inline-block;margin-left: 12rpx;"
									class="content flex-sub text-bold">
									<view>距离 1.8km</view>
								</view>
							</view>
							<view class="text-gray" style="margin-left: 40rpx;margin-top: 8rpx;width: 87%;">
								{{ companyList.company_auth.address }}
							</view>
							<img @click="dialNumber(companyList.company_auth.contact)"  style="margin-right: 30rpx;position: absolute;right: 22rpx;top: 180rpx;width: 80rpx;height: 80rpx;"
								src="../../static/phone.svg">
							<view @click="dialNumber(companyList.company_auth.contact)"
								style="position: absolute;right: 64rpx;bottom: 83rpx;" class="text-gray">电话</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 选择 -->
		<view style="margin-top: 230rpx;margin-left: 30rpx;">
			<scroll-view scroll-x class="nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in option"
					:key="index" @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<!-- list  部分-->
		<view v-for="(item,index) in dongtList.results" class="cu-card dynamic no-card"
			style="border-radius: 15px;margin-left: 30rpx;margin-top: 20rpx;margin-right: 30rpx;margin-bottom: 20rpx;">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar" @click="dyinfo(item.id)">
					<view class="cu-item">
						<view class="cu-avatar radius lg"
							:style="'background-image:url(' +  item.user.image +  ')'">
						</view>
						<view class="content flex-sub">
							<view>{{ item.user.company_auth.company_name }}</view>
							<view class="text-gray text-sm flex justify-between">
								{{ item.create_time }}
							</view>
						</view>
					</view>
				</view>
				<view style="margin-top: 20rpx;" class="text-content">
					{{ item.title }}
				</view>
				<view class="grid flex-sub padding-lr"
					:class="item.activity_images.length > 1 ?'col-3 grid-square':'col-1'">
					<view class="bg-img" @click="preview(item.activity_images)"
						:class="item.activity_images.length > 1 ?'':'only-img'"
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
				option: [{
					name: "动态",
					value: 1
				}, {
					name: "精选服务",
					value: 2
				}],
				companyList: [],
				dongtList: [],
				opt: [],
			};
		},
		onLoad(opt) {
			this.getcompanyList(opt)
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			dyinfo(e) {
				uni.navigateTo({
					url: '../dynamicDetails/dynamicDetails?id=' + e
				});
			},
			preview(urls) {
				let arrUrls = [];
				for (var i = 0; i < urls.length; i++) {
					arrUrls.push(urls[i]['image'])
				}
				uni.previewImage({
					urls: arrUrls,
				});
			},
			getcompanyList(opt) {
				http.httpRequest({
					url: 'company_user/' + opt.id,
					method: 'get'
				}).then(res => {
					if (res.statusCode == 200) {
						this.companyList = res.data
						this.activity()
						return;
					}
					uni.showToast({
						icon: 'none',
						title: '请求错误'
					});
				}, error => {
					console.log(error);
				})
			},
			activity() {
				http.httpRequest({
					url: 'activity/',
					method: 'get'
				}, {
					complex: this.companyList.id,
					user_id: this.companyList.company_auth.id,
					category: 1
				}).then(res => {
					if (res.statusCode == 200) {
						this.dongtList = res.data
						return;
					}
					uni.showToast({
						icon: 'none',
						title: '请求错误'
					});
				}, error => {
					console.log(error);
				})
			},
			dialNumber(contact) {
				uni.makePhoneCall({
					phoneNumber: contact
				})
			},
		}
	}
</script>
<style>
	.bgImg {
		width: 100%;
		height: 320rpx;
	}

	.map {
		background-image: url(../../static/map.png);
		width: 90%;
		height: 100%;
	}
</style>
