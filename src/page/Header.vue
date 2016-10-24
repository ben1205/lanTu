<style scoped lang="stylus">
.green
	color green
.header
	position fixed
	z-index 20
	top 0
	height 64px
	width 100%
	background-color rgb(233, 235, 238)
	box-shadow 0px 2px 5px rgba(200, 200, 200, .8)
	.w1100
		img
			margin-top 14px
			margin-left 14px
		.Nav
			width 810px
			float right
			div
				float left
				width 60px
				font-size 15px
				margin 30px 35px 0px
				&:hover
					@extend .green
					
</style>

<template>
	<div class="header">
		<div class="w1100">
			<img src="../assets/logo.png">
			<div class="Nav">
				<div v-for="item of navArr"><router-link :to="item.src" >{{item.name}}</router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				navArr : [
					{
						name : "首页",
						src : "/"
					},
					{
						name : "移动校园",
						src : "/school"
					},
					{
						name : "经典案例",
						src : "/example"
					},
					{
						name : "公司动态",
						src : "/company"
					},
					{
						name : "招贤纳士",
						src : "/people"
					},
					{
						name : "联系我们",
						src : "/call"
					}
				]
			}
		}
	}
</script>