<template>
	<div>
		<Nav navtitle="人才招聘"></Nav>
		<div class="adbody">
			<div v-if="this.fliter.data6">
				<div v-for="(item,index) in this.fliter.data6" class="adhrbox" :key=index>
					{{item.title}}
					<div class="content-top">
						<div class="content-left">
							<p>招聘人数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.num}}</p>
							<p>学历要求：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.education}}</p>
							<p>年龄要求：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.age}}</p>
							<p>语言要求：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.language}}</p>
						</div>
						<div class="content-left">
							<p>联系电话：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.telephone}}</p>
							<p>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.sex}}</p>
							<p>薪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.pay}}</p>
							<p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.site}}</p>
						</div>
					</div>
					<div class="adrequest">
						<div class="detaillll">详细要求：</div>
						<div>
							<p v-for="(detail,index) in item.detail" :key=index>{{detail}}</p>
						</div>
					</div>
				</div>
			</div>
			<div v-else>
				<div class="adhrbox">
					暂无需求
					<div class="content-top">
						<div class="content-left">

						</div>
						<div class="content-left">

						</div>
					</div>
					<div class="adrequest1">
						<div></div>
						<div>

						</div>
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
      information: [],
      fliter: {
        data6: [],
        type: '3',
        limit: 4
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.$http.post('http://120.79.22.222:3000/hr/list', this.fliter).then(res => {
      this.fliter.data6 = res.data.rows
      let ii = this.fliter.data6.length
      for (let i = 0; i < ii; i++) {
        let arr = this.fliter.data6[i].detail.split('；')
        this.fliter.data6[i].detail = arr
      }
    })
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.contact-title {
  display: flex;
  width: 440px;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
}

.contact-title p {
  line-height: 24px;
  font-size: 24px;
  flex: 1;
  color: #f1662c;
  text-shadow: 1px 1px 1px #f1662c;
}

.contact-title img {
  height: 20px;
  margin: 3px 40px;
}

.adbody {
  overflow: hidden;
  width: 1280px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  position: relative;
}

.adhrbox {
  width: 630px;
  height: 360px;
  background: url("../../../images/hradbg.png");
  background-size: 100% 100%;
  float: left;
  position: relative;
  color: #a3a3a3;
  text-shadow: 0.5px 0.5px 0.5px #a3a3a3;
  margin: 0 auto;
  overflow: hidden;
}

.adhrbox:nth-of-type(2n + 1) {
  margin-right: 6px;
  margin-top: 50px;
}

.adhrbox:nth-of-type(2n) {
  margin-left: 6px;
  margin-top: 50px;
}

.content-top {
  display: flex;
  margin-top: 50px;
}

.content-left {
  width: 305px;
  text-align: left;
  padding-left: 50px;
  line-height: 40px;
}

.adrequest {
  width: 560px;
  text-align: left;
  padding-left: 50px;
  padding-right: 50px;
  line-height: 25px;
  display: flex;
}

.adrequest .detaillll {
  width: 120px;
}

.adrequest1 p {
  height: 30px;
}
</style>
