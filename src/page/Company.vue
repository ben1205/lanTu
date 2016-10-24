<style scoped lang="stylus">
.app
	.top
		position relative
		height 650px
		margin-top 70px
		background-image url(../assets/bg13.jpg)
		.top-new1
			position absolute
			top 50%
			left 10%
		.top-new2
			width 899px
			height 438px
			margin 0 auto 
			padding-top 210px
		.top-new3
			position absolute
			top 40%
			right 10%
		.top-new4
			position absolute
			bottom 10%
			right 4%
	.down
		.w1100
			overflow hidden
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
			.down-cont
				width 850px
				margin 0 auto
				.ct-all
					overflow hidden
					padding 25px 0
					img
						float left
						width 192px
						height 118px
					.ct-word
						width 600px
						float left
						margin-left 50px
						a
							display block
							font-size 20px
						time
							display block
							margin 10px 0
							color #969696
							font-weight bold
							
						p
							line-height 30px
							color #969696
			.page-nav
				width 850px
				height 22px
				margin 20px auto
				text-align right
				a
					background-color black
					color white
					font-size 12px
					float right
					line-height 22px
					padding 0 10px
					margin-right 5px
					border-radius 5px
					cursor pointer
			
</style>

<template>
	<div class="app">
		<div class="top">
			<div class="top-new1"><img src="../assets/bg_p1.png"></div>
			<div class="top-new2"><img src="../assets/bg_p2.png"></div>
			<div class="top-new3"><img src="../assets/bg_p3.png"></div>
			<div class="top-new4"><img src="../assets/bg_p4.png"></div>
		</div>
		<div class="down">
			<div class="w1100">
				<div class="title-list">
					<div class="img">
					<img src="../assets/t_c.png">
					</div>
					<h1>公司动态</h1>
				</div>
				<div class="down-cont">
					<div class="ct-all" v-for="item of ctArr">
						<img :src="item.src">
						<div class="ct-word">
							<a>{{item.title}}</a>
							<time>{{item.time}}</time>
							<p>{{item.word}}</p>
						</div>
					</div>
				</div>
				<div class="page-nav">
					<a @click = "end">末页</a>
					<a>下一页</a>
					<a @click = "two">2</a>
					<a @click = "one">1</a>
					<a>上一页</a>
					<a>首页</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				ctArr : [
					{
						src : require("../assets/ct8.png"),
						title : "兰途科技，运用企业号提供智慧校园解决方案",
						time : "2016-08-22",
						word : "据了解，由兰途科技筹建的北建移动门户微信企业号2.5.9已于近日正式上线。该企业号是基于智慧校园推出的微信第三方应用。根据学生反映，自北建移动门户上线以来，全校部分师生已经关注并绑定了此微信企业号..."
					},
					{
						src : require("../assets/ct6.png"),
						title : "兰途出品 | 中财移动门户上线！",
						time : "2016-08-22",
						word : "中财掌上校园正式开学了！兰途科技承建的中央财经大学官方移动门户正式上线，现已登陆苹果、安卓各大应用市场，在校师生可第一时间前往下载使用..."
					},
					{
						src : require("../assets/ct7.png"),
						title : "兰途科技出品：中青政“移动校园”上线",
						time : "2016-08-22",
						word : "昨日，中国青年政治学院“移动校园”正式上线，成为中青政“智慧校园”发展又一里程碑。同时，兰途科技“移动智慧校园”家族正式增添一名新成员..."
					},
					{
						src : require("../assets/ct14.jpg"),
						title : "兰途科技，移动校园门户的黑马",
						time : "2016-08-22",
						word : "在15年三月十二届全国人大三次会议上，李克强总理在政府工作报告中首次提出“互联网+”行动计划。7月，经李克强总理签批，国务院日前印发《关于积极推进..."
					},
					{
						src : require("../assets/ct16.jpg"),
						title : "兰途科技:搭建互联网+校园移动门户平台",
						time : "2016-08-22",
						word : "2016年1月8日，河南省教育科研网2016年工作会议在新乡医学院成功召开。本次会议以“‘互联网+’时代网络中心的定位与发展”为主题，由河南省教育科研网主办..."
					},
					{
						src : require("../assets/ct17.jpg"),
						title : "我叫兰途科技，这是我的年终报告",
						time : "2016-08-22",
						word : "伴随着岁月急匆匆的步履，2015年已进入倒计时。回首这一年，发生了好多大事儿，抗战70周年93大阅兵、北京申冬奥成功、世界那么大我想去看看、屠呦呦..."
					},
					{
						src : require("../assets/ct18.jpg"),
						title : "兰途科技参加中国高教学会教育信息化分会理事会议",
						time : "2016-08-22",
						word : "11月20日，中国高等教育学会教育信息化分会理事会议与江苏省教育信息化10周年年会在江苏南京召开。会上，兰途科技随新开普电子作为理事单位代表，与江苏省..."
					}
				]
			}
		},
		methods : {
			end:function(){
				
			},
			one : function(){
			
			},
			two : function(){
					
			}
		}
	}
</script>