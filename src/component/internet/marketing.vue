<template>
	<div>
		<Nav navtitle='MARKETING'></Nav>
		<div class='wraperwidth'>
			<p class='titleex'>Moumou Holding Group Co. Ltd. was founded in January 18, 2005, is a municipal government capital to accelerate the strategic adjustment of state-owned capital, a few key enterprises bigger and stronger, to XX (industry) Group Limited, a wholly state-owned company XYZ Holdings Limited and a city gas Refco Group Ltd reorganization and the establishment of a city, is one of the largest state-owned enterprise capital, infrastructure and public utilities and municipal government and the municipal SASAC planning investment and financing platform. Since the establishment of a control group, a total profit of state-owned enterprises has always ranked in the first, and was named "China top 500 enterprises", "top 500 enterprises Chinese"</p>
			<div>
				<img class='imgsize' src='../../../images/index-network.jpg' />
				<div class='index-internet-content'>
					<div class='index-internet-content'>
						<!--循环数据-->
						<div class='index-internet-box' v-for='(item,index) in internet' :key=index>
							<p class='index-internet-body-p1'>{{item.num}}</p>
							<p class='index-internet-body-p2'>{{item.introduction}}</p>
						</div>
						<div style='clear: both;'></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '../common/nav.vue'
export default {
  data () {
    return {
      internet: [
        {
          num: '860+',
          introduction: 'Our number of cooperative brands has reached 860+'
        },
        {
          num: '125+',
          introduction: 'Our companys products have a long history, and each one is very classic'
        },
        {
          num: '1000+',
          introduction: 'The quantity of our products has reached 1000+'
        },
        {
          num: 'TOP',
          introduction: 'We are among the best in the industry'
        }
      ]
    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped>
.wraperwidth {
  width: 1420px;
  margin: 0 auto;
  position: relative;
}

.titleex {
  margin-top: 45px;
  font-size: 14px;
  color: #c2c2c2;
  position: relative;
}

.index-internet-body {
  width: 100%;
  position: relative;
}
.index-internet-content {
  position: absolute;
  width: 1420px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.index-internet-box {
  width: 185px;
  padding: 150px 20px 0 20px;
  float: left;
  text-align: center;
  margin-left: 160px;
}

.index-internet-box:nth-of-type(1) {
  margin: 0;
}
.imgsize {
  width: 100%;
}
.in .index-internet-title-introduction {
  font-size: 14px;
  color: #707070;
  text-shadow: 0.4px 0.4px 0.4px #707070;
  margin-top: 20px;
}

.index-internet-body-p1 {
  font-size: 54px;
  color: #ee882a;
  font-weight: bolder;
}

.index-internet-body-p2 {
  font-size: 14px;
  color: #ee882a;
  text-shadow: 0.4px 0.4px 0.4px #ee882a;
  margin-top: 20px;
}
</style>
