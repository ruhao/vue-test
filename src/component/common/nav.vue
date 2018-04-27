<template>
<div>
	<div class='contact-title' v-if="width<1500&&width>640">
    <div class="contact-middle">
		<img src='../../../images/left-c.jpg' />
		<p>{{navtitle}}</p>
		<img src='../../../images/right-c.jpg' />
    </div>
	</div>
  <div class='midcontact-title' v-if="width>=1500">
    <div class="midcontact-middle">
		<img src='../../../images/left-c.jpg' />
		<p>{{navtitle}}</p>
		<img src='../../../images/right-c.jpg' />
    </div>
	</div>
  <div class='mobilecontact-title' v-if="width<=640">
    <div class="mobilecontact-middle">
		<img src='../../../images/left-c.jpg' />
		<p>{{navtitle}}</p>
		<img src='../../../images/right-c.jpg' />
    </div>
	</div>
  </div>
</template>

<script>
export default {
  props: ['navtitle'],
  // 接受父组件传递的参数
  data () {
    return {
      width: 1920
    }
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
p {
  margin: 0;
  padding: 0;
}

.contact-title {
  width: 1000px;
  margin: 0 auto;
  position: relative;
  margin-top: 50px auto;
}
.contact-middle{
 width: 600px;
 display: flex;
 margin: 0 auto;
 position: relative;
}
.contact-title p {
  line-height: 24px;
  font-size: 18px;
  flex: 1;
  color: #f1662c;
  text-align: center;
}

.contact-title img {
  height: 20px;
  margin: 3px 40px;
}

.midcontact-title {
  width: 1420px;
  margin: 0 auto;
  position: relative;
  margin-top: 50px auto;
}
.midcontact-middle{
 width: 660px;
 display: flex;
 margin: 0 auto;
 position: relative;
}
.midcontact-title p {
  line-height: 24px;
  font-size: 24px;
  flex: 1;
  color: #f1662c;
  text-align: center;
}

.midcontact-title img {
  height: 20px;
  margin: 3px 40px;
}
.mobilecontact-title {
  width: 100%;
  position: relative;
  margin-top: 20px auto;
}
.mobilecontact-middle{
 max-width: 330px;
 display: flex;
 margin: 0 auto;
 position: relative;
 margin-top: 15px;
 overflow: hidden;
 display: flex;
}
.mobilecontact-title p {
  line-height: 18px;
  font-size: 14px;
  color: #f1662c;
  margin-top: 2px;
  text-align: center;
  flex: 1;
}

.mobilecontact-middle img {
  width: 60px;
  height: 15px;
  margin: 3px 15px;
}
.mobilecontact-middle img:nth-of-type(2) {
  width: 60px;
  height: 15px;
  margin: 3px 15px;
}
</style>
