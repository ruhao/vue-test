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
    <div v-if="this.$route.path==='/about'">
			<div>
				<Nav navtitle="人力资源"></Nav>
			</div>
			<div class="bottom">
			<p class="stp">某某控股集团有限公司成立于2005年1月18日，是一个市政府资本加快国有资本的战略性调整，一些重点企业做大做强，XX（实业）集团有限公司，国有独资公司XYZ控股有限公司和市燃气集团有限责任公司重组和一个城市的建立，是其中的一个最大的国有企业资本、基础设施和公共设施和市政府和市国资委规划投资融资平台。由于对照组的建立，一个国有企业利润总额一直排在第一，被评为“中国企业500强”、“中国企业500强”。</p>
      <p class="stp">控股集团的主要业务是城市基础设施和公用事业的投资、运营和管理。公司的红筹公司——某某控股有限公司是国内最大的海外上市公司，有某某、某某燃气集团、首都机场高速公路、某某水厂和燕京啤酒等多家优质企业。其中，某某燃气集团是全国最大的城市燃气企业，天然气消费占比超过96%年的一个城市；首都机场高速公路被称为第一道国是连接首都国际机场和市中心的主要道路；第九水厂是目前在某一最大值地表水、自来水项目第一阶段的供应规模是一个城市在1 / 5。</p>
      <p class="stp">公司注册资本82亿元，截至2006年底，总资产达448亿6000万元，是企业中最大的国有资产之一。自前总Beikong集团的利润一直在一个城市的建立是一个国有企业，同时在国家统计局公布的“中国企业500强”，连续两年，中国企业联合会、中国企业家协会评为“中国企业500强”和“一个顶尖的500服务企业”。XX集团控股有限公司是城市基础设施投融资平台和重要公用事业单位。XXX集团有限公司旗下1997的红筹企业在香港上市，收费公路的气、主营业务、水和啤酒，有一定的气、机场高速公路、燕京啤酒等知名企业和著名品牌，其中2006的天然气管道7300多公里的城市天然气集团有限责任公司，33亿5000万立方米的天然气供应能力，是全国最大的城市燃气企业，形成了基础设施和公用事业行业，天然气，水，道路和其他业务部门相互配合、相互支撑的业务模式，将自身打造成为一个城市综合运营服务商，为了实现一个大的贡献“新战略理念，新奥运”。</P>
      <p class="stp">在未来，Beikong集团将按照“能量”的运作模式和服务，建立一个天然气为核心，为公用事业行业，气，热，水，路，一批有实力的企业合作，对彼此的业务模式相互支持，从而建立自己的为一体的综合性城市公共事业服务运营商建设，及对社会经济的发展做出应有的贡献。</P>
      <p class="stp">今年2016年6月7日，控股集团有限公司与香港多家集团有限公司签署了战略合作框架协议。</P>
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
		<div v-if="this.$route.path==='/about'">
			<div>
				<Nav navtitle="关于我们"></Nav>
			</div>
			<div class="midbottom">
			<p class="midstp">某某控股集团有限公司成立于2005年1月18日，是一个市政府资本加快国有资本的战略性调整，一些重点企业做大做强，XX（实业）集团有限公司，国有独资公司XYZ控股有限公司和市燃气集团有限责任公司重组和一个城市的建立，是其中的一个最大的国有企业资本、基础设施和公共设施和市政府和市国资委规划投资融资平台。由于对照组的建立，一个国有企业利润总额一直排在第一，被评为“中国企业500强”、“中国企业500强”。</p>
      <p class="midstp">控股集团的主要业务是城市基础设施和公用事业的投资、运营和管理。公司的红筹公司——某某控股有限公司是国内最大的海外上市公司，有某某、某某燃气集团、首都机场高速公路、某某水厂和燕京啤酒等多家优质企业。其中，某某燃气集团是全国最大的城市燃气企业，天然气消费占比超过96%年的一个城市；首都机场高速公路被称为第一道国是连接首都国际机场和市中心的主要道路；第九水厂是目前在某一最大值地表水、自来水项目第一阶段的供应规模是一个城市在1 / 5。</p>
      <p class="midstp">公司注册资本82亿元，截至2006年底，总资产达448亿6000万元，是企业中最大的国有资产之一。自前总Beikong集团的利润一直在一个城市的建立是一个国有企业，同时在国家统计局公布的“中国企业500强”，连续两年，中国企业联合会、中国企业家协会评为“中国企业500强”和“一个顶尖的500服务企业”。XX集团控股有限公司是城市基础设施投融资平台和重要公用事业单位。XXX集团有限公司旗下1997的红筹企业在香港上市，收费公路的气、主营业务、水和啤酒，有一定的气、机场高速公路、燕京啤酒等知名企业和著名品牌，其中2006的天然气管道7300多公里的城市天然气集团有限责任公司，33亿5000万立方米的天然气供应能力，是全国最大的城市燃气企业，形成了基础设施和公用事业行业，天然气，水，道路和其他业务部门相互配合、相互支撑的业务模式，将自身打造成为一个城市综合运营服务商，为了实现一个大的贡献“新战略理念，新奥运”。</P>
      <p class="midstp">在未来，Beikong集团将按照“能量”的运作模式和服务，建立一个天然气为核心，为公用事业行业，气，热，水，路，一批有实力的企业合作，对彼此的业务模式相互支持，从而建立自己的为一体的综合性城市公共事业服务运营商建设，及对社会经济的发展做出应有的贡献。</P>
      <p class="midstp">今年2016年6月7日，控股集团有限公司与香港多家集团有限公司签署了战略合作框架协议。</P>
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
  mounted () {
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
