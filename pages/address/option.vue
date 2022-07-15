<template>
	<view class="">
		<view :style="{height:statusBarHeight+'px'}" style="width: 100%;"></view>
		<view style="" @click="oncity">
			<button type="primary">点击选择地区</button>
			 {{region}}
		</view>
		<popup-layer ref="popupRef" :direction="'right'">
			<view style="width:750upx;height: 100%;">
				<citySelect @back_city="back_city"></citySelect>
			</view>
		</popup-layer>

	</view>
</template>

<script>
	import citySelect from '@/components/linzq-citySelect/linzq-citySelect.vue';
	import popupLayer from '@/components/popup-layer/popup-layer.vue';
	export default {
		components: {
			citySelect,
			popupLayer
		},
		computed: {},
		data() {
			return {
				statusBarHeight: this.statusBarHeight, //状态栏高度，在main.js里
				region: '请选择...', //地区 
			}
		},
		created() {},  
		mounted() {  
			this.$refs.popupRef.close();
		},
		methods: {
			oncity() {
				var that = this
				this.$refs.popupRef.show();
			},
			back_city(e) { 
				if (e !== 'no') {
					this.region = e.cityName
					this.$refs.popupRef.close();
				} else {
					this.$refs.popupRef.close();
				}
			}
		}
	};
</script>

<style scoped>
	.height {
		height: var(--status-bar-height);
	}
</style>
