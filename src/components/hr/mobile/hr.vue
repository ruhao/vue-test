<template>
	<div>
		<div><img class="mobileheaderbg" src="../../../../images/join-ban.jpg"></div>
		<div class="mobilewraperwidth">
			<div class="mobilehrroute ">
				<router-link to='/hr/strategy1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/hr/train1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/hr/advertises1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src="../../../../images/join3.jpg" id="hrimg5"/>
					<img src="../../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/hr'">
			<div>
				<Nav navtitle="人力资源"></Nav>
			</div>
			<div class="mobilebottom">
			<p class="mobilestp">我们的团队拥有广泛的专业和文化背景，我们对中国和其他海外市场的商业环境的深刻理解，是对国际商业舞台上成功运行的关键。同时，我们也认识到人才对集团发展的重要性，因此，我们一直致力于为人才创造最佳的工作和发展平台。</p>
			<p class="mobilestp">通过多年的实践和发展，我们团队的骨干更深刻的理解是最大的信心，韩胜集团的发展是稳定的集团的长期基础。品行、能力、健康是我们的选择标准，“激情、使命、责任、坚持、锲而不舍”是我们的团队精神，我们致力于创造一个愿景和崇高境界，团队精神，身心健康，和英国的跨国好团队的特点。</p>
			</div>
		</div>
		<div v-else>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../../common/footer.vue'
// 模块导入
import Nav from '../../common/nav.vue'
export default {
  methods: {
    imgchange () {
      document.getElementById('hrimg3').style.left = -160 + 'px'
      document.getElementById('hrimg3').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg4').style.left = 0 + 'px'
      document.getElementById('hrimg4').setAttribute('class', 'imgchangl')
    },
    imgchange1 () {
      document.getElementById('hrimg3').style.left = 0 + 'px'
      document.getElementById('hrimg3').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg4').style.left = 160 + 'px'
      document.getElementById('hrimg4').setAttribute('class', 'imgchangq')
    },
    imgchange2 () {
      document.getElementById('hrimg1').style.left = -160 + 'px'
      document.getElementById('hrimg1').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg2').style.left = 0 + 'px'
      document.getElementById('hrimg2').setAttribute('class', 'imgchangl')
    },
    imgchange3 () {
      document.getElementById('hrimg1').style.left = 0 + 'px'
      document.getElementById('hrimg1').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg2').style.left = 160 + 'px'
      document.getElementById('hrimg2').setAttribute('class', 'imgchangq')
    },
    imgchange4 () {
      document.getElementById('hrimg5').style.left = -160 + 'px'
      document.getElementById('hrimg5').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg6').style.left = 0 + 'px'
      document.getElementById('hrimg6').setAttribute('class', 'imgchangl')
    },
    imgchange5 () {
      document.getElementById('hrimg5').style.left = 0 + 'px'
      document.getElementById('hrimg5').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg6').style.left = 160 + 'px'
      document.getElementById('hrimg6').setAttribute('class', 'imgchangq')
    }
  },
  components: {
    Foot,
    Nav
  },
  created () {}
}
</script>

<style scoped>
.mobileheaderbg {
  width: 100%;
}
.mobilewraperwidth {
  width: 100%;
}
.mobilehrroute {
  text-align: center;
}
.heroutebox1 {
  display: inline-block;
  position: relative;
  height: 160px;
  width: 160px;
  margin: 50px;
  cursor: pointer;
  z-index: 11;
  overflow: hidden;
}
.heroutebox1 img:nth-of-type(1) {
  position: absolute;
  top: 0;
  left: 0;
}
.heroutebox1 img:nth-of-type(2) {
  position: absolute;
  top: 0px;
  left: 160px;
}
.heroutebox1 .imgchangq {
  opacity: 0;
}
.heroutebox1 .imgchangl {
  opacity: 1;
}
.mobilebottom {
  width: 100%;
}
.mobilestp {
  margin-top: 15px;
  font-size: 10px;
  color: #666666;
  line-height: 16px;
  padding: 0 15px;
  text-indent: 2em;
}
.mobileimg{
  width: 22%;
  margin: 5px 0 0;
  margin-right: 5px;
  max-height: 85px;
}
.mobileimg img{
  width: 100%;
}
</style>
