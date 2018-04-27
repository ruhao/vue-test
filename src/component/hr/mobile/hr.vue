<template>
	<div>
		<div><img class="mobileheaderbg" src="../../../../images/join-ban.jpg"></div>
		<div class="mobilewraperwidth">
			<div class="mobilehrroute ">
				<router-link to='/enhr/enstrategy1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/enhr/entrain1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/enhr/enadvertises1'>
				<div class="heroutebox1 mobileimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src="../../../../images/join3.jpg" id="hrimg5"/>
					<img src="../../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/enhr'">
			<div>
				<Nav navtitle="Human Resources"></Nav>
			</div>
			<div class="mobilebottom">
			<p class="mobilestp">In LaoWaiCang we have a dream, and we need the most professional talents to realize it together.Choosing our team according the characteristics of the import food industry is the root of our success, and talent is our life. We invest in our business not only our resources, but also knowledge, culture and emotions. We put all our humanity in the business of import food.</p>
			<p class="mobilestp">Our idea is to attract the best talent with to our common ideal, giving them the greatest trust. So we are looking for partners, not employees; partners that should have first-class quality, talent and mind. This is our basic logic.</p>
			<p class="mobilestp">Ideals and trust are the foundations of our team; only this way we can cherish this kind of trust, and therefore can not tolerate any blemish. In this way, we can ensure the purity of our team and the blooming of our company.</p>
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
