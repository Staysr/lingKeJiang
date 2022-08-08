<template>
	<view>
		<view class="bg-white padding" style="margin-top: 15rpx;border-radius: 15rpx;">
			<view class="grid margin-bottom col-1">
				<text style="font-size: 30rpx;color: black;font-weight:500">当前定位</text>
			</view>
			<view>
				<view class='cu-tag round'>盛世添加</view>
				<view class='cu-tag round'>玩点小区</view>
			</view>
		</view>

		<view class="bg-white padding" style="margin-top: 15rpx;border-radius: 15rpx;">
			<view class="grid margin-bottom col-1">
				<text style="font-size: 30rpx;color: black;font-weight:500">历史访问</text>
			</view>
			<view>
				<view class='cu-tag round'>盛世添加</view>
				<view class='cu-tag round'>玩点小区</view>
			</view>
		</view>

		<scroll-view style="margin-top: 12rpx;" scroll-y class="indexes" :scroll-into-view="'indexes-'+ listCurID"
			:style="[{height:'calc(100vh - '+ CustomBar + 'px - 50px)'}]" :scroll-with-animation="true"
			:enable-back-to-top="true">
			<block v-for="(item,index) in list" :key="index">
				<view :class="'indexItem-' + item.name" :id="'indexes-' + item.name" :data-index="item.name">
					<view class="padding">{{item.name}}</view>
					<view class="cu-list menu-avatar no-padding" v-if="item.regions_index != undefined">
						<view class="bg-white padding" style="margin-top: 15rpx;border-radius: 15rpx;"
							v-if="item.regions_index.length == 0">
							<view class="grid  col-1">
								暂无开通
							</view>
						</view>
						<view class="bg-white padding" style="margin-top: 15rpx;border-radius: 15rpx;"
							v-for="(items,sub) in item.regions_index" :key="sub">
							<view class="grid col-1">
								<text style="font-size: 35rpx;color: black;font-weight:500">{{items.name}}</text>
								<view class="bg-white" v-for="(itemss,sus) in items.sub_regions" :key="sus">
									<view class="grid col-1">
											<button style="margin-top: 10rpx;" class="cu-btn round sm lines-blue shadow" @click="getXiaoQu(itemss.code)">{{itemss.name}}</button>
											
										<view style="margin-top: 12rpx;" class="bg-white"
											v-if="xiaoqu != [] || xiaoqu.length < 0 " v-for="(itemsss,suss) in xiaoqu"
											:key="suss">
											<view class="grid col-1">
												<text style="font-size: 30rpx;color: black;font-weight:500">
													<button class="cu-btn round sm bg-grey shadow" v-if="suss == 0"
														@click="getlist(itemss,2)">全部</button>
													<button style="margin-left: 10rpx;" class="cu-btn round sm cu-btn round bg-orange shadow"
														@click="getlist(itemsss,1)">{{ itemsss.name }}</button>
												</text>
											</view>
										</view>

									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<view class="indexBar" :style="[{height:'calc(100vh - ' + CustomBar + 'px - 50px)'}]">
			<view class="indexBar-box" @touchstart="tStart" @touchend="tEnd" @touchmove.stop="tMove">
				<view class="indexBar-item" v-for="(item,index) in list" :key="index" :id="index" @touchstart="getCur"
					@touchend="setCur"> {{item.name}}</view>
			</view>
		</view>
		<!--选择显示-->
		<view v-show="!hidden" class="indexToast">
			{{listCur}}
		</view>
	</view>
</template>

<script>
	import http from '@/components/utils/http.js';
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				hidden: true,
				listCurID: '',
				list: [],
				listCur: '',
				xiaoqu: []
			};
		},
		onLoad() {
			//获取索引
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
			}
			this.list = list;
			this.listCur = list[0];
			this.getCitys()
		},
		onReady() {
			//滑动开始
			let that = this;
			uni.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
				that.boxTop = res.top
			}).exec();
			uni.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
				that.barTop = res.top
			}).exec()
		},
		methods: {
			//获取文字信息
			getCur(e) {
				this.hidden = false;
				this.listCur = this.list[e.target.id].name;
			},
			getlist(e, type) {
				uni.setStorageSync("currentPosition", e);
				uni.switchTab({
					url: '/pages/index/index',
					success: (res) => {
						let page = getCurrentPages().pop();
						console.log(page)
						if (page == undefined || page == null) return;
						page.getAddList();
					}
				});
			},
			setCur(e) {
				this.hidden = true;
				this.listCur = this.listCur
			},
			getXiaoQu(code) {
				http.httpRequest({
					url: 'complex/?code=' + code,
					method: 'get'
				}).then(res => {
					if (res.statusCode == 200) {
						this.xiaoqu = res.data
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
			//获取城市
			getCitys() {
				http.httpRequest({
					url: 'regions/',
					method: 'get'
				}).then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						this.list = res.data
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
			//滑动选择Item
			tMove(e) {
				let y = e.touches[0].clientY,
					offsettop = this.boxTop,
					that = this;
				//判断选择区域,只有在选择区才会生效
				if (y > offsettop) {
					let num = parseInt((y - offsettop) / 20);
					this.listCur = that.list[num].name
				};
			},

			//触发全部开始选择
			tStart() {
				this.hidden = false
			},

			//触发结束选择
			tEnd() {
				this.hidden = true;
				this.listCurID = this.listCur
			},
			indexSelect(e) {
				let that = this;
				let barHeight = this.barHeight;
				let list = this.list;
				let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
				for (let i = 0; i < list.length; i++) {
					if (scrollY < i + 1) {
						that.listCur = list[i].name;
						that.movableY = i * 20
						return false
					}
				}
			}
		}
	}
</script>

<style>
	.indexes {
		position: relative;
	}

	.indexBar {
		position: fixed;
		right: 0px;
		bottom: 0px;
		padding: 20upx 20upx 20upx 60upx;
		display: flex;
		align-items: center;
	}

	.indexBar .indexBar-box {
		width: 40upx;
		height: auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
		border-radius: 10upx;
	}

	.indexBar-item {
		flex: 1;
		width: 40upx;
		height: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		color: #888;
	}

	movable-view.indexBar-item {
		width: 40upx;
		height: 40upx;
		z-index: 9;
		position: relative;
	}

	movable-view.indexBar-item::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 10upx;
		height: 20upx;
		width: 4upx;
		background-color: #f37b1d;
	}

	.indexToast {
		position: fixed;
		top: 0;
		right: 80upx;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 100upx;
		height: 100upx;
		border-radius: 10upx;
		margin: auto;
		color: #fff;
		line-height: 100upx;
		text-align: center;
		font-size: 48upx;
	}

	.cu-list.menu-avatar>.cu-item {
		/* height: 80rpx; */
	}
</style>
