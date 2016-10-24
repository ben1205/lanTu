<style scoped lang="stylus">
	.banner
		position relative
		height 850px
		text-align center
		margin-top 70px
		a
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			&.current
				z-index 1
			img
				&.show
					display none
				&.big-img
					position absolute
					bottom 0px
					right 20px
					width 960px
					height 750px
				&.sm-img
					position absolute
					left 108px
					top 505px
					width 300px
					height 128px
		em
			display inline-block
			position relative
			top 820px
			margin 0 5px
			width 15px
			height 15px
			background url(../assets/b_dot.png) no-repeat center center
			font-size 0
			vertical-align top
			z-index 6
			&.current
				background url(../assets/b_dot_s.png) no-repeat center center
</style>
<template>
	<div class="banner">
		<a v-for="(item,index) of data" :title="item.name" :style="{'background-image':'url(' + item.src + ')'}" v-bind:class="{current:index === currentIndex}">	
			<img :src="item.left_bg" v-bind:class="{show:index !== currentIndex}" class="big-img" />
			<img :src="item.right_bg" v-bind:class="{show:index !== currentIndex}" class="sm-img"/>
		</a>
		<em v-for="index of len" @click="handleClick(index - 1)" v-bind:class="{current:(index - 1) === currentIndex}"></em>
	</div>
</template>
<script>
	let t;
	const timer = callback =>{
		t = setInterval(() => {
			callback();
		}, 3000)
	}
	export default {
		props : ["data"],
		data(){
			return{
				currentIndex : 0
			};
		},
		methods : {
			handleClick(index){
				clearTimeout(t);
				this.currentIndex = index;
				timer(() =>{
					let currentIndex = this.currentIndex;
					this.currentIndex = currentIndex > this.len - 2 ? 0 : currentIndex + 1;
				});
			}
		},
		computed : {
			len(){
				return this.data.length;
			}
		},
		mounted(){
			timer(() =>{
					let currentIndex = this.currentIndex;
					this.currentIndex = currentIndex > this.len - 2 ? 0 : currentIndex + 1;
				});
		}
	};
</script>