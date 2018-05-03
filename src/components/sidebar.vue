<template>
	<div class="sidebar" v-show="shows">
		<div class="sidebar-mask" @click="ishide(false,$event)"></div>
		<div class="sidebar-content">
			<div class="sidebar-userinfo">
				<div class="user-info-detail">
					<img src="http://www.daiwei.org/static/images/userlogo.jpg" />
					<div class="user-info-content">
						<span class="nick">Cindy</span>
						<img class="isvip" src="../assets/img/isVIP.png" />
						<span class="progress">Lv.9</span>
					</div>
					<span class="sign"><i class="iconfont icon-jifen"></i>签到</span>
				</div>
			</div>
			<div class="sidebar-setting">
				<div class="sidelist">
					<i class="iconfont icon-notice"></i>
					<span class="title">我的消息</span>
					<span class="disc">111</span>
				</div>
				<div class="sidelist">
					<i class="iconfont icon-notice"></i>
					<span class="title">我的消息</span>
					<span class="disc">111</span>
				</div>
				<div class="sidelist">
					<i class="iconfont icon-notice"></i>
					<span class="title">我的消息</span>
					<span class="disc">111</span>
				</div>
				<span class="split"></span>
				<div class="sidelist">
					<i class="iconfont icon-notice"></i>
					<span class="title">我的消息</span>
					<span class="disc"></span>
				</div>
				<div class="sidelist">
					<i class="iconfont icon-notice"></i>
					<span class="title">我的消息</span>
					<span class="disc"></span>
				</div>
				<span class="split"></span>
				<div class="sidelist">
					<i class="iconfont icon-notice"></i>
					<span class="title">我的消息</span>
					<span class="disc"></span>
				</div>
				<div class="sidelist">
					<i class="iconfont icon-notice"></i>
					<span class="title">我的消息</span>
					<span class="disc"></span>
				</div>
			</div>
			<div class="sidebar-footer">
				<div class="nightmode"><i class="iconfont icon-weather"></i>夜间模式</div>
				<div class="setting"><i class="iconfont icon-shezhi"></i>设置</div>
				<div class="exit"><i class="iconfont icon-tuichu"></i>退出</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "sidebar",
		props: {
			shows: Boolean
		},
		data() {
			return {
				ishided: ''
			}
		},
		methods: {
			ishide(type, event) {
				this.ishided = type
				this.$emit('hide', type);
			}
		}
	}
</script>

<style lang="less">
	.sidebar {
		.sidebar-mask {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 10;
			opacity: 1;
			background-color: rgba(0, 0, 0, .5);
		}
		.sidebar-content {
			position: fixed;
			top: 0;
			left: 0;
			width: 286px;
			height: 100%;
			z-index: 11;
			background-color: #fff;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			padding-bottom: 40px;
			overflow-y: scroll;
			.sidebar-userinfo {
				height: 168px;
				background-color: #ddd;
				background-image: url(http://www.daiwei.org/index/images/img/indeximg.jpg);
				-webkit-background-size: cover;
				background-size: cover;
				vertical-align: middle;
				.user-info-detail {
					position: relative;
					-webkit-box-sizing: border-box;
					-moz-box-sizing: border-box;
					box-sizing: border-box;
					height: 100%;
					width: 100%;
					padding: 50px 15px 15px;
					>img {
						position: absolute;
						left: 15px;
						bottom: 50px;
						width: 56px;
						height: 56px;
						border-radius: 50%;
						margin-top: 10px;
					}
					.user-info-content {
						position: absolute;
						left: 15px;
						bottom: 20px;
						font-size: 16px;
						span {
							display: inline-block;
							vertical-align: middle;
							max-width: 130px;
							color: #fff;
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
					}
					.isvip {
						width: 14px;
						height: 14px;
						vertical-align: middle;
					}
					.progress,
					.sign {
						border: 1px solid #fff;
						font-size: 12px;
					}
					.progress {
						border-radius: 8px;
						padding: 1px 4px;
					}
					.sign {
						border-radius: 14px;
						position: absolute;
						bottom: 15px;
						right: 15px;
						color: #fff;
						padding: 4px 8px;
						vertical-align: top;
					}
				}
			}
		}
		.sidelist {
			padding: 0 15px;
			height: 40px;
			line-height: 40px;
			i {
				display: inline-block;
				color: #9a9a9a;
			}
			.title {
				display: inline-block;
			}
			.disc {
				display: inline-block;
				float: right;
				font-size: 12px;
				color: #ccc;
			}
		}
		.split {
			display: block;
			background: rgb(240, 240, 240);
			height: 5px;
			border-color: rgb(238, 238, 238);
		}
		.sidebar-footer {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 40px;
			width: 286px;
			box-sizing: border-box;
			border-top: 1px solid #eee;
			background-color: #fff;
			>div {
				display: inline-block;
				line-height: 40px;
				text-align: center;
			}
			.nightmode {
				width: 36%;
			}
			.setting {
				display: inline-block;
				width: 30%;
			}
			.exit {
				display: inline-block;
				width: 30%;
			}
		}
	}
</style>