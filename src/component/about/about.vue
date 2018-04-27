<template>
<div>
	<div v-if="width<1500&&width>640">
		<div><img class="headerbg" src="../../../images/about-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/about/culture'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../images/about1.jpg" id="hrimg1" />
						<img src="../../../images/about1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/about/footprint'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../images/about2.jpg" id="hrimg3" />
						<img src="../../../images/about2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/about/honor'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../images/about3.jpg" id="hrimg5" />
						<img src="../../../images/about3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/about/framework'>
					<div class="heroutebox1 navimg" @mouseenter="imgchange6" @mouseleave="imgchange7">
						<img src="../../../images/about4.jpg" id="hrimg7" />
						<img src="../../../images/about4a.jpg" id="hrimg8" />
					</div>
				</router-link>
			</div>
		</div>
    <div v-if="this.$route.path==='/enabout'">
			<div>
				<Nav navtitle="人力资源"></Nav>
			</div>
			<div class="bottom">
			<p class="stp"> LaoWaiCang International Trade Co., Ltd., is a Sino-foreign joint venture founded in March 2017, with a registered capital of thousand million yuans. The members of our team mainly come from China and Italy. LaoWaiCang is focused on the selection of high-quality imported food and is committed to provide to Chinese consumers more and better green food from Italy. Thanks to the cooperation with foreign partners, LaoWaiCang carefully selected more than 100 foreign manufacturers, and it is mainly responsible for the procurement, quality control, logistics, sales and customer service to provide a perfect service system. Linking foreign manufacturers and domestic distributors, we can guarantee good products, good price and good service to domestic consumers. Imported origin, pure natural food, healthy and pollution-free are the three preconditions for LaoWaiCang to choose imported food. In selecting imported food from Italy, the main purpose of LaoWaiCang is always to satisfy the needs of Chinese consumers, paying attention to both quality and taste, aiming to offer a feast full of taste to Chinese consumers. </p>
      <p class="stp">LaoWaiCang is a very caring, responsible, and sincere enterprise, always respecting the three principles of “quality, safety and innovation”. All over the world, we are very careful in the selection of our products, strictly checking the origin of goods, technology, raw materials etc., putting consumer needs in first place, and striving to provide consumers with the best quality goods. We are also committed to create a supply chain of high-quality imported food for domestic distribution, aiming to a leading company of the sector.</p>
			</div>
		</div>
		<div v-else>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<Foot></Foot>
	</div>
  <div v-if="width>=1500">
		<div><img class="midheaderbg" src="../../../images/about-ban.jpg"></div>
		<div class="midwraperwidth">
			<div class="midhrroute">
				<router-link to='/about/culture'>
					<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../images/about1.jpg" id="hrimg1" />
						<img src="../../../images/about1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/about/footprint'>
					<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../images/about2.jpg" id="hrimg3" />
						<img src="../../../images/about2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/about/honor'>
					<div class="heroutebox1" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../images/about3.jpg" id="hrimg5" />
						<img src="../../../images/about3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/about/framework'>
					<div class="heroutebox1" @mouseenter="imgchange6" @mouseleave="imgchange7">
						<img src="../../../images/about4.jpg" id="hrimg7" />
						<img src="../../../images/about4a.jpg" id="hrimg8" />
					</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/enabout'">
			<div>
				<Nav navtitle="关于我们"></Nav>
			</div>
			<div class="midbottom">
			<p class="midstp">LaoWaiCang International Trade Co., Ltd., is a Sino-foreign joint venture founded in March 2017, with a registered capital of thousand million yuans. The members of our team mainly come from China and Italy. LaoWaiCang is focused on the selection of high-quality imported food and is committed to provide to Chinese consumers more and better green food from Italy. Thanks to the cooperation with foreign partners, LaoWaiCang carefully selected more than 100 foreign manufacturers, and it is mainly responsible for the procurement, quality control, logistics, sales and customer service to provide a perfect service system. Linking foreign manufacturers and domestic distributors, we can guarantee good products, good price and good service to domestic consumers. Imported origin, pure natural food, healthy and pollution-free are the three preconditions for LaoWaiCang to choose imported food. In selecting imported food from Italy, the main purpose of LaoWaiCang is always to satisfy the needs of Chinese consumers, paying attention to both quality and taste, aiming to offer a feast full of taste to Chinese consumers. </p>
      <p class="midstp">LaoWaiCang is a very caring, responsible, and sincere enterprise, always respecting the three principles of “quality, safety and innovation”. All over the world, we are very careful in the selection of our products, strictly checking the origin of goods, technology, raw materials etc., putting consumer needs in first place, and striving to provide consumers with the best quality goods. We are also committed to create a supply chain of high-quality imported food for domestic distribution, aiming to a leading company of the sector.</p>
			</div>
		</div>
		<div v-else>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<Foot></Foot>
	</div>
  <div v-if="width<=640">
		<About></About>
	</div>
</div>
</template>

<script>
import Foot from '../common/footer.vue'
import About from './mobile/about.vue'
export default {
  data () {
    return {
      width: 1920
    }
  },
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
    },
    imgchange6 () {
      document.getElementById('hrimg7').style.left = -160 + 'px'
      document.getElementById('hrimg7').setAttribute('class', 'imgchangq')
      document.getElementById('hrimg8').style.left = 0 + 'px'
      document.getElementById('hrimg8').setAttribute('class', 'imgchangl')
    },
    imgchange7 () {
      document.getElementById('hrimg7').style.left = 0 + 'px'
      document.getElementById('hrimg7').setAttribute('class', 'imgchangl')
      document.getElementById('hrimg8').style.left = 160 + 'px'
      document.getElementById('hrimg8').setAttribute('class', 'imgchangq')
    }
  },
  components: {
    Foot,
    About
  },
  created () {
    this.width = document.documentElement.offsetWidth
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
.wraperwidth {
  width: 1000px;
  margin: 0 auto;
}

.headerbg {
  width: 100%;
  min-width: 1000px;
}

.hrroute {
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
.navimg {
  height: 120px;
  width: 120px;
  margin: 30px;
}
.navimg img{
  width: 100%;
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
  transition: all 0.5s;
}

.heroutebox1 .imgchangl {
  opacity: 1;
  transition: all 0.5s;
}

.bottom {
  padding:0 140px;
  width: 720px;
  text-align: left;
  margin: 0 auto;
}

.stp {
  margin-top: 20px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
  text-indent: 2em;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
}

.midheaderbg {
  width: 100%;
  min-width: 1420px;
}

.midhrroute {
  text-align: center;
}

.midbottom {
  width: 1420px;
  margin: 0 auto;
}

.midstp {
  margin-top: 45px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
}
</style>
