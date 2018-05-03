<template>
	<div id="app">
		<header class="navs">
			<i class="iconfont icon-menu" @click.stop="sidebarshow"></i>
			<div class="navs-mid">
				<router-link tag="i" to="/">
					<i class="iconfont icon-sheetRecommend"></i>
				</router-link>
				<router-link tag="i" to="/find">
					<i class="iconfont icon-Recommendmusic"></i>
				</router-link>
				<router-link tag="i" to="/my">
					<i class="iconfont icon-my"></i>
				</router-link>
			</div>
			<i class="iconfont icon-seach"></i>
		</header>
		<sidebar :shows="isshow" @hide="sidebarhide"></sidebar>
		<router-view/>
	</div>
</template>

<script>
	import sidebar from '@/components/sidebar.vue'
	export default {
		name: 'app',
		components: {
			sidebar
		},
		data() {
			return {
				isshow: false
			}
		},
		methods: {
			sidebarshow: function(event) {
				this.isshow = true;
			},
			sidebarhide(type) {
				this.isshow = type
			}
		}
	}
</script>

<style lang="less">
	body {
		margin: 0;
		padding: 0;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 14px;
		color: #2c3e50;
	}
	
	.iconfont {
		margin-right: 4px;
	}
	
	.navs {
		height: 50px;
		background-color: #c62f2f;
		display: flex;
		align-items: center;
		justify-content: space-between;
		>i {
			color: #fff;
			font-size: 26px;
			padding: 15px;
		}
		>div {
			i {
				font-size: 24px;
				margin: 0 5px;
				color: #ddd;
			}
			>i.router-link-active i {
				color: #fff;
			}
		}
	}
</style>