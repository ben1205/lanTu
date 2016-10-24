<style scoped lang="stylus">
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
.app
	.top
		height 650px
		margin-top 70px
		background-image url(../assets/bg13.jpg)
		.w1100
			.con
				text-align center
				margin-top 60px
				margin-bottom 30px
				p
					color white
					margin-top 20px
			ul
				width 810px
				height 113px
				margin 0px auto
				li
					float left
					text-align center
					margin 0 35px
					width 200px
					span
						margin-top 20px
						display block
						color white
	.down
		.methods
			height 410px
			padding 100px 0
			li
				font-size 22px
				margin-top 20px
				img
					vertical-align middle
				span
					margin-left 30px
	.map
		position absolute
		top 400px
		z-index -1	
			
				
</style>

<template>
	<div class="app">
		<div class="top">
			<div class="w1100">
			<div class="title-list">
				<div class="img">
				<img src="../assets/t_c.png">
				</div>
				<h1>联系我们</h1>
			</div>
			<div class="con">
				<img src="../assets/wx.jpg">
				<p>打开微信，扫描二维码关注我们</p>
			</div>
			<ul>
				<li><img src="../assets/bg_email.png"><span>service@lantunet.com</span></li>
				<li><img src="../assets/bg_phone.png"><span>400-030-9411</span></li>
				<li><img src="../assets/bg_location.png"><span>成都市高新区环球中心E2</span></li>
			</ul>
		</div>
		</div>
		<div class="down">
			<div class="w1100">
				<div class="title-list">
				<div class="img">
				<img src="../assets/t_c.png">
				</div>
				<h1>乘车路线</h1>
			</div>
			<div class="methods">
				<ul>
					<li>
						<img src="../assets/ct_bus.png">
						<span>125路、171A路、171B路、240路到环球中心站下</span>
					</li>
					<li>
						<img src="../assets/ct_subway.png">
						<span>乘坐地铁一号线在锦城广场站下车，地铁A或B出口</span>
					</li>
					<li>
						<img src="../assets/ct_search.png">
						<span>搜索成都市高新区环球中心E2</span>
					</li>
				</ul>
			</div>
			</div>
		</div>
		<div class="map">
			<img src="../assets/ct_map.png">
		</div>
	</div>
</template>

<script>
	

</script>