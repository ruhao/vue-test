<template>
	<div>
		<div>
			<div><img class="headerbg" src="../../../images/banner1.jpg"/></div>
		</div>

		<!--产品业务-->
		<div class="wraperwidth">
			<p class="index-product-title"><span>BUSINESS</span></p>
			<p class="index-product-introduction">
				The company is committed to build China's construction machinery and equipment and heavy vehicles in overseas products,Ltd. is committed to become China's cross-border food leader enterprises, services and technical support in one of the comprehensive integrated solutions provider.
					商。
				</p>
		</div>
		<div class="wraperwidth">
			<div class="index-product-content">
				<div class="index-product-content-left">
					<img src="../../../images/index-products1.jpg" />
				</div>
				<div class="index-product-content-right">
					<div class="index-product-content-right-top">
						<div>
							<img src="../../../images/products1-1.jpg" />
						</div>
						<div class="index-product-content-box">
							<img src="../../../images/index-products3.jpg" />
							<p class="index-product-content-right-title">Imported snacks</p>
							<p class="index-product-content-right-content">What delicious snacks do you have in Italy? Let me tell you some delicious snacks that can't stop.</p>
						</div>
						<div>
							<img src="../../../images/products1-3.jpg" />
						</div>
					</div>
					<div class="index-product-content-right-bottom">
						<div class="index-product-content-box">
							<img src="../../../images/index-products5.jpg" />
							<p class="index-product-content-right-title">Drinks</p>
							<p class="index-product-content-right-content">To study in Italy, we should learn wine, Italy wine, wine and many other names, is the family's essential drinks.</p>
						</div>
						<div>
							<img src="../../../images/products1-2.jpg" />
						</div>
						<div class="index-product-content-box">
							<img src="../../../images/index-products7.jpg" />
							<p class="index-product-content-right-title">Non-staple food</p>
							<p class="index-product-content-right-content">Italy is a gourmet people, they have a long history of diet, as their art, fashion and furniture, always like to elaborate.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--新闻动态-->

		<div class="index-news-body">
			<div class="wraperwidth">
				<div class="index-news-title">
					<img src="../../../images/index-news.jpg" />
					<p>Foreigners hold the business philosophy of "cooperation, creation of wealth, innovation and development", and strive to create a harmonious atmosphere for society, enterprises and employees, and take the road of sustainable development.</p>
				</div>
				<div class="index-news-content">
					<div class="index-news-content-top">
						<div>
							<i>
								<span class="index-news-content-span">
									<p class="index-news-p1"><span class="index-news-content-year">17</span><span class="index-news-content-month">17-01</span></p>
									<p class="index-news-p2"> health wine winning weapon</p>
								</span>
							</i>
							<img src="../../../images/news-con1.png" />
						</div>
						<div>
							<i>
							<span class="index-news-content-span">
								<p class="index-news-p1"><span class="index-news-content-year">06</span><span class="index-news-content-month">17-01</span></p>
								<p class="index-news-p2">Experience marketing,  health wine winning weapon</p>
							</span>
						</i>
							<img src="../../../images/news-con4.png" />
						</div>
					</div>
					<div class="index-news-content-top">
						<div>
							<i>
							<span class="index-news-content-span">
								<p class="index-news-p1"><span class="index-news-content-year">06</span><span class="index-news-content-month">17-01</span></p>
								<p class="index-news-p2">Experience marketing,  health wine winning weapon</p>
							</span>
						</i>
							<img src="../../../images/news-con2.png" />
						</div>
						<div>
							<i>
							<span class="index-news-content-span">
								<p class="index-news-p1"><span class="index-news-content-year">11</span><span class="index-news-content-month">17-01</span></p>
								<p class="index-news-p2">Experience marketing,  health wine winning weapon...</p>
							</span>
						</i>
							<img src="../../../images/news-con3.png" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--关于我们-->

		<div class="index-about-body-next">
			<img class="index-about-img" src="../../../images/index-about.jpg" />
			<div class="index-about-content">
				<div class="index-about-box">
					<img src="../../../images/index-about1.png" />
					<p class="index-about-box-p1">Group services</p>
					<p class="index-about-box-p2">Professional excellence,first-classservice to maximize the interests of customers</p>
				</div>
				<div class="index-about-box">
					<img src="../../../images/index-about2.png" />
					<p class="index-about-box-p1">Job</p>
					<p class="index-about-box-p2">Please pay attention to our latest recruitment information</p>
				</div>
				<div class="index-about-box">
					<img src="../../../images/index-about3.png" />
					<p class="index-about-box-p1">Campagin</p>
					<p class="index-about-box-p2">Never let the service value,improve the quality of service.</p>
				</div>
				<div class="index-about-box">
					<img src="../../../images/index-about4.png" />
					<p class="index-about-box-p1">Guestbook</p>
					<p class="index-about-box-p2">Please fill in the form to leave a message,we will contact you at the first time.</p>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>

		<!--营销网络-->
		<div class="index-internet-body">
			<img class="imgsize" src="../../../images/index-network.jpg" />
			<div class="index-internet-content">
				<div class="index-internet-top">
					<p class="index-internet-title">MARKETING</p>
					<p class="index-internet-title-introduction">Together with strong support, Hansheng works of the five major shareholders of the team, business has developed rapidly, since the establishment, scope of business involves 25 countries around the world, especially in Africa, its market share, brand influence, trade growth, service network coverage and quality of service has become the same industry the leader.</p>
				</div>
				<div class="index-internet-content">
					<!--循环数据-->
					<div class="index-internet-box" v-for="(item,index) in internet" :key=index>
						<p class="index-internet-body-p1">{{item.num}}</p>
						<p class="index-internet-body-p2">{{item.introduction}}</p>
					</div>
					<div style="clear: both;"></div>
				</div>

			</div>
		</div>

		<!--联系我们-->
		<div class="index-contact">
			<img class="imgsize" src="../../../images/index-contact.jpg" />
			<div class="index-contact-c">
				<div class="index-contact-content">
					<p class="index-contact-introduce">Moumou Holding Group Co. Ltd. was founded in January 18, 2005, is a municipal government capital to accelerate the strategic adjustment of state-owned capital, a few key enterprises bigger and stronger, to XX (industry) Group Limited, a wholly state-owned company XYZ Holdings Limited and a city gas Refco Group Ltd reorganization and the establishment of a city, is one of the largest state-owned enterprise capital, infrastructure and public utilities and municipal government and the municipal SASAC planning investment and financing platform. Since the establishment of a
						<span class="index-contact-more">MORE></span></p>
					<ul class="index-contact-method">
						<li v-for="(item,index) in contact" :key=index><img :src="item.icon"><span class="index-contact-span">{{item.value}}</span></li>
					</ul>
				</div>
			</div>
		</div>

		<!--合作伙伴-->
		<div class="index-cooperation">
			<div class="index-cooperation-top">
				<p class="index-cooperation-title">OUR BEST PARTNER</p>
				<p class="index-cooperation-content">Some LAOWAICANG professional partner</p>
				<ul>
					<li v-for="(item,index) in cooperation"  :key=index>
						<img :src="item" />
					</li>
				</ul>
				<div class="index-cooperation-bottom">
					<i><img :src="cooperationf[1]"></i>
					<i><img :src="cooperationf[0]"></i>
					<i><img :src="cooperationf[1]"></i>
				</div>
				<p class="index-cooperation-footer">laowaicang&nbsp;&nbsp;Copyright&nbsp;&nbsp;2014-2019&nbsp;&nbsp;ICP&nbsp;&nbsp;123456789</p>
			</div>

		</div>

	</div>
</template>
<script>
import indexcontact1 from '../../../images/index-contact1.png'
import indexcontact2 from '../../../images/index-contact2.png'
import indexcontact3 from '../../../images/index-contact3.png'
import indexcontact4 from '../../../images/index-contact4.png'
import cooperation1 from '../../../images/cooperation-1.png'
import cooperation2 from '../../../images/cooperation-2.png'
import cooperation3 from '../../../images/cooperation-3.png'
import cooperation4 from '../../../images/cooperation-4.png'
import cooperation5 from '../../../images/cooperation-5.png'
import cooperation6 from '../../../images/cooperation-6.png'
import cooperation7 from '../../../images/cooperation-7.png'
import cooperation8 from '../../../images/cooperation-8.png'
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
      ],
      contact: [
        {
          icon: indexcontact1,
          value: 'Mobile：86-15868121781 '
        },
        {
          icon: indexcontact2,
          value: 'Telephone：86-010-15868121781'
        },
        {
          icon: indexcontact3,
          value: 'Email：15868121781@qq.com'
        },
        {
          icon: indexcontact4,
          value: 'Address：Room 906, 8th Building Garden, XueYuan Road HaiDian District Beijing China'
        }
      ],
      cooperation: [
        cooperation1,
        cooperation2,
        cooperation3,
        cooperation4,
        cooperation5,
        cooperation6
      ],
      cooperationf: [
        cooperation7,
        cooperation8
      ]
    }
  }
}
</script>
<style scoped>
i {
  font-style: normal;
}

p,
ul,
li {
  margin: 0;
  padding: 0;
}
.headerbg {
  width: 100%;
  min-width: 1420px;
}
.wraperwidth {
  position: relative;
  width: 1420px;
  margin: 0 auto 0 auto;
}

.index-about-content {
  position: absolute;
  width: 1420px;
  margin: 0 auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.index-product-title {
  margin-top: 100px;
  text-align: center;
}

.index-product-title span {
  font-weight: 600;
  font-size: 26px;
  margin: 0 auto;
  color: #f1662c;
  text-shadow: 1px 1px 1px #f1662c;
}

.index-product-introduction {
  margin-top: 10px;
  text-align: center;
  color: #666666;
  margin: 0 200px;
  text-shadow: 0.2px 0.2px 0.2px #666666;
}

.index-product-content {
  padding-top: 55px;
  display: flex;
}

.index-product-content-left {
  flex: 1;
}

.index-product-content-right-top {
  display: flex;
}

.index-product-content-right-bottom {
  display: flex;
}

.index-product-content-box {
  width: 348px;
  height: 318px;
  background: #faf4ee;
  padding-top: 30px;
  text-align: center;
}

.index-product-content-right-title {
  font-size: 18px;
  color: #ee882a;
  text-shadow: 0.5px 0.5px 0.5px #f1662c;
}

.index-product-content-right-content {
  font-size: 12px;
  color: #ee882a;
  padding: 0 50px;
  text-shadow: 0.3px 0.3px 0.3px #f1662c;
}

.index-news-body {
  margin-top: 100px;
  padding-top: 90px;
  background: #f5f5f5;
  padding-bottom: 100px;
}

.index-news-title {
  text-align: center;
}

.index-news-title p {
  padding: 0 350px;
  font-size: 14px;
  color: #666666;
  text-shadow: 0.3px 0.3px 0.3px #b2b2b2;
  margin-top: 10px;
}

.index-news-content {
  margin-top: 50px;
}

.index-news-content-top {
  display: flex;
}

.index-news-content-top i {
  width: 350px;
  height: 211px;
  top: 0;
  left: 0;
  position: absolute;
  background: white;
}

.index-news-content-top i .index-news-content-span {
  display: block;
  width: 335px;
  height: 140px;
  margin: 20px;
  background: #f0f2f2;
  z-index: 2;
  padding-top: 30px;
  padding-right: 25px;
}

.index-news-content-top i .index-news-content-span:hover {
  margin-left: 0px;
  transition: all 1s;
}

.index-news-content-top i .index-news-content-span .index-news-p1 {
  margin-left: 45px;
}

.index-news-p2 {
  margin-top: 40px;
  text-shadow: 0.5px 0.5px 0.5px black;
  margin-left: 45px;
}

.index-news-content-year {
  font-size: 36px;
  color: #ee882a;
}

.index-news-content-month {
  font-size: 12px;
  color: #ee882a;
}

.index-news-content-top div {
  width: 700px;
  padding-left: 350px;
  position: relative;
}

.index-news-content-top div:nth-last-of-type(1) {
  margin-right: 20px;
}

.index-about-body-next {
  position: relative;
}

.index-about-body-next .index-about-img {
  width: 100%;
  min-width: 1420px;
  min-height: 410px;
}

.index-about-box {
  width: 140px;
  padding: 100px 20px 0 20px;
  float: left;
  text-align: center;
  margin-left: 220px;
}

.index-about-box:nth-of-type(1) {
  margin: 0;
}

.index-about-box-p1 {
  margin-top: 30px;
  color: #f1662c;
  text-shadow: 0.3px 0.3px 0.3px #f1662c;
}

.index-about-box-p2 {
  font-size: 12px;
  margin-top: 30px;
  color: #847e75;
  text-shadow: 0.2px 0.2px 0.2px #847e75;
}

.index-internet-body {
  width: 100%;
  position: relative;
}

.index-internet-top {
  text-align: center;
  padding: 90px 260px 0 260px;
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

.index-internet-title {
  font-size: 24px;
  color: #f1662c;
}

.index-internet-box {
  width: 185px;
  padding: 290px 20px 0 20px;
  float: left;
  text-align: center;
  margin-left: 160px;
}

.index-internet-box:nth-of-type(1) {
  margin: 0;
}

.index-internet-title-introduction {
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

.index-contact {
  position: relative;
}

.index-contact-c {
  position: absolute;
  width: 1420px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.imgsize {
  width: 100%;
  min-width: 1420px;
  min-height: 410px;
}
.index-contact-content {
  position: absolute;
  width: 640px;
  padding-right: 70px;
  top: 0;
  left: 0;
}

.index-contact-introduce {
  color: #999999;
  font-size: 10px;
  letter-spacing: 3px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
  margin-top: 100px;
}

.index-contact-more {
  color: #ee882a;
  letter-spacing: 1px;
  font-size: 12px;
  text-shadow: 0 0 0;
  cursor: pointer;
}

.index-contact-method {
  list-style: none;
  margin-top: 70px;
  position: relative;
}

.index-contact-method li {
  position: relative;
  margin-top: 20px;
}

.index-contact-span {
  position: relative;
  color: #666666;
  margin-left: 40px;
  top: -8px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}

.index-cooperation-top {
  position: relative;
  width: 1420px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}

.index-cooperation-title {
  color: #f1662c;
  text-shadow: 0.4px 0.4px 0.4px #f1662c;
  padding-top: 100px;
}

.index-cooperation-content {
  color: #666666;
  margin-top: 20px;
  text-shadow: 0.2px 0.2px 0.2px #666666;
}

.index-cooperation-top ul {
  display: flex;
  list-style: none;
  text-align: center;
  padding: 0 180px;
}

.index-cooperation-top ul li {
  margin-top: 75px;
  padding: 0 20px;
}

.index-cooperation-bottom {
  margin-top: 50px;
}

.index-cooperation-footer {
  margin-top: 60px;
  padding-bottom: 20px;
  text-shadow: 0.2px 0.2px 0.2px #666666;
}
</style>
