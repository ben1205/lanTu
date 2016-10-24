<style scoped lang="stylus">
.current
	z-index 20
.app
	.example
		height 920px
		background-image url(../assets/bg.png)
		.title-list
			background-image url(../assets/line.png)
			background-repeat no-repeat
			background-position bottom center
			width 520px
			height 80px
			margin 0 auto
			padding 30px 0px
			.img
				line-height 40px
				width 100%
				height 40px
				img
					display block
					margin 0 auto
			h1
				text-align center
				font-size 20px
				font-style normal
				line-height 40px
		.mob-banner
			width 100%
			height 580px
			padding 80px 0
			position relative
			overflow hidden
			.mob-left
				width 48px
				height 48px
				display block
				position absolute
				left 5%
				top 297px
				background-image url(../assets/t_l.png)
			.mob-right
				width 48px
				height 48px
				display block
				position absolute
				right 5%
				top 297px
				background-image url(../assets/t_r.png)
			.circle
				position absolute
				bottom 0px
				left 50%
				margin-left -70px
				li
					float left
					width 20px
					height @width
					margin-right 10px
					border-radius 50%
					&:nth-of-type(1)
					&:nth-of-type(5)
						background url(../assets/c_dot1.png) no-repeat center center
					&:nth-of-type(2)
					&:nth-of-type(4)
						background url(../assets/c_dot2.png) no-repeat center center
					&:nth-of-type(3)
						background url(../assets/c_dot3.png) no-repeat center center
			.mobile
				width 4500px
				margin-top 50px
				li
					float left
					margin 0px 30px
					img
						width 240px
						height 393px
	.partner
		height 500px
		width 100%
		.title-list
			background-image url(../assets/line.png)
			background-repeat no-repeat
			background-position bottom center
			width 520px
			height 80px
			margin 0 auto
			padding 30px 0px
			.img
				line-height 40px
				width 100%
				height 40px
				img
					display block
					margin 0 auto
			h1
				text-align center
				font-size 20px
				font-style normal
				line-height 40px
		.partner-num
			width 900px
			margin 100px auto 0px
			div
				float left
				margin 0px 58px
</style>

<template>
	<div class="app">
		<banner :data="arrBanner"></banner>
		<div class="example">
			<div class="title-list">
				<div class="img">
				<img src="../assets/t_c.png">
				</div>
				<h1>经典案例</h1>
			</div>
			<div class="mob-banner">
				<a class="mob-left"></a>
				<a class="mob-right"></a>
				<ul class="mobile">
					<li><img src="../assets/i1.png"></li>
					<li><img src="../assets/i5.png"></li>
					<li><img src="../assets/i2.png"></li>
					<li><img src="../assets/i4.png"></li>
					<li><img src="../assets/i3.png"></li>
					<li><img src="../assets/i1.png"></li>
					<li><img src="../assets/i5.png"></li>
					<li><img src="../assets/i2.png"></li>
					<li><img src="../assets/i4.png"></li>
					<li><img src="../assets/i3.png"></li>
					<li><img src="../assets/i1.png"></li>
					<li><img src="../assets/i5.png"></li>
					<li><img src="../assets/i2.png"></li>
					<li><img src="../assets/i4.png"></li>
					<li><img src="../assets/i3.png"></li>
				</ul>
				<ul class="circle">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
		<div class="partner">
			<div class="title-list">
				<div class="img">
				<img src="../assets/rd.png">
				</div>
				<h1>合作伙伴</h1>
			</div>
			<div class="partner-num">
				<div><a><img src="../assets/rd1.jpg"></a></div>
				<div><a><img src="../assets/rd2.jpg"></a></div>
				<div><a><img src="../assets/rd3.jpg"></a></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from "../components/Banner";
	export default{
		data(){
			return{
				arrBanner : [
					{
						name : "图片1",
						src : require("../assets/bg3.png"),
						left_bg : require("../assets/ih3.png"),
						right_bg : require("../assets/b3_d3.png")
					},
					{
						name : "图片2",
						src : require("../assets/bg1.jpg"),
						left_bg : require("../assets/ih1.png"),
						right_bg : require("../assets/bh2.png")
					},
					{
						name : "图片3",
						src : require("../assets/bg2.jpg"),
						left_bg : require("../assets/ih2.png"),
						right_bg : require("../assets/bh3.png")
					}
				]
			}
		},
		components : {
			Banner
		}
	}
</script>