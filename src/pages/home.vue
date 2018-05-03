<template>
	<div class="mymusic">
		<div class="typelist" v-for="(item,index) in typelist">
			<i :class="[item.iconcname,item.cicon]"></i>
			<div class="detail">
				<span>{{item.title}}</span>
				<span>({{item.num}})</span>
			</div>
			<i :class="[item.iconcname,item.disc]"></i>
		</div>
		<div class="musicsheet">
			<i class="iconfont icon-youjiantou"></i>
			<div class="detail">
				我创建的歌单
			</div>
			<i class="iconfont icon-shezhi"></i>
		</div>
		<div class="musicsheet">
			<i class="iconfont icon-youjiantou"></i>
			<div class="detail">
				我收藏的歌单
			</div>
			<i class="iconfont icon-shezhi"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mymusic",
		data(){
			return {
				typelist:[{
					iconcname:"iconfont",
					cicon:"icon-sheetRecommend",
					title:"我的音乐",
					num:28,
					disc:"icon-sound"
				},{
					iconcname:"iconfont",
					cicon:"icon-play",
					title:"最近播放",
					num:18,
					disc:""
				},{
					iconcname:"iconfont",
					cicon:"icon-play",
					title:"我的电台",
					num:1,
					disc:""
				},{
					iconcname:"iconfont",
					cicon:"icon-play",
					title:"我的收藏",
					num:1,
					disc:""
				}]
			}
		}
	}
</script>

<style lang="less">
	.mymusic {
		.typelist {
			height: 50px;
			position: relative;
			i {
				position: absolute;
				top: 50%;
				transform:translateY(-50%);
				color: #c62f2f;
				&:first-child {
					font-size: 24px;
					left: 15px;
					
				}
				&:last-child {
					right:15px;
				}
			}
			.detail {
				height: 100%;
				line-height: 50px;
				margin-left: 50px;
				border-bottom: 1px solid #eee;
			}
		}
		.musicsheet {
			position: relative;
			height: 29px;
			background-color: #e1e1e1;
			i {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				&:first-child {
					left: 10px;
					transition: all .5s;
					
				}
				&:last-child {
					right:15px;
				}
			}
			.detail {
				height: 100%;
				line-height: 29px;
				margin-left: 35px;
			}
		}
	}
</style>