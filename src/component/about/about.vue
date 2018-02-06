<template>
	<div>
		<div><img class="headerbg" src="../../../images/about-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/enabout/enculture'>
					<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src="../../../images/about1.jpg" id="hrimg1" />
						<img src="../../../images/about1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/enabout/enfootprint'>
					<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src="../../../images/about2.jpg" id="hrimg3" />
						<img src="../../../images/about2a.jpg" id="hrimg4" />
					</div>
				</router-link>
				<router-link to='/enabout/enhonor'>
					<div class="heroutebox1" @mouseenter="imgchange4" @mouseleave="imgchange5">
						<img src="../../../images/about3.jpg" id="hrimg5" />
						<img src="../../../images/about3a.jpg" id="hrimg6" />
					</div>
				</router-link>
				<router-link to='/enabout/enframework'>
					<div class="heroutebox1" @mouseenter="imgchange6" @mouseleave="imgchange7">
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
			<p class="stp">Moumou Holding Group Co. Ltd. was founded in January 18, 2005, is a municipal government capital to accelerate the strategic adjustment of state-owned capital, a few key enterprises bigger and stronger, to XX (industry) Group Limited, a wholly state-owned company XYZ Holdings Limited and a city gas Refco Group Ltd reorganization and the establishment of a city, is one of the largest state-owned enterprise capital, infrastructure and public utilities and municipal government and the municipal SASAC planning investment and financing platform. Since the establishment of a control group, a total profit of state-owned enterprises has always ranked in the first, and was named "China top 500 enterprises", "top 500 enterprises Chinese".</p>
			<p class="stp">The main business of a controlling group is the investment, operation and management of urban infrastructure and public utilities. The company's red chip companies - Moumou Holdings Limited is the largest overseas listed companies have a certain, Moumou gas group, the capital airport expressway, Moumou ninth waterworks and Yanjing Beer and many other high-quality enterprises. Among them, Moumou gas group is the country's largest city gas enterprises, gas consumption accounted for more than 96% years of a city; the capital airport expressway is known as the country of the first road is the main road linking the Capital International Airport and a city center; the ninth water plant is currently in a certain maximum surface water, tap water the size of the supply of the first phase of the project is about a city in 1/5.</p>
      <p class="stp">The company registered capital of 8 billion 200 million yuan, as of the end of 2006 the total assets amounted to 44 billion 860 million yuan, is one of the largest state-owned assets in an enterprise. Since the establishment of the top total Beikong group profits always in a city is a state-owned enterprises, at the same time for two consecutive years in the National Bureau of statistics released "Chinese top 500 enterprises", and is China Enterprise Association, Chinese Entrepreneurs Association Award for "China enterprise 500 strong" and "one of the top 500 service enterprises". XX Group Holdings Limited is a city infrastructure investment and financing platform and important public utilities. Under the flag of XXX Holdings Limited is listed in Hongkong in 1997 of the red chip enterprises, the main business for the gas, toll roads, water and beer, have certain gas, airport expressway, Yanjing Beer and other well-known enterprises and famous brands, including a city gas Refco Group Ltd in 2006 gas pipeline more than 7300 kilometers, the natural gas supply capacity of 3 billion 350 million cubic meters, is the country's largest city gas enterprises, formed in infrastructure and public utilities industry, gas, water, road and other business segments that cooperate with each other and mutually supported business pattern, to build itself into a comprehensive city services operator, to make a greater contribution to the realization of "new strategic concept, so new Olympics".</p>
      <p class="stp">In the future, Beikong group will be in accordance with the "energy one" mode of operation and service, to build a gas as the core, to public utilities industry, gas, heat, water, road, a number of strong business cooperation, mutual support to each other's business pattern, so as to build itself into a comprehensive city the construction of city public utilities services operator, and make its due contribution to the social economic development.</P>
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
import Foot from '../common/footer.vue'
export default {
  data () {
    return {}
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
    Foot
  },
  created () {}
}
</script>

<style scoped>
.wraperwidth {
  width: 1420px;
  margin: 0 auto;
}

.headerbg {
  width: 100%;
  min-width: 1420px;
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
  width: 1420px;
  margin: 0 auto;
}

.stp {
  margin-top: 45px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
}
</style>
