<style scoped lang="stylus">
.people
	.top
		max-height 650px
		margin-top 70px
		background-image url(../assets/bg12.jpg)
		.img
			background url(../assets/bg_p.png) no-repeat bottom center
			max-width 1200px
			margin 0 auto
			height 650px
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
			.box1
				width 520px
				margin 5px auto
				.bx-in
					h2
						padding 25px 0
						color #2f96c5
					li
						line-height 30px
						color #969696
			.good
				width 660px
				margin 30px auto
				p
					line-height 40px
					color #93CA21
					text-align center
			.act
				width 660px
				margin 30px auto
				span
					margin 0 20px
					color #628816
				
</style>

<template>
<div class="people">
	<div class="top">
		<div class="img"></div>
	</div>
	<div class="content">
		<div class="w1100">
			<div class="title-list">
				<div class="img">
				<img src="../assets/t_c.png">
				</div>
				<h1>招贤纳士</h1>
			</div>
			<div class="box1">
				<div class="bx-in">
					<h2>HTML5移动app前端工程师(成都)</h2>
					<ul>
						<li v-for="item of liArr">{{item}}</li>
					</ul>
				</div>
				<div class="bx-in">
					<h2>JAVA软件工程师（北京）</h2>
					<ul>
						<li v-for="item of liArr">{{item}}</li>
					</ul>
				</div>
			</div>
			<div class="good">
				<p>我们能为您提供：</p>
				<p>六险一金，全额公积金呢！</p>
				<p>项目提成、绩效奖金、年终奖金、优秀员工奖金拿到手软~</p>
				<p>每月额外餐补、节假日慰问、旅游基金等等等</p>
				<p>还有超长年假、免费体检、团队建设...各种有哦~！</p>
				<p>是否羡慕别人家的公司？来看看你即将进入的公司吧，不要再感慨别人家的公司了~</p>
			</div>
			<div class="act">
				<span>HR:刘女士</span>
				<span>招聘电话：028-86307598</span>
				<span>招聘邮箱：liuxt@lantunet.com</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				liArr : [
					"本职位主要进行HTML5移动应用的前端代码编写及界面设计。",
					"1. 学历本科以上。计算机相关专业毕业优先。",
					"2. 精通JAVASCRIPT，熟悉JS面向对象编程，熟悉Jquery或Angular优先。",
					"3. 精通html dom 相关技术，精通css样式表。有Photoshop使用经验优先。",
					"4. 熟悉Phonegap/Cordova优先。",
					"5. 2年以上全职前端研发经验，有大型网站开发经验或移动应用开发经验者优先。",
					"6. 有一定的美术鉴赏能力，一定的文字功底，对优秀产品有广泛的了解，有设计优秀产品的野心。",
					"7. 有意愿为学校师生服务、有热情为大学校园提供最优质最有创意的产品，计算机相关专业毕业优先。",
					"8. 具有良好的代码习惯及团队合作精神。谦虚好学，有责任心。"
				]
			}
		}
	}
</script>