<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav navtitle='营销网络'></Nav>
		<div class='wraperwidth'>
			<div v-for='(item,index) in server' :key=index class='serverbox' @mouseenter='moveup(item.num)' @mouseleave='movedown(item.num)'>
					<div class='serverbox1'><img :src='item.imgurl'></div>
					<div class='serverbox2'>
						<p class='serverboxp1'>{{item.title}}</p>
						<p class='serverboxp2'>{{item.content}}</p>
					</div>
			</div>
			<div style='clear: both;'></div>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav navtitle='营销网络'></Nav>
		<div class='midwraperwidth'>
			<div v-for='(item,index) in server' :key=index class='midserverbox' @mouseenter='moveup(item.num)' @mouseleave='movedown(item.num)'>
					<div class='midserverbox1'><img :src='item.imgurl'></div>
					<div class='serverbox2 midserverbox2'>
						<p class='midserverboxp1'>{{item.title}}</p>
						<p class='midserverboxp2'>{{item.content}}</p>
					</div>
			</div>
			<div style='clear: both;'></div>
		</div>
	</div>
  <div v-if="width<=640">
		<Nav navtitle='营销网络'></Nav>
		<div class='miobilewraperwidth'>
			<div v-for='(item,index) in server' :key=index class='miobileserverbox'>
					<div class='miobileserverbox1'><img :src='item.imgurl' class="miobilefontstyle"></div>
					<div class='miobileserverbox2 miobileindex-product-content-box1'>
						<p class='miobileserverboxp1'>{{item.title}}</p>
						<p class='miobileserverboxp2'>{{item.content}}</p>
					</div>
			</div>
			<div style='clear: both;'></div>
		</div>
	</div>
</div>
</template>

<script>
import Nav from '../common/nav.vue'
export default {
  data () {
    return {
      server: [],
      width: 1920,
      fliter: {
        limit: 12,
        page: 1
      }
    }
  },
  methods: {
    getData () {
      this.$http.post('http://120.79.22.222:3000/internet/list').then(res => {
        var ii = res.data.rows.length
        for (let i = 0; i < ii; i++) {
          res.data.rows[i].num = i
          this.server.push(res.data.rows[i])
        }
      })
    },
    moveup (value) {
      document.getElementsByClassName('serverbox2')[value].id = 'active'
    },
    movedown (value) {
      document.getElementsByClassName('serverbox2')[value].id = ''
    }
  },
  components: {
    Nav
  },
  created () {
    this.width = document.documentElement.offsetWidth
    this.getData()
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
    if (this.width <= 640) {
      let ii = window.getComputedStyle(document.getElementsByClassName('miobileindex-product-content-box1')[0], null)['width']
      let oo = document.getElementsByClassName('miobileindex-product-content-box1').length
      for (let i = 0; i < oo; i++) {
        document.getElementsByClassName('miobileindex-product-content-box1')[i].style.height = ii
      }
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.wraperwidth {
  width: 1000px;
  margin: 45px auto 0;
}

.serverbox {
  width: 250px;
  position: relative;
  height: 250px;
  float: left;
  cursor: pointer;
  overflow: hidden;
}

.serverbox1 {
  position: absolute;
  top: 0px;
  left: 0px;
}
.serverbox1{
   height: 250px;
}
.serverbox1 img{
  height: 100%;
}
.serverbox1a{
  position: relative;
  z-index: 14;
}
.serverbox .serverbox2 {
  position: absolute;
  top: 250px;
  left: 0px;
  background: #f9f1e9;
  width: 250px;
  height: 250px;
  opacity: 1;
  transition: all 0.5s;
  z-index: 11;
}

.serverboxp1 {
  margin-top: 40px;
  margin-left: 30px;
  color: #ee882a;
  text-shadow: 0.5px 0.5px 0.5px #ee882a;
  position: relative;
  z-index: 10px;
  opacity: 1;
  cursor: pointer;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.serverboxp2 {
  margin: 40px 30px 0;
  font-size: 12px;
  line-height: 25px;
  color: #464c5b;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.midwraperwidth {
  width: 1420px;
  margin: 45px auto 0;
}

.midserverbox {
  width: 350px;
  position: relative;
  height: 350px;
  float: left;
  cursor: pointer;
  overflow: hidden;
}
.midserverbox1 {
  position: absolute;
  top: 0px;
  left: 0px;
}

.midserverbox2 {
  position: absolute;
  top: 350px;
  left: 0px;
  background: #f9f1e9;
  width: 338px;
  height: 338px;
  opacity: 0;
  transition: all 0.5s;
  z-index: 11;
}

.midserverboxp1 {
  margin-top: 40px;
  margin-left: 30px;
  color: #ee882a;
  text-shadow: 0.5px 0.5px 0.5px #ee882a;
  position: relative;
  z-index: 10px;
  opacity: 1;
  cursor: pointer;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.midserverboxp2 {
  margin: 80px 30px 0;
  font-size: 12px;
  line-height: 25px;
  color: #464c5b;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.miobilewraperwidth {
  width: 100%;
}

.miobileserverbox {
  width: 96%;
  position: relative;
  cursor: pointer;
  padding: 0 2%;
  margin-top: 10px;
  font-size: 0;
  overflow: hidden;
}

.miobileserverbox1 {
  width: 50%;
  font-size: 0;
  float: left;
}
.miobileserverbox1 img{
  width: 100%;
}

.miobileserverbox2 {
  background: #f9f1e9;
  width: 50%;
  float: left;
}

.miobileserverboxp1 {
  margin-top: 10px;
  margin-left: 30px;
  color: #ee882a;
  text-shadow: 0.5px 0.5px 0.5px #ee882a;
  font-size: 14px;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.miobileserverboxp2 {
  margin: 20px 20px 0;
  font-size: 12px;
  line-height: 25px;
  color: #464c5b;
  text-indent: 1em;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
#active {
  top: 0px;
  opacity: 0.8;
}
</style>
