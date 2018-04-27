<template>
<div>
	<div v-if="width<1500&&width>640">
		<div><img class='headerbg' src='../../../images/contact-ban.jpg'></div>
    <p class="navtop"></p>
		<Nav navtitle="CONTACT US"></Nav>
		<div class='contact-sketch'>
			<p>If you have any question or suggestion, please contact us and we will reply in 1 working day. </p>
		</div>
		<div class='contact-content'>
			<div class='contact-content-top'>
				<img src='../../../images/contact2.jpg' class="contact-content-top-img"/>
				<div class='contact-content-tr'>
					<div class='contact-content-tc'>
						<h3>China headquarters</h3>
						<ul class='index-contact-method'>
							<li v-for='(item,index) in contact' :key=index><img :src='item.icon'><span class='index-contact-span'>{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class='contact-content-top'>
				<img class='contact-content-img contact-content-top-img' src='../../../images/contact1.jpg' />
				<div class='contact-content-tb'>
					<div class='contact-content-tc'>
						<h3>Italian headquarters</h3>
						<ul class='index-contact-method'>
              <br />
							<li v-for='(item,index) in contact1' :key=index><img :src='item.icon'><span class='index-contact-span'>{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<Foot></Foot>
	</div>
  <div v-if="width>=1500">
		<div><img class='midheaderbg' src='../../../images/contact-ban.jpg'></div>

		<div class='midcontact-title'>
			<img src='../../../images/left-c.jpg' />
			<p>CONTACT US</p>
			<img src='../../../images/right-c.jpg' />
		</div>
		<div class='midcontact-sketch'>
			<p>If you have any question or suggestion, please contact us and we will reply in 1 working day. </p>
		</div>
		<div class='midcontact-content'>
			<div class='midcontact-content-top'>
				<img src='../../../images/contact2.jpg' />
				<div class='midcontact-content-tr'>
					<div class='midcontact-content-tc'>
						<h3>China headquarters</h3>
						<ul class='midindex-contact-method'>
							<li v-for='(item,index) in contact' :key=index><img :src='item.icon'><span class='midindex-contact-span'>{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class='midcontact-content-top'>
				<img class='midcontact-content-img' src='../../../images/contact1.jpg' />
				<div class='midcontact-content-tb'>
					<div class='midcontact-content-tc'>
						<h3>Italian headquarters</h3>
						<ul class='midindex-contact-method'>
              <br />
							<li v-for='(item,index) in contact1' :key=index><img :src='item.icon'><span class='midindex-contact-span'>{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<Foot></Foot>
	</div>
  <div  v-if="width<=640">
    <Contact></Contact>
  </div>
  </div>
</template>

<script>
import Contact from './mobile/contact'
import Foot from '../common/footer.vue'
import Nav from '../common/nav.vue'
import indexcontact1 from '../../../images/index-contact1.png'
import indexcontact2 from '../../../images/index-contact2.png'
import indexcontact3 from '../../../images/index-contact3.png'
import indexcontact4 from '../../../images/index-contact4.png'

export default {
  data () {
    return {
      width: 1920,
      contact: [
        {
          icon: indexcontact2,
          value: 'Phone：0571-88305872'
        },
        {
          icon: indexcontact3,
          value: 'Email：laowaicang@laowaicang.com'
        },
        {
          icon: indexcontact4,
          value: 'Address：No. 1688 BinSheng Rd, BinJiang , Hangzhou, Zhejiang'
        }
      ],
      contact1: [
        {
          icon: indexcontact1,
          value: 'Molibe Phone：39320 3933535'
        },
        {
          icon: indexcontact4,
          value: 'Address：Via Varese,2/a 21047 Saronno(VA),Italy'
        }
      ]
    }
  },
  components: {
    Foot,
    Nav,
    Contact
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
p,
h3,
img {
  margin: 0;
  padding: 0;
}

.headerbg {
  width: 100%;
  min-width: 1000px;
}
.contact-content {
  width: 1000px;
  margin: 0 auto;
}

.navtop{
  height:50px;
}

.contact-content-top {
  margin-top: 20px;
  position: relative;
}

.contact-sketch {
  text-align: center;
  width: 1000px;
  margin: 0 auto;
}

.contact-sketch p {
  color: #7a7a7a;
  margin-top: 50px;
  font-size: 14px;
}
ul{
  padding: 0;
}
.index-contact-method {
  list-style: none;
  margin-top: 15px;
  position: relative;
}

.index-contact-method li {
  position: relative;
  margin-top: 5px;
}

.index-contact-method li img {
  width: 20px;
}

.index-contact-span {
  font-size: 14px;
  position: relative;
  color: #666666;
  margin-left: 25px;
  top: -5px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
  line-height: 30px;
}

.contact-content {
  margin-top: 50px;
}
.contact-content-top-img{
  width: 540px
}
.contact-content-tr {
  width: 540px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 5px #cccccc;
  right: 0;
  top: 0;
  height: 180px;
  margin-top: 20px;
  padding: 20px;
  margin-bottom: 20px;
}

.contact-content-tc {
  background: #fdf3e9;
  position: relative;
  height: 160px;
  padding: 20px 0 0 50px;
}

.contact-content-tb {
  width: 540px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 5px #cccccc;
  left: 0;
  top: 0;
  height: 180px;
  margin-top: 20px;
  padding: 20px;
  margin-bottom: 20px;
}

.contact-content-tc h3 {
  font-size: 16px;
  color: #ee882a;
}

.contact-content-img {
  margin-left: 460px;
}
.midheaderbg {
  width: 100%;
  min-width: 1420px;
}

.midcontact-title {
  display: flex;
  max-width: 660px;
  margin: 100px auto 0;
  position: relative;
}

.midcontact-title p {
  line-height: 24px;
  font-size: 24px;
  flex: 1;
  color: #f1662c;
  text-shadow: 1px 1px 1px #f1662c;
  text-align: center;
}

.midcontact-title img {
  height: 20px;
  margin: 3px 40px;
}

.midcontact-content {
  width: 1420px;
  margin: 0 auto;
}

.midcontact-content-top {
  margin-top: 20px;
  position: relative;
}

.midcontact-sketch {
  text-align: center;
  width: 1420px;
  margin: 0 auto;
}

.midcontact-sketch p {
  color: #7a7a7a;
  margin-top: 50px;
  font-size: 14px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
}

.midindex-contact-method {
  list-style: none;
  margin-top: 35px;
  position: relative;
}

.midindex-contact-method li {
  position: relative;
  margin-top: 20px;
}

.midindex-contact-method li img {
  width: 24px;
}

.midindex-contact-span {
  font-size: 14px;
  line-height: 25px;
  position: relative;
  color: #666666;
  margin-left: 40px;
  top: -8px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}

.midcontact-content {
  margin-top: 50px;
}

.midcontact-content-tr {
  width: 840px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 5px #cccccc;
  right: 0;
  top: 0;
  height: 280px;
  margin-top: 30px;
  padding: 30px;
  margin-bottom: 30px;
}

.midcontact-content-tc {
  background: #fdf3e9;
  position: relative;
  height: 250px;
  padding: 30px 0 0 50px;
}

.midcontact-content-tb {
  width: 840px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 5px #cccccc;
  left: 0;
  top: 0;
  margin-top: 30px;
  padding: 30px;
}

.midcontact-content-tc h3 {
  font-size: 16px;
  color: #ee882a;
}

.midcontact-content-img {
  margin-left: 580px;
}
</style>
