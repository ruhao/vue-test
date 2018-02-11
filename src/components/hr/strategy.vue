<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle='人才战略'></Nav>
		<div class="bottom">
			<p class="stp">集团业务涉及零售、超市、百货商场、购物中心、银行金融、房地产开发、酒店、旅游等行业。其中，购物中心是核心业务群之一。该集团先后在厦门、晋江、成都、苏州、重庆、淄博等44个购物中心的建设中，总建筑面积超过540万平方米，并计划将2013个商场的数量增加一倍。</p>
			<p class="stp">该集团由7家上市公司组成，该公司是菲律宾最大的上市公司之一，由菲律宾华侨石志成先生于1958创立。集团的核心业务包括购物中心、酒店、零售（包括超级市场、百货公司、品牌店）、银行业、金融服务业和旅游业等主要领域。截至2008日，菲律宾集团资产净值约为2924亿比索（约合413亿元人民币）作为集团的核心部分，XX集团经过20多年的快速发展，现在有41个大型综合购物中心，总建筑面积超过470万平方米，超过300万人次每日流量。其中，亚洲商城是世界第四大购物中心，面积约40万平方米。此外，在集团建设有9个购物中心，包括中国南苏州生活广场、重庆城市广场、淄博、山东、天津滨海新区等城市广场</p>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle='人才战略'></Nav>
		<div class="midbottom">
			<p class="midstp">集团业务涉及零售、超市、百货商场、购物中心、银行金融、房地产开发、酒店、旅游等行业。其中，购物中心是核心业务群之一。该集团先后在厦门、晋江、成都、苏州、重庆、淄博等44个购物中心的建设中，总建筑面积超过540万平方米，并计划将2013个商场的数量增加一倍。</p>
			<p class="midstp">该集团由7家上市公司组成，该公司是菲律宾最大的上市公司之一，由菲律宾华侨石志成先生于1958创立。集团的核心业务包括购物中心、酒店、零售（包括超级市场、百货公司、品牌店）、银行业、金融服务业和旅游业等主要领域。截至2008日，菲律宾集团资产净值约为2924亿比索（约合413亿元人民币）作为集团的核心部分，XX集团经过20多年的快速发展，现在有41个大型综合购物中心，总建筑面积超过470万平方米，超过300万人次每日流量。其中，亚洲商城是世界第四大购物中心，面积约40万平方米。此外，在集团建设有9个购物中心，包括中国南苏州生活广场、重庆城市广场、淄博、山东、天津滨海新区等城市广场</p>
		</div>
	</div>
  </div>
</template>

<script>
import Nav from '../common/nav.vue'
export default {
  data () {
    return {
      width: 1920
    }
  },
  components: {
    Nav
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
p {
  margin: 0;
  padding: 0;
}
.bottom {
  width: 900px;
  margin: 0 auto;
  padding: 0 40px;
}
.stp {
  margin-top: 45px;
  font-size: 14px;
  color: #666666;
  line-height: 25px;
  text-indent: 2em;
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
