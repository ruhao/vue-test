<template>
<div>
	<div v-if="width<1500&&width>640">
		<div><img class="headerbg" src="../../../images/join-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/enhr/enstrategy'>
				<div class="heroutebox1 navimg" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/enhr/entrain'>
				<div class="heroutebox1 navimg" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/enhr/enadvertises'>
				<div class="heroutebox1 navimg" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src="../../../images/join3.jpg" id="hrimg5"/>
					<img src="../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/enhr'">
			<div>
				<Nav navtitle="Human Resources"></Nav>
			</div>
			<div class="bottom">
			<p class="stp">In LaoWaiCang we have a dream, and we need the most professional talents to realize it together.Choosing our team according the characteristics of the import food industry is the root of our success, and talent is our life. We invest in our business not only our resources, but also knowledge, culture and emotions. We put all our humanity in the business of import food.</p>
			<p class="stp">Our idea is to attract the best talent with to our common ideal, giving them the greatest trust. So we are looking for partners, not employees; partners that should have first-class quality, talent and mind. This is our basic logic.</p>
			<p class="stp">Ideals and trust are the foundations of our team; only this way we can cherish this kind of trust, and therefore can not tolerate any blemish. In this way, we can ensure the purity of our team and the blooming of our company.</p>
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
		<div><img class="midheaderbg" src="../../../images/join-ban.jpg"></div>
		<div class="midwraperwidth">
			<div class="midhrroute">
				<router-link to='/enhr/enstrategy'>
				<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/enhr/entrain'>
				<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/enhr/enadvertises'>
				<div class="heroutebox1" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src="../../../images/join3.jpg" id="hrimg5"/>
					<img src="../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/enhr'">
			<div>
				<Nav navtitle="Human Resources"></Nav>
			</div>
			<div class="midbottom">
			<p class="midstp">In LaoWaiCang we have a dream, and we need the most professional talents to realize it together.Choosing our team according the characteristics of the import food industry is the root of our success, and talent is our life. We invest in our business not only our resources, but also knowledge, culture and emotions. We put all our humanity in the business of import food.</p>
			<p class="midstp">Our idea is to attract the best talent with to our common ideal, giving them the greatest trust. So we are looking for partners, not employees; partners that should have first-class quality, talent and mind. This is our basic logic.</p>
			<p class="midstp">Ideals and trust are the foundations of our team; only this way we can cherish this kind of trust, and therefore can not tolerate any blemish. In this way, we can ensure the purity of our team and the blooming of our company.</p>
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
      <Hrr></Hrr>
    </div>
  </div>
</template>

<script>
import Foot from '../common/footer.vue'
// 模块导入
import Nav from '../common/nav.vue'
import Hrr from './mobile/hr.vue'
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
    }
  },
  components: {
    Foot,
    Nav,
    Hrr
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
.headerbg {
  width: 100%;
  min-width: 1000px;
  text-align: center;
}
.wraperwidth {
  width: 1000px;
  margin: 0 auto;
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
  width: 900px;
  margin: 0 auto;
  padding: 0 40px;
}
.stp {
  margin-top: 15px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
  text-indent: 2em;
}
.midheaderbg {
  width: 100%;
  min-width: 1420px;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
}
.midhrroute {
  text-align: center;
}
.midbottom {
  width: 1420px;
  margin: 0 auto;
}
.midstp {
  margin-top: 15px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
}
</style>
