<style scoped lang="stylus">
.app
	.top
		height 810px
		background url(../assets/bg.jpg) no-repeat center top
		margin-top 70px
		overflow hidden
		.box
			margin 350px 0 0 100px
			p
				&:nth-of-type(2)
					margin 20px 0 10px
	.content
		.w1100
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
			.introduce
				padding-top 100px
				padding-left 100px
				h2
					font-size 18px
					font-weight normal
					margin-bottom 50px
				p
					width 860px
					height 90px
					line-height 32px
					color rgb(150, 163, 192)
				img
					margin-left 176px
					margin-top 55px					
				
</style>

<template>
	<div class="app">
		<div class="top">
			<div class="box">
				<p><img src="../assets/b_d1.png"></p>
				<p><img src="../assets/b_d2.png"></p>
				<p><img src="../assets/b_d3.png"></p>
			</div>
		</div>
		<div class="content">
			<div class="w1100">
				<div class="title-list">
					<div class="img">
					<img src="../assets/t_c.png">
					</div>
					<h1>经典案例</h1>
				</div>
				<div class="introduce" v-for="item of exampleArr">
					<h2>{{item.name}}</h2>
					<p>{{item.word}}</p>
					<img :src="item.src">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				exampleArr : [
					{
						name : "北京交通大学",
						word : "交大移动门户目前是我们建设最全的案例，包括50多个涉及工作、学习、生活的应用模块，每天使用人次上万。有完善的数据中心和陆续在建的各系统接口，并有多位在校生协助开发和完善，具有多套移动界面和子系统，还有物联应用部署。老师学生互动积极，反馈踊跃，对信息中心评价极高。",
						src : require("../assets/ct1.jpg")
					},
					{
						name : "中央财经大学",
						word : "中央财经大学作为财经类著名院校，我们为其搭建了全面的校园服务功能。团 队根据学校计划，在极短时间内完成了APP上线，同时也满足了较高的信息安全需求。此外，我们还为中财专门策划上线运营活动，并在后期的维护运营中增强了师生与移动门户的使用黏性，保持了中财在同类学校信息化建设中的前沿地位。",
						src : require("../assets/ct2.jpg")
					},
					{
						name : "中国戏曲学院",
						word : "中国戏曲学院作为艺术教学类著名院校，为师生策划了高度定制的APP服务，尤其是在场馆预定、视频类应用上做出了多种创新，发挥了学校的专业优势和资源优势，在弘扬戏曲文化、培养国粹人才方面做出了新的尝试。 ",
						src : require("../assets/ct3.jpg")
					}
				]
			}
		}
	}

</script>