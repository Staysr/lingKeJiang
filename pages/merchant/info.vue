<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="tabbar">
			<img class="bgImg" src="../../static/info@2.png">
			<view class="cu-card dynamic" style="position: absolute;top:180rpx; width: 750rpx;">
				<view v-if="companyList != ''" class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar radius lg"
								:style="'background-image:url(' +  companyList.image +  ')'">
							</view>
							<view class="content flex-sub text-bold">
								<view>{{ companyList.company_auth.company_name }}</view>
							</view>
							<view @click="focus()" style="margin-right: 15rpx;">
								<button :class="isocusData.id > 0 ? 'bg-blue' : 'bg-grey'"
									class="cu-btn round shadow">{{ isocusData.id > 0 ? '已关注' : '关注' }}</button>
							</view>
						</view>
					</view>
					<view style="height: 175rpx; padding: 0;margin-bottom:0" class="text-content">
						<view class="map">
							<view style="padding-top: 25rpx;">
								<text style="color: #999999;margin-left: 40rpx;" class="cuIcon-locationfill"></text>
								<view style="display: inline-block;margin-left: 12rpx;"
									class="content flex-sub text-bold">
									<view>距离 {{ currentPosition }}km</view>
								</view>
							</view>
							<view @longpress="copyText(companyList.company_auth.address)" class="text-gray"
								style="margin-left: 40rpx;margin-top: 8rpx;width: 87%;">
								{{ companyList.company_auth.address }}
							</view>
							<img @click="dialNumber(companyList.company_auth.contact)"
								style="margin-right: 30rpx;position: absolute;right: 22rpx;top: 180rpx;width: 80rpx;height: 80rpx;"
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
		<view v-if="TabCur == 0" v-for="(item,index) in dongtList.results" class="cu-card dynamic no-card"
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
				<view style="margin-top: 22rpx;" class="text-content">
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
		<view v-if="TabCur != 0" class="cu-list menu-avatar" style="margin-top: 10rpx;">
			<view
				style="margin-left: 35rpx;padding-bottom: 25rpx;background-color: #fff;border-radius: 20rpx;margin-right: 30rpx;">
				<view class="cu-avatar radius lg"
					style="margin-left: 12rpx; height: 175rpx; width: 250rpx;margin-top: 20rpx;">
				</view>
				<view class="text-black text-sm flex"
					style="position: relative; left: 290rpx;top: -130rpx;width: 400rpx;">
					<view
						style="position: absolute;overflow: hidden;text-overflow: ellipsis;font-size: 30rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #333333;">
						1111111111
					</view>
				</view>
				<view class="text-black text-sm flex"
					style="position: relative; left: 290rpx;top: -60rpx;width: 400rpx;">
					<view
						style="position: absolute;overflow: hidden;text-overflow: ellipsis; font-size: 38rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #FF7233;">
						¥99
					</view>
				</view>
			</view>
			<!-- <view style="margin-left: 35rpx;padding-bottom: 30rpx;height: 140rpx;" class="cu-item ">
				<view class="cu-avatar radius lg" style="height: 175rpx; width: 250rpx;margin-top: 20rpx;"
					>
				</view>
				<view class="content">
					<view class="text-cut">莫甘娜</view></view>
					<view class="text-gray text-sm flex"> <view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
				</view>
			</view> -->
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
				isocusData: [],
				currentPosition: 0
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
			getjuLi() {
				var value = uni.getStorageSync('currentPosition')
				var destination = ""
				if (value != undefined) {
					destination = value.longitude + ',' + value.latitude
				} else {
					uni.showToast({
						icon: 'none',
						title: '当前没有选择地址'
					});
				}
				http.httpRequest({
					url: 'distance/?' + 'origins=' + this.companyList.company_auth.longitude + ',' + this
						.companyList.company_auth.latitude + '&destination=' + destination,
					method: 'get'
				}).then(res => {
					if (res.statusCode == 200) {
						if (res.data[0] != undefined) {
							var num = res.data[0].distance / 1000
							this.currentPosition = num.toFixed(1)
						}
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
			copyText(e) {
				uni.setClipboardData({
					data: e,
					success() {
						uni.showToast({
							title: '已复制到剪贴板',
							icon: 'none',
							position: 'top'
						})
					}
				})
			},
			isocus() {
				http.httpRequest({
					url: 'user_focus/' + this.companyList.id,
					method: 'get'
				}).then(res => {
					if (res.statusCode == 200) {
						this.isocusData = res.data
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
			focus() {
				let data = {
					company: this.companyList.id
				};
				if (this.isocusData.id > 0) {
					http.httpRequest({
						url: 'user_focus/' + data.company,
						method: 'delete'
					}).then(res => {
						if (res.data["non_field_errors"] !== undefined) {
							if (res.data.non_field_errors[0] == "已关注") {
								this.isocusData.id = 999
							}
						} else {
							this.isocusData = res.data
						}
						uni.showToast({
							icon: 'none',
							title: '已取消关注'
						});
					}, error => {
						console.log(error);
					})
				} else {
					http.httpRequest({
						url: 'user_focus/',
						method: 'post'
					}, data).then(res => {
						if (res.data["non_field_errors"] !== undefined) {
							if (res.data.non_field_errors[0] == "已关注") {
								this.isocusData.id = 999
							}
						} else {
							this.isocusData = res.data
						}
						uni.showToast({
							icon: 'none',
							title: '关注成功'
						});
					}, error => {
						console.log(error);
					})
				}

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
						this.isocus()
						this.getjuLi()
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
					complex: this.companyList.company_auth.complex.id,
					user_id: this.companyList.id,
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
