<template>
	<div>
		<div><img class='headerbg' src='../../../images/contact-ban.jpg'></div>
    <p class="navtop"></p>
		<Nav navtitle="联系我们"></Nav>
		<div class='contact-sketch'>
			<p>请在线提交您的咨询、建议、意见，我们会在收到邮件后的1个工作日内，对您的问题给予答复。</p>
		</div>
		<div class='contact-content'>
			<div class='contact-content-top'>
				<img src='../../../images/contact1.jpg' class="contact-content-top-img"/>
				<div class='contact-content-tr'>
					<div class='contact-content-tc'>
						<h3>意大利总部</h3>
						<ul class='index-contact-method'>
							<li v-for='(item,index) in contact' :key=index><img :src='item.icon'><span class='index-contact-span'>{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class='contact-content-top'>
				<img class='contact-content-img contact-content-top-img' src='../../../images/contact2.jpg' />
				<div class='contact-content-tb'>
					<div class='contact-content-tc'>
						<h3>意大利总部</h3>
						<ul class='index-contact-method'>
							<li v-for='(item,index) in contact' :key=index><img :src='item.icon'><span class='index-contact-span'>{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../common/footer.vue'
import Nav from '../common/nav.vue'
import indexcontact1 from '../../../images/index-contact1.png'
import indexcontact2 from '../../../images/index-contact2.png'
import indexcontact3 from '../../../images/index-contact3.png'
import indexcontact4 from '../../../images/index-contact4.png'

export default {
  data () {
    return {
      contact: [
        {
          icon: indexcontact1,
          value: '手机：86-15868121781'
        },
        {
          icon: indexcontact2,
          value: '座机：86-010-15868121781'
        },
        {
          icon: indexcontact3,
          value: '邮件：15868121781@qq.com'
        },
        {
          icon: indexcontact4,
          value: '地址：中国杭州 滨江区 滨盛路1688号'
        }
      ]
    }
  },
  components: {
    Foot,
    Nav
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
  min-width: 1420px;
}
.contact-content {
  width: 1280px;
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
  width: 1280px;
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
  margin-top: 30px;
  position: relative;
}

.index-contact-method li {
  position: relative;
  margin-top: 5px;
}

.index-contact-method li img {
  width: 24px;
}

.index-contact-span {
  font-size: 14px;
  position: relative;
  color: #666666;
  margin-left: 40px;
  top: -8px;
  text-shadow: 0.2px 0.2px 0.2px #b4b0ad;
}

.contact-content {
  margin-top: 50px;
}
.contact-content-top-img{
  width: 640px
}
.contact-content-tr {
  width: 740px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 5px #cccccc;
  right: 0;
  top: 0;
  height: 220px;
  margin-top: 20px;
  padding: 20px;
  margin-bottom: 20px;
}

.contact-content-tc {
  background: #fdf3e9;
  position: relative;
  height: 200px;
  padding: 20px 0 0 50px;
}

.contact-content-tb {
  width: 740px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 5px #cccccc;
  left: 0;
  top: 0;
  height: 220px;
  margin-top: 20px;
  padding: 20px;
  margin-bottom: 20px;
}

.contact-content-tc h3 {
  font-size: 16px;
  color: #ee882a;
}

.contact-content-img {
  margin-left: 580px;
}
</style>
