<style scoped lang="stylus">
.butn
	width 46px
	height @width
	background-image url(../assets/a_d.png)
	position absolute
	left 50%
	bottom -23px
	
.body
	position relative
	top 0 
	transition top 5s
	.floor1
		position relative
		height 860px
		margin-top 70px
		background-image url(../assets/bg15.jpg)
		overflow hidden
		color white
		.flor1-top
			margin-top 0px
			height 755px
			width 100%
			position relative
			.title
				width 276px
				height 105px
				position absolute
				top 40%
				left 30%
				h2
					font-size 46px
					line-height 70px
				p
					text-align right
					line-height 35px
		.word
			position absolute
			bottom 0px
			width 100%
			height 106px
			background-color rgba(220, 220, 220, .5)
			text-align center
			p
				margin  45px 0
	.floor-bg1
		height 432px
		background-image url(../assets/b1.jpg)
		background-size cover
		background-attachment fixed
	.floor-bg2
		height 432px
		background-image url(../assets/b2.jpg)
		background-size cover
		background-attachment fixed
	.floor-bg3
		height 432px
		background-image url(../assets/b3.jpg)
		background-size cover
		background-attachment fixed
	.floor-bg4
		height 432px
		background-image url(../assets/b4.jpg)
		background-size cover
		background-attachment fixed
	.floor-bg5
		height 432px
		background-image url(../assets/b5.jpg)
		background-size cover
		background-attachment fixed
	
	.floor-box
		position relative
		height 602px
		width 100%
		background-color rgb(240, 242, 245)
		.w1100
			padding 126px 0
			height 350px
			.fb-title-lf
				float left
				width 287px
				padding 100px 189px 100px 0px
				height 153px
				color #0080BA
				h2
					font-size 40px
					line-height 70px
				p
					font-size 18px
					line-height 35px
			.fb-title-rg
				float left
				width 287px
				padding 100px 0px 100px 189px
				height 153px
				color #0080BA
				h2
					font-size 40px
					line-height 70px
				p
					font-size 18px
					line-height 35px
			.fb-img
				float left
				height 100%
				position relative
				.roll
					position absolute
					top -35px
					left 35px
					animation roll linear 10s infinite
				@keyframes roll
					0%
						transform rotate(0deg)
					100%
						transform rotate(360deg)
				.f3-img
					margin-left 80px
					margin-top -50px
				.f3-roll
					position absolute
					top 55px
					left 295px
					animation f3-roll linear 10s infinite
				@keyframes f3-roll
					0%
						transform rotate(0deg)
						transform-origin 41px 108px
					100%
						transform rotate(360deg)
						transform-origin 41px 108px
				.f4-roll
					position absolute
					top -2px
					left -5px
					animation roll linear 10s infinite	
				.tb-img
					.left-img
						float left
						width 324px
						height @width
						background url(../assets/m5.png) no-repeat
						padding-right 100px
					ul
						float left
						li
							margin 15px 0
							font-size 20px
							color #0080BA
							transition all 0.2s
							cursor pointer
							width 150px
							&.big
								font-size 24px
							span
								display inline-block
								margin-right 25px
								width 10px
								height 10px
								background-color #86D230
								border-radius 50%
								vertical-align middle
								margin-top -6px
	.floor-down
		height 602px
		width 100%
		background-color rgb(240, 242, 245)
		.w1100
			padding 120px 0
			color #0080BA
			.fd-title
				float left
				padding-right 114px
				h2
					font-size 40px
					line-height 70px
				p
					font-size 18px
					line-height 35px
				.logo
					ul
						li
							float left
							width 37px
							margin 10px
							span
								display block
								text-align center
								margin-bottom 10px
			.fd-img
				width 688px
				height 362px
				float right
					

</style>

<template>
	<div class="body">
		<div class="floor1">
		<div class="word">
				<p>梳理、提升、准备，我们为您提供一站式全生命周期的呵护</p>
			</div>
		<div class="flor1-top">
			<div class="title">
				<h2>兰途移动校园</h2>
				<p>——我们做的不仅仅是APP</p>
			</div>
			<div class="butn" @click = "gofor"></div>
		</div>
		</div>
		<div class="floor-bg1"></div>
		<div class="floor-box">
		<div class="w1100">
			<div class="fb-title-lf">
				<h2>兰途移动校园</h2>
				<p>国内最有粘性的定制化移动校园</p>
				<p>不只是APP，更是新的校园生态系统</p>
			</div>
			<div class="fb-img">
				<img src="../assets/m3.png">
				<div class="roll">
					<img src="../assets/ct3_out.png">
				</div>
			</div>
		</div>
			<div class="butn" @click = "goOn"></div>
		</div>
		<div class="floor-bg2"></div>
		<div class="floor-box">
			<div class="w1100">
				<div class="fb-img">
					<div class="tb-img">
						<div class="left-img" :style = "{'background-position-y': -324*currentIndex + 'px'}">
							
						</div>
						<ul>
							<li v-for="(item,index) of listArr" @click="handleClick(index)" v-bind:class="{big: index === currentIndex}"><span></span>{{item.title}}</li>
						</ul>
					</div>
				</div>
				<div class="fb-title-rg">
					<h2>九大应用群</h2>
					<p>60多个独具粘性的独立应用</p>
					<p>真正离不开的一站式校园服务</p>
				</div>
			</div>
			<div class="butn" @click = "goOn"></div>
		</div>
		<div class="floor-bg3"></div>
		<div class="floor-box">
			<div class="w1100">
				<div class="fb-title-lf">
					<h2>完善的生态系统</h2>
					<p>快速迭代，试错响应，师生参与</p>
					<p>以互联网方式来做服务软件</p>
				</div>
				<div class="fb-img">
					<img src="../assets/m7.png" class="f3-img">
					<div class="f3-roll">
						<img src="../assets/m7_c.png">
					</div>
				</div>
			</div>
			<div class="butn" @click = "goOn"></div>
		</div>
		<div class="floor-bg4"></div>
		<div class="floor-box">
			<div class="w1100">
				<div class="fb-img">
					<img src="../assets/m9_bg.png">
					<div class="f4-roll">
						<img src="../assets/m9.png">
					</div>
				</div>
				<div class="fb-title-rg">
					<h2>九大应用群</h2>
					<p>60多个独具粘性的独立应用</p>
					<p>真正离不开的一站式校园服务</p>
				</div>
			</div>
			<div class="butn" @click = "goOn"></div>
		</div>
		<div class="floor-bg5"></div>
		<div class="floor-down">
			<div class="w1100">
				<div class="fd-title">
					<h2>全平台</h2>
					<p>一次建设，全面上线</p>
					<div class="logo">
						<ul>
							<li><span>PC</span><img src="../assets/m11_win.png"></li>
							<li><span>苹果</span><img src="../assets/m11_ios.png"></li>
							<li><span>安卓</span><img src="../assets/m11_an.png"></li>
							<li><span>微信</span><img src="../assets/m11_we.png"></li>
						</ul>
					</div>
				</div>
				<div class="fd-img">
					<img src="../assets/m11.png">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	let t;
	const timer = callback =>{
		t = setInterval(() => {
			callback();
		}, 3000)
	}
	export default{
		methods : {
			gofor : function(){
				var i = 0;
				var timer = setInterval(function(){
					if(i < 1160){
						i = i + 10;
						document.body.scrollTop = i;
					}else{
						clearInterval(timer);
					}
				},10);
			},
			goOn : function(){
				var i = 0,
					_this = document.body.scrollTop;
				var timer = setInterval(function(){
					if(i < 1020){
						i = i + 10;
						document.body.scrollTop = _this + i;
					}else{
						clearInterval(timer);
					}
				},10);

			},
			handleClick(index){
				clearTimeout(t);
				this.currentIndex = index;
				timer(() =>{
					let currentIndex = this.currentIndex;
					this.currentIndex = currentIndex > this.len - 1 ? 0 : currentIndex + 1;
				});
			}
		},
		data(){
			return{
				listArr : [
					{
						title : "基础服务"
					},
					{
						title : "迎新系统"
					},
					{
						title : "毕业就业"
					},
					{
						title : "教学教务"
					},
					{
						title : "科研教务"
					},
					{
						title : "智慧物联"
					},
					{
						title : "生活服务"
					},
					{
						title : "家长校友"
					},
					{
						title : "校园社区"
					},
				],
				currentIndex : 0
			}
		},
		computed : {
			len(){
				return this.listArr.length;
			}
		},
		mounted(){
			timer(() =>{
					let currentIndex = this.currentIndex;
					this.currentIndex = currentIndex > this.len - 2 ? 0 : currentIndex + 1;
				});
		}
	}
</script>