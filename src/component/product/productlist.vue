<template>
	<div>
		<Nav navtitle='PRODUCT CLASSIFICATION'></Nav>
		<div class='all'>
		<div class='margintop' v-for='(item,index) in this.productlist' :key=index>
			<router-link :to="{name:'productcid',params:{id:{id:item.id,name:item.title}}}" class="fontstyle">
				<div class="product-box">
					<div class="product-boxl"><img :src="item.imgurl1"></div>
					<div class="product-boxr">
						<img :src="item.imgurl2">
						<p class="product-boxp1">{{item.title}}</p>
						<p class="product-boxp2">{{item.content}}
						</p>
					</div>
				</div>
			</router-link>
		</div>
		<div style="clear: both;"></div>
		</div>
	</div>
</template>

<script>
import Nav from '../common/nav.vue'
import Foot from '../common/footer.vue'
import p11 from '../../../images/products1-1.jpg'
import p21 from '../../../images/products2-1.jpg'
import p12 from '../../../images/products1-2.jpg'
import p22 from '../../../images/products2-2.jpg'
import p13 from '../../../images/products1-3.jpg'
import p23 from '../../../images/products2-3.jpg'
import p14 from '../../../images/products1-4.jpg'
import p24 from '../../../images/products2-4.jpg'
import p15 from '../../../images/products1-5.jpg'
import p25 from '../../../images/products2-5.jpg'
import p16 from '../../../images/products1-6.jpg'
import p26 from '../../../images/products2-6.jpg'
import p17 from '../../../images/products1-7.jpg'
import p27 from '../../../images/products2-7.jpg'
import p18 from '../../../images/products1-8.jpg'
import p28 from '../../../images/products2-8.jpg'
export default {
  data () {
    return {
      productlist: [
        {
          imgurl1: p11,
          imgurl2: p21,
          title: 'Drinks',
          content: "To study in Italy, we should learn wine, Italy wine, wine and many other names, is the family's essential drinks.",
          id: '5a72ca5fd03d2b14449ff1a6'
        },
        {
          imgurl1: p12,
          imgurl2: p22,
          title: 'Imported snacks',
          content: "To study in Italy, we should learn wine, Italy wine, wine and many other names, is the family's essential drinks.",
          id: '5a72ca6cd03d2b14449ff1a7'
        },
        {
          imgurl1: p13,
          imgurl2: p23,
          title: 'Non-staple food',
          content: 'Italy is a gourmet people, they have a long history of diet, as their art, fashion and furniture, always like to elaborate.',
          id: '5a72cac6d03d2b14449ff1aa'
        },
        {
          imgurl1: p14,
          imgurl2: p24,
          title: 'Fruits',
          content: "What delicious snacks do you have in Italy? Let me tell you some delicious snacks that can't stop.",
          id: '5a72ca7ed03d2b14449ff1a9'
        },
        {
          imgurl1: p15,
          imgurl2: p25,
          title: 'Vegetables',
          content: "To study in Italy, we should learn wine, Italy wine, wine and many other names, is the family's essential drinks.",
          id: '5a72ca5fd03d2b14449ff1a6'
        },
        {
          imgurl1: p16,
          imgurl2: p26,
          title: 'Seafood',
          content: "What delicious snacks do you have in Italy? Let me tell you some delicious snacks that can't stop.",
          id: '5a72ca6cd03d2b14449ff1a7'
        },
        {
          imgurl1: p17,
          imgurl2: p27,
          title: 'Poultry eggs and milk',
          content: 'Italy is a gourmet people, they have a long history of diet, as their art, fashion and furniture, always like to elaborate. ',
          id: '5a72cac6d03d2b14449ff1aa'
        },
        {
          imgurl1: p18,
          imgurl2: p28,
          title: 'Fitting',
          content: "What delicious snacks do you have in Italy? Let me tell you some delicious snacks that can't stop.",
          id: '5a72ca5fd03d2b14449ff1a6'
        }
      ]
    }
  },
  components: {
    Nav,
    Foot
  }
}
</script>

<style scoped>
.product-box {
  width: 700px;
  display: flex;
  z-index: 11;
  position: relative;
}

.product-boxl {
  width: 348px;
}

.product-boxr {
  width: 350px;
  background: #f8efe7;
  position: relative;
  text-align: center;
}
.all {
  margin-top: 30px;
}
.product-boxr img {
  margin-top: 30px;
}

.product-boxp1 {
  color: #ee882a;
  font-weight: 600;
  font-size: 18px;
  margin: 30px 35px 0;
}

.margintop {
  margin-top: 20px;
  float: left;
}

.margintop:nth-of-type(2n) {
  margin-left: 20px;
}

.product-boxp2 {
  color: #ee882a;
  font-weight: 100;
  font-size: 14px;
  margin: 20px 20px 0;
  line-height: 20px;
  letter-spacing: 1px;
}

.product-boxl img {
  width: 100%;
}

.fontstyle {
  text-decoration: none;
  z-index: 11;
}
</style>
