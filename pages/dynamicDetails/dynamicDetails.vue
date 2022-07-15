<template>
	<view class="content">
		<view class="container jiangqie-page-view">
			<view class="jiangqie-page-head">
				<view class="jiangqie-page-title">
					<text>这是标题这是标题这是标题</text>
					<view class="jiangqie-page-cmt">
						<view class="cu-avatar sm radius"
							style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)">
						</view>
						<text style="margin-left: 12rpx;color: #666666;font-size: 28rpx;">芳如家政 (经四路万达中心)</text>
					</view>
				</view>
			</view>
			<view style="padding: 40rpx;">
				<span class="count">
					这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容
					这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容
					这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容
				</span>
				<image src="../../static/2565.jpg_wh1200.jpg" alt="aspectFit"></image>
			</view>

			<!-- 评论 -->
			<view class="jiangqie-page-cmtbox">
				<view class="jiangqie-page-cmt-title">回复</view>
				<template v-if="true">
					<view v-for="(item, index) in 3" :key="index" class="jiangqie-page-cmt-content">
						<view class="jiangqie-page-cmt-avatar radius">
							<image src="../../static/2565.jpg_wh1200.jpg" mode="aspectFill"></image>
						</view>
						<view class="jiangqie-page-cmt-head">
							芳如家政 (经四路万达中心)
						</view>
						<view class="time">
							<text>2022-03-23</text>
						</view>
						<view class="jiangqie-page-cmt-text">
							<text class="p-count">这是发表的文本内容这是发表的文本内容这是发表的文本内容这是发表的文本内容</text>
							<view class="jiangqie-page-cmt-replay">
								<view v-if="index > 1" v-for="(reply, index2) in 2" :key="index2"
									class="jiangqie-page-cmt-replay-box">
									<view class="jiangqie-page-cmt-replay-nametime">
										我是助力发布的
										<text class="jiangqie-page-cmt-replay-time">2022-03-23</text>
									</view>
									<view class="jiangqie-page-cmt-replay-world">你说的啥啊哈</view>
								</view>
							</view>
						</view>
					</view>
				</template>
			</view>
		</view>

		<!-- 操作栏 -->
		<view class="jiangqie-operation" v-if="true">
			<view class="iangqie-operation-left jiangqie-col-7 jiangqie-height-full jiangqie-ptop-zero">
				<view class="jiangqie-btn-comment" @tap.stop="handlerCommentClick">请输入评论内容...</view>
			</view>
			<view class="jiangqie-operation-right jiangqie-right-flex jiangqie-col-5">
				<view class="jiangqie-operation-item" hover-class="opcity" hover-stay-time="150"
					@tap="handlerCommentClick">
					<image src="../../static/comment.svg" mode="widthFix"></image>
					<span class="count-test">评论</span>
				</view>
				<view class="jiangqie-operation-item">
					<template>
						<image src="../../static/like.svg" mode="widthFix"></image>
						<span class="count-test">点赞</span>
					</template>
				</view>
				<view class="jiangqie-operation-item">
					<template>
						<image src="../../static/forward.svg" mode="widthFix"></image>
						<span class="count-test">转发</span>
					</template>
				</view>
			</view>
		</view>

		<!-- 发表评论 -->
		<view capture-catch:touchmove class="textareacontent" v-if="show_comment_submit">
			<form @submit="handlerCommentSubmit">
				<view class="textheaders">
					<view @tap.stop="handlerCancelClick" class="cancel">取消</view>
					<view @tap.stop="handlerCancelClick" class="publish">发布</view>
					<!-- <button form-type="submit" class="publish">发布</button> -->
				</view>
				<view class="textareaBox">
					<view class="textNum">{{comment_content.length}}/200</view>
					<textarea auto-height autoFocus="true" name="inputComment" @input="handlerContentInput"
						class="textareaInput" maxlength="200" :show-confirm-bar="false"
						:placeholder="placeholder"></textarea>
				</view>
			</form>
		</view>
		<view @tap.stop="handlerCancelClick" class="pagemake" v-if="show_comment_submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				comment_count_change: 0,
				comment_count: 0,
				comment_id: 0,
				show_comment_submit: false,
				post_like: 0,
				post_favorite: 0,
				comment_content: '',
				placeholder: "",
			}
		},
		onLoad(options) {},
		methods: {
			/**
			 * 评论 弹框
			 */
			handlerCommentClick(e) {
				this.comment_id = 0;
				this.show_comment_submit = true
			},
			handlerCancelClick(e) {
				this.show_comment_submit = false
			},
			/**
			 * 评论输入
			 */
			handlerContentInput(e) {
				this.comment_content = e.detail.value;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #fff;
	}

	.count-test {
		font-size: 20rpx;
		color: #333333;
		line-height: 33rpx;
		font-family: PingFangSC-Regular, PingFang SC;
	}

	.time {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 33rpx;
	}

	.p-count {
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 45rpx;
	}

	.count {
		color: #333333;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 45rpx;
		letter-spacing: 1rpx;
	}

	button {
		margin: 0;
		padding: 0;
		border-radius: 0;
		background-color: transparent;
	}

	.jiangqie-page-view {
		padding: 0rpx;
	}

	.jiangqie-page-head {
		position: sticky;
		overflow: hidden;
		border-bottom: 4rpx solid #F3F3F3;
	}

	.jiangqie-page-title {
		width: 100%;
	}

	.jiangqie-page-title text {
		display: block;
		line-height: 46rpx;
		padding: 50rpx 30rpx 0;
		color: #333;
		font-size: 36rpx;
		font-weight: 500;
	}

	.jiangqie-page-cmt {
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx 40rpx 0 0;
		background: #FFF;
		padding: 0 30rpx;
	}

	.jiangqie-page-cmt-info {
		float: right;
		font-size: 24rpx;
		font-weight: 200;
		color: #999;
	}

	.jiangqie-page-icon {
		height: 32rpx;
		width: 32rpx;
		margin-right: 10rpx;
		vertical-align: text-bottom;
		margin-bottom: 2rpx;
	}

	.jiangqie-page-cmt text {
		font-size: 24rpx;
		font-weight: 200;
		color: #999;
		display: inline-block;
		line-height: 80rpx;
		padding: 0rpx;
	}

	.jiangqie-page-cmt .category {
		margin-left: 20rpx;
	}

	.jiangqie-page-title-img {
		position: relative;
		width: 100%;
	}

	.jiangqie-page-body {
		padding: 30rpx 50rpx;
		background: #FFF;
		line-height: 2rem;
		font-weight: 300;
		font-size: 30rpx;
	}

	.jiangqie-page-body rich-text {
		line-height: 2rem;
		min-height: 2rem;
		display: block;
	}

	.wxParse-p {
		margin-top: 30rpx;
		font-size: 30rpx;
		color: #333333;
		line-height: 2rem;
		font-weight: 300;
	}

	.jiangqie-page-body-end {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 20rpx;
		color: #CCC;
		text-align: center
	}

	.jiangqie-page-body-tag {
		padding: 20rpx 0;
		overflow: hidden;
		border-bottom: 1rpx solid #EEE;
	}

	.jiangqie-page-body-tag text {
		float: left;
		padding: 4rpx 22rpx 6rpx 22rpx;
		vertical-align: middle;
		background: #F6F6F6;
		border-radius: 40rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		font-weight: 300;
		font-size: 22rpx;
		color: #666;
	}

	.jiangqie-page-body-banner {
		height: 160rpx;
		width: 690rpx;
		overflow: hidden;
		border-radius: 20rpx;
		box-shadow: 5rpx 5rpx 20rpx rgba(0, 0, 0, 0.2);
		margin: 20rpx 0;
	}

	.jiangqie-page-body-banner image {
		width: 100%;
	}

	.jiangqie-page-cmtbox {
		padding: 20rpx 30rpx 80rpx;
		border-top: 16rpx solid #F3F3F3;
		background: #FFF;
		clear: left;
	}

	.jiangqie-page-cmt-title {
		font-size: 32rpx;
		font-weight: 500;
		color: #333;
		padding: 10rpx 0 16rpx;
	}

	.jiangqie-page-cmt-title text {
		font-size: 20rpx;
		font-weight: 200;
		color: #999;
		padding: 6rpx 16rpx;
		border-radius: 30rpx;
		background: #F6F6F6;
		margin-left: 30rpx;
	}

	.jiangqie-page-cmt-content {
		padding: 16rpx 0;
		padding-left: 80rpx;
		border-top: 1rpx solid #EEE;
		overflow: hidden;
		margin-bottom: 60rpx;
	}

	.jiangqie-page-cmt-avatar {
		float: left;
		margin-left: -80rpx;
		height: 64rpx;
		width: 64rpx;
	}

	.jiangqie-page-cmt-avatar image {
		height: 64rpx;
		width: 64rpx;
		border-radius: 14rpx;
		overflow: hidden;
	}

	.jiangqie-page-cmt-head {
		font-size: 28rpx;
		font-weight: 500;
		color: #333;
	}

	.jiangqie-page-cmt-time {
		font-size: 20rpx;
		font-weight: 200;
		color: #888;
		margin-left: 20rpx;
	}

	.jiangqie-page-cmt-text {
		padding: 10rpx 0;
	}

	.jiangqie-page-cmt-text-world {
		font-size: 26rpx;
		font-weight: 300;
		color: #444;
	}

	.jiangqie-page-cmt-replay {
		margin-top: 20rpx;
		border-radius: 30rpx;
		padding: 0 20rpx;
		background: #F6F6F6;
	}

	.jiangqie-page-cmt-replay-box {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #EEE;
	}

	.jiangqie-page-cmt-replay-box:last-child {
		border-bottom: none;
	}

	.jiangqie-page-cmt-replay-nametime {
		padding-bottom: 10rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #333;
	}

	.jiangqie-page-cmt-replay-time {
		font-size: 20rpx;
		font-weight: 200;
		color: #BBB;
		margin-left: 20rpx;
	}

	.jiangqie-page-cmt-replay-world {
		font-size: 24rpx;
		font-weight: 300;
		color: #444;
	}

	.jiangqie-page-laud {
		overflow: hidden;
		border-bottom: 1rpx solid #EEE;
	}

	.jiangqie-page-laud-contrl {
		padding: 40rpx 20rpx 10rpx;
		overflow: hidden;
	}

	.jiangqie-page-laud-btn {
		font-size: 14px;
		text-align: center;
		float: left;
		margin-left: 40rpx;
		border-radius: 80rpx;
		padding: 5rpx 40rpx 7rpx;
		width: 180rpx;
		border: 1rpx solid #CCCCCC;
		line-height: 1.8rem;
	}

	.jiangqie-page-laud-btn image {
		height: 36rpx;
		width: 36rpx;
		margin-right: 12rpx;
		vertical-align: text-bottom;
	}

	.jiangqie-page-laud-btn text {
		font-size: 26rpx;
		font-weight: 200;
		color: #999;
	}

	.jiangqie-page-laud-list {
		padding: 20rpx 40rpx 10rpx;
	}

	.jiangqie-page-laud-list-title {
		text-align: center;
		padding: 20rpx;
		font-size: 22rpx;
		color: #BBB;
		font-weight: 200;
	}

	.jiangqie-page-laud-list-block {
		padding: 20rpx;
		overflow: hidden;
		text-align: center;
	}

	.jiangqie-page-laud-list-block image {
		height: 64rpx;
		width: 64rpx;
		margin-right: 24rpx;
		border-radius: 96rpx;
	}

	.jiangqie-operation {
		width: 100%;
		height: 150rpx;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		bottom: 0rpx;
		z-index: 99999;
		padding-bottom: env(safe-area-inset-bottom);
		background: #FFFFFF;
		box-shadow: 0 -2rpx 24rpx 0 rgba(153,153,153,0.0800);
		border-radius: 35rpx 35rpx 0 0;
	}

	.jiangqie-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.jiangqie-operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.jiangqie-operation-left {
		display: flex;
		align-items: center;
	}

	.jiangqie-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	.jiangqie-operation-item image {
		height: 42rpx;
		width: 42rpx;
	}

	.jiangqie-operation-item text {
		position: absolute;
		right: 10rpx;
		background: #FFF;
		font-size: 20rpx;
		top: -10rpx;
		padding: 4rpx;
	}

	.jiangqie-operation-right {
		height: 100rpx;
		box-sizing: border-box;
		padding-top: 0;
	}

	.jiangqie-badge-class {
		color: #5677fc !important;
		position: absolute;
		top: -6rpx;
		padding: 2px 4px !important;
	}

	.jiangqie-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.jiangqie-btn-comment {
		height: 64rpx;
		width: 84%;
		background: #F6F7F8;
		color: #999999;
		border-radius: 31rpx;
		font-size: 26rpx;
		line-height: 37px;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		box-sizing: border-box;
		padding-top: 0;
		margin-left: 30rpx;
	}

	.jiangqie-col-7 {
		width: 58.33333333%;
	}

	.jiangqie-col-5 {
		width: 41.66666667%;
	}

	.jiangqie-share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
		border: none;
	}

	.comment-action {
		margin-left: 20rpx;
	}


	/* 评论框 -- start --*/
	.textareacontent {
		position: fixed;
		top: 350rpx;
		width: 100%;
		height: 1200rpx;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		background-color: #fff;
		z-index: 99999;
	}

	.textareacontent .textheaders {
		width: 100%;
		height: 96rpx;
		border-bottom: 1rpx solid #eaeaea;
	}

	.textareacontent .textheaders .cancel {
		color: #333;
		font-size: 32rpx;
		line-height: 96rpx;
		margin-left: 32rpx;
		float: left;
	}

	.textareacontent .textheaders .publish {
		color: #3ec382;
		font-size: 32rpx;
		line-height: 96rpx;
		margin-right: 32rpx;
		float: right;
	}

	.textareaBox {
		height: 360rpx;
		position: relative;
	}

	.textNum {
		position: absolute;
		width: 686rpx;
		font-size: 26rpx;
		color: #999;
		margin-left: 32rpx;
		margin-right: 32rpx;
		top: 10rpx;
		text-align: right;
	}

	.textareacontent .textareaInput {
		width: 686rpx;
		padding: 32rpx 32rpx 42rpx 32rpx;
		height: 286rpx;
		font-size: 34rpx;
		line-height: 65rpx;
		z-index: 0;
	}

	.pagemake {
		background-color: #000;
		opacity: 0.8;
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		/* top: calc(88rpx + constant(safe-area-inset-top));
		top: calc(88rpx + env(safe-area-inset-top)); */
		/* #endif */
	}

	/* 评论框 -- end --*/
	.jiangqie-page-body {
		overflow: hidden;
	}

	button.jiangqie-page-laud-btn {
		box-sizing: content-box;
		line-height: inherit;
		line-height: 1.8rem;
	}

	.jiangqie-goback-btn {
		height: 96rpx;
		width: 96rpx;
		position: fixed;
		right: 40rpx;
		bottom: 200rpx;
	}

	.jiangqie-goback-btn button {
		background: none;
	}

	.jiangqie-goback-btn image {
		height: 96rpx;
		width: 96rpx;
	}

	.jiangqie-official-mod {
		padding: 10rpx 0;
	}

	.jiangqie-pre-next-view {
		display: flex;
		justify-content: space-between;
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #EEEEEE;
		color: #333333;

		.jiangqie-pre-view,
		.jiangqie-next-view {
			display: flex;
			align-items: center;
		}
	}
</style>
