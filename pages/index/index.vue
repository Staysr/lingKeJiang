<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="tabbar">
			<view class="cu-bar search">
				<view class="action">
					<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
						<text style="color: white;" class="cuIcon-locationfill"></text><text
							style="color: white;margin-left: 12rpx;">{{ regionName }}</text>
						<text style="color: white;" class="cuIcon-triangledownfill"></text>
					</pick-regions>
				</view>
				<view v-if="community.length >= 1">
					<picker style="margin-left: 8rpx;color: #FFFF;" @change="PickerChange" :value="index1"
						:range="community" :range-key="'name'">
						<view class="picker">
							{{index1>-1?community[index1].name:'全部'}}<text style="color: white;"
								class="cuIcon-triangledownfill"></text>
						</view>
					</picker>

				</view>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索商家名称"
						confirm-type="search"></input>
				</view>
			</view>
			<view class="layer">
				<view>
					<span @click="dynamic" style='margin-left: 60rpx;'>
						<img style="position:absolute;top: 185rpx;width: 92rpx;margin-left: 6rpx;"
							src="../../static/user_ioc.svg" alt="">
						<text style="position:absolute;top: 290rpx;">社区动态</text>
					</span>
					<span style='margin-left: 199rpx;'>
						<img style="position:absolute;top: 185rpx;width: 92rpx;margin-left: 6rpx;"
							src="../../static/birth.svg" alt="">
						<text style="position:absolute;top: 288rpx;">闲置物品</text>
					</span>

					<span style='margin-left: 200rpx;'>
						<img style="position:absolute;top: 185rpx;width: 92rpx;margin-left: 6rpx;"
							src="../../static/jiaz.svg" alt="">
						<text style="position:absolute;top: 288rpx;">发布需求</text>
					</span>
				</view>
			</view>
		</view>
		<!-- 中体部分 -->
		<view class="cu-bar bg-white">
			<view class="action">
				<img src="../../static/fire.png" alt=""><span style="margin-left: 20rpx;">附近商家</span>
			</view>
		</view>

		<!-- list 部分 -->
		<view v-for="(item,index) in newsList" :key="index" @click="merchantDetails(item.id)"
			class="cu-list menu-avatar" style="margin-top: 0;">
			<!-- <view style="margin-left: 35rpx;padding-bottom: 30rpx;">
				<view class="cu-avatar radius lg" style="height: 175rpx; width: 250rpx;margin-top: 20rpx;"
					:style="'background-image:url(' +  item.user.image +  ')'">
				</view>
				<view class="text-black text-sm flex"
					style="position: relative; left: 290rpx;top: -130rpx;width: 400rpx;">
					<view style="position: absolute;overflow: hidden;text-overflow: ellipsis;">
						{{ item.company_name }}
					</view>
				</view>
			</view> -->
			<view class="cu-item">
				<view class="cu-avatar radius lg" :style="'background-image:url(' +  item.image +  ')'"></view>
				<view class="content">
					<view>
						<view class="text-cut">{{ item.company_auth.company_name }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pickRegions from '@/components/pick-regions/pick-regions.vue'
	import http from '@/components/utils/http.js';
	export default {
		components: {
			pickRegions
		},
		data() {
			return {
				InputCux: "",
				offset: 0,
				limit: 10,
				newsList: [],
				regionName: '正在获取位置',
				regionCode: 0,
				defaultRegion: ['河北省', '石家庄', '桥西区'],
				defaultRegionCode: "130104",
				community: [],
				index1: 0,

			}
		},
		onLoad() {
			var isLogin = uni.getStorageSync('Authorization');
			if (isLogin == undefined || isLogin == '') {
				uni.redirectTo({
					url: '../login/index'
				});
				return;
			}
			this.list()
			// this.location()
		},
		methods: {
			handleGetRegion(region) {
				this.regionName = region[2].name
				this.regionCode = region[2].code
				this.getLocationAohs()
			},
			PickerChange(e) {
				this.allCommunityList(this.community[e.detail.value].id);
				uni.setStorageSync('community', this.community[e.detail.value].id);
				this.index1 = e.detail.value
			},
			InputBlur(e) {
				this.InputCux = e.detail.value
			},
			getLocationAohs() {
				http.httpRequest({
					url: 'complex/',
					method: 'get'
				}, {
					code: this.regionCode,
				}).then(res => {

					//Todo 弹出4级小区选择器
					if (res.statusCode == 200) {
						console.log(this.community)
						this.community = [{
							"name": "全部小区",
							"id": 0,
						}]
						if (res.data.length > 0) {
							for (var i = 0; i < res.data.length; i++) {
								this.community.push({
									"name": res.data[i].name,
									"id": res.data[i].id,
								})
							}
						} else {
							this.index1 = 0
						}

						http.httpRequest({
							url: 'company_user/',
							method: 'get'
						}, {
							regions_code: this.regionCode
						}).then(res => {
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
			allCommunityList(e) {
				http.httpRequest({
					url: 'company_user/',
					method: 'get'
				}, {
					complex: e
				}).then(res => {
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
			},
			location() {
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: function(res) {
						console.log(res)
					},
					fail: function() {
						uni.showToast({
							title: '获取地址失败，将导致部分功能不可用',
							icon: 'none'
						});
						this.regionName = '位置获取失败'
					}
				});
			},
			merchantDetails(e) {
				//跳转到详情
				uni.navigateTo({
					url: '../merchant/info?id=' + e
				});
			},
			dynamic() {
				uni.switchTab({
					url: '../dynamic/add'
				});
			},
			list() {
				let data = {
					offset: this.offset,
					limit: this.limit,
				};
				let opts = {
					url: 'company_user/',
					method: 'get'
				};
				http.httpRequest(opts, data).then(res => {
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
		},
		onReachBottom() {
			++this.offset;
			let data = {
				offset: this.offset,
				limit: this.limit
			};
			http.httpRequest({
				url: 'company_user/',
				method: 'get'
			}, data).then(res => {
				if (res.statusCode == 200) {
					let arr = res.data.results
					arr.map((val, index, arr) => {
						this.newsList.push(val);
					})
					return;
				}
				uni.showToast({
					icon: 'none',
					title: '加载错误'
				});
			}, error => {
				console.log(error);
			})
		},
	}
</script>

<style>
	.content {
		background-color: #FFFF;
	}

	.tabbar {
		height: 365rpx;
		width: 100%;
		background-image: url(../../static/home/home.png);
	}

	.layer {
		height: 200rpx;
		width: 85%;
		background-color: #FFFF;
		margin-left: 55rpx;
		border-radius: 15px;
		box-shadow: 3px 3px 3px #E0E0E0;
		margin-top: 55rpx;
	}
</style>
