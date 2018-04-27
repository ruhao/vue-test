<template>
<div>
	<div class="bodywidth" v-if="width<1500&&width>640">
    <div v-if='this.$route.path.indexOf("en")==-1'>
		<div class="wraperwidth">
			<ul class="smul ulpc">
				<li class="headernavlast">
					<router-link to='/' tag='span' class="navfont" active-class="routeactive" exact>网站首页</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/about' tag='span' class="navfont" active-class="routeactive">关于我们</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/product' tag='span' class="navfont" active-class="routeactive">产品业务</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/internet' tag='span' class="navfont" active-class="routeactive">网络服务</router-link>
				</li>
				<li class="headernavmid">
					<img src="../images/logo.png"></li>
				<li class="headernavright">
					<router-link to='/news' tag='span' class="navfont" active-class="routeactive">新闻动态</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/hr' tag='span' class="navfont" active-class="routeactive">人力资源</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/message' tag='span' class="navfont" active-class="routeactive">在线留言</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/contact' tag='span' class="navfont" active-class="routeactive">联系我们</router-link>
				</li>
				<li class="headernavlast">
					<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
					<router-link to='/en' tag='span' class="navfont">EN</router-link>
				</li>
			</ul>
		</div>
		</div>
		<div v-if='this.$route.path.indexOf("en")==1'>
		<div class="wraperwidth">
			<ul class="smul ulpc">
				<li class="headernavlast">
					<router-link to='/en' tag='span' class="navfont" active-class="routeactive" exact>Home</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/enabout' tag='span' class="navfont" active-class="routeactive">About Us</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/enproduct' tag='span' class="navfont" active-class="routeactive">Core Business</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/eninternet' tag='span' class="navfont" active-class="routeactive">Sales Network</router-link>
				</li>
				<li class="headernavmid">
					<img src="../images/logo.png"></li>
				<li class="headernavrighten">
					<router-link to='/ennews' tag='span' class="navfont" active-class="routeactive">News</router-link>
				</li>
				<li class="headernavrighten">
					<router-link to='/enhr' tag='span' class="navfont" active-class="routeactive">Human resources</router-link>
				</li>
				<li class="headernavrighten">
					<router-link to='/enmessage' tag='span' class="navfont" active-class="routeactive">Online Message</router-link>
				</li>
				<li class="headernavrighten">
					<router-link to='/encontact' tag='span' class="navfont" active-class="routeactive">Contact Us</router-link>
				</li>
				<li class="headernavlast">
					<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
					<router-link to='/en' tag='span' class="navfont">EN</router-link>
				</li>
			</ul>
		</div>
		</div>
			<transition :name="transitionName">
				<router-view class="child-view"></router-view>
			</transition>
		</div>
		<div class="bodywidth" v-if="width>=1500">
		<div v-if='this.$route.path.indexOf("en")==-1'>
		<div class="midwraperwidth">
			<ul class="ulpc">
				<li class="midheadernavleft">
					<router-link to='/' tag='span' class="midnavfont" active-class="midrouteactive" exact>网站首页</router-link>
				</li>
				<li class="midheadernavleft">
					<router-link to='/about' tag='span' class="midnavfont" active-class="midrouteactive">关于我们</router-link>
				</li>
				<li class="midheadernavleft">
					<router-link to='/product' tag='span' class="midnavfont" active-class="midrouteactive">产品业务</router-link>
				</li>
				<li class="midheadernavleft">
					<router-link to='/internet' tag='span' class="midnavfont" active-class="midrouteactive">营销网络</router-link>
				</li>
				<li class="midheadernavmid">
					<img src="../images/logo.png"></li>
				<li class="midheadernavright">
					<router-link to='/news' tag='span' class="midnavfont" active-class="midrouteactive">新闻动态</router-link>
				</li>
				<li class="midheadernavright">
					<router-link to='/hr' tag='span' class="midnavfont" active-class="midrouteactive">人力资源</router-link>
				</li>
				<li class="midheadernavright">
					<router-link to='/message' tag='span' class="midnavfont" active-class="midrouteactive">在线留言</router-link>
				</li>
				<li class="midheadernavright">
					<router-link to='/contact' tag='span' class="midnavfont" active-class="midrouteactive">联系我们</router-link>
				</li>
			</ul>
		</div>
		<div class="midheadernavlast">
			<router-link to='/' tag='span' class="midnavfont">CN</router-link><span class="midnavfontapsn">|</span>
			<router-link to='/en' tag='span' class="midnavfont">EN</router-link>
		</div>
		</div>
    <div v-else>
      <div class="midwraperwidth">
			<ul class="ulpc">
				<li class="midheadernavleften">
					<router-link to='/en' tag='span' class="midnavfont" active-class="midrouteactive" exact>Home</router-link>
				</li>
				<li class="midheadernavleften">
					<router-link to='/enabout' tag='span' class="midnavfont" active-class="midrouteactive">About Us</router-link>
				</li>
				<li class="midheadernavleften">
					<router-link to='/enproduct' tag='span' class="midnavfont" active-class="midrouteactive">Core Business</router-link>
				</li>
				<li class="midheadernavleften">
					<router-link to='/eninternet' tag='span' class="midnavfont" active-class="midrouteactive">Sales Network</router-link>
				</li>
				<li class="midheadernavmid">
					<img src="../images/logo.png"></li>
				<li class="midheadernavrighten">
					<router-link to='/ennews' tag='span' class="midnavfont" active-class="midrouteactive">News</router-link>
				</li>
				<li class="midheadernavrighten">
					<router-link to='/enhr' tag='span' class="midnavfont" active-class="midrouteactive">Human resources</router-link>
				</li>
				<li class="midheadernavrighten">
					<router-link to='/enmessage' tag='span' class="midnavfont" active-class="midrouteactive">Online Message</router-link>
				</li>
				<li class="midheadernavrighten">
					<router-link to='/encontact' tag='span' class="midnavfont" active-class="midrouteactive">Contact Us</router-link>
				</li>
			</ul>
		</div>
		<div class="midheadernavlasten">
			<router-link to='/' tag='span' class="midnavfont">CN</router-link><span class="midnavfontapsn">|</span>
			<router-link class="midnavfont" to='/en' tag='span'>EN</router-link>
		</div>
		</div>
					<transition :name="transitionName">
				<router-view class="child-view"></router-view>
			</transition>
				</div>
			<div class="mobilebodywidth" v-if="width<=640">
    <div v-if='this.$route.path.indexOf("en")==1'>
		<div class="mobilewraperwidth">
			<div class="mobileheadernavmid">
					<img src="../images/logo.png">
      </div>
			<div class="mobileheadernavmid1">
					<img src="../images/mobile1.png" @click="navapped">
      </div>
			<ul class="mobileheadernavright" id="ulll" @click="navdis">
				<li class="mobileheadernavleft">
					<p class="mobilenavtitle">LaoWaiCang</p>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/en' tag='span' class="mobilenavfont" active-class="mobilerouteactive" exact>Home</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/enabout' tag='span' class="mobilenavfont" active-class="mobilerouteactive">About Us</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/enproduct' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Core Business</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/eninternet' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Sales Network</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/ennews' tag='span' class="mobilenavfont" active-class="mobilerouteactive">News</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/enhr' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Human resources</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/enmessage' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Online Message</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/encontact' tag='span' class="mobilenavfont" active-class="mobilerouteactive">Contact Us</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/' tag='span' class="mobilenavfont">CN</router-link><span class="mobilenavfontapsn">|</span>
					<router-link class="mobilenavfont" to='/en' tag='span'>EN</router-link>
				</li>
			</ul>
		</div>
    </div>
		<div v-if='this.$route.path.indexOf("en")==-1'>
		<div class="mobilewraperwidth">
			<div class="mobileheadernavmid">
					<img src="../images/logo.png">
      </div>
			<div class="mobileheadernavmid1">
					<img src="../images/mobile1.png" @click="navapped">
      </div>
			<ul class="mobileheadernavright" id="ulll" @click="navdis">
				<li class="mobileheadernavleft">
					<p class="mobilenavtitle">老外仓</p>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/' tag='span' class="mobilenavfont" active-class="mobilerouteactive" exact>首页</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/about' tag='span' class="mobilenavfont" active-class="mobilerouteactive">关于我们</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/product' tag='span' class="mobilenavfont" active-class="mobilerouteactive">产品业务</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/internet' tag='span' class="mobilenavfont" active-class="mobilerouteactive">营销网络</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/news' tag='span' class="mobilenavfont" active-class="mobilerouteactive">新闻动态</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/hr' tag='span' class="mobilenavfont" active-class="mobilerouteactive">人力资源</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/message' tag='span' class="mobilenavfont" active-class="mobilerouteactive">在线留言</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/contact' tag='span' class="mobilenavfont" active-class="mobilerouteactive">联系我们</router-link>
				</li>
				<li class="mobileheadernavleft">
					<router-link to='/' tag='span' class="mobilenavfont">CN</router-link><span class="mobilenavfontapsn">|</span>
					<router-link class="mobilenavfont" to='/en' tag='span'>EN</router-link>
				</li>
			</ul>
		</div>
    </div>
		<div>
			<transition :name="transitionName">
				<router-view class="mobilechild-view"></router-view>
			</transition>
		</div>
	</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-left',
      width: 1920
    }
  },
  methods: {
    navapped () {
      document.getElementById('ulll').style.right = 0
    },
    navdis () {
      document.getElementById('ulll').style.right = -document.documentElement.offsetWidth + 'px'
    }
  },
  created () {
    this.width = document.documentElement.offsetWidth
  },
  updated () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  },
  beforeRouteUpdate (
    to,
    from,
    next
  ) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
ul{
	padding: 0;
	margin: 0;
}
.wraperwidth {
  width: 100%;
  position: absolute;
  z-index: 10;
}
.ulpc {
	margin-top: 5px;
  list-style: none;
	display: flex;
}
.smul{
 margin-top: 15px;
 position: relative;
}
.headernavleft {
  width: 10%;
}
.navfont {
  color: white;
  cursor: pointer;
	font-size: 14px;
}
.navfont:hover {
  color: #ee882a;
}
.routeactive {
  color: #ee882a;
}
.headernavright{
	width: 10%;
	text-align: center;
}
.headernavrighten {
  width: 10%;
	text-align: center;
}
.headernavrighten :nth-of-type(1){
  width: 8%;
	text-align: center;
}
.headernavrighten :nth-of-type(2){
  width: 8%;
	text-align: left;
}
.headernavlast {
  width: 10%;
	text-align: center;
}
.navfontapsn {
  color: white;
  margin: 0 10px;
  cursor: pointer;
}
.headernavmid {
  margin-top: -10px;
	width: 140px;
}
.headernavmid img{
	width: 100%;
}
li {
  float: left;
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
.bodywidth {
  width: 100%;
}
.headernavlastb {
  position: absolute;
  top: 60px;
  right: 45px;
  z-index: 10;
}
.midwraperwidth {
  width: 1420px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.midheadernavleft {
  width: 150px;
  text-align: left;
	margin-top: 20px;
}
.midheadernavleften{
	width: 150px;
  text-align: center;
	margin-top: 20px;
}
.midnavfont {
  color: white;
  cursor: pointer;
}
.midnavfont:hover {
  color: #ee882a;
}
.midrouteactive {
  color: #ee882a;
}
.midheadernavright {
  width: 140px;
	margin-top: 20px;
  text-align: right;
}
.midheadernavrighten {
	width: 140px;
	margin-top: 20px;
  text-align: center;
}
.midheadernavrighten {
	width: 160px;
	margin-top: 20px;
  text-align: center;
}
.midheadernavrighten :nth-of-type(1){
	width: 140px;
	margin-top: 20px;
  text-align: center;
}
.midheadernavrighten :nth-of-type(2n+1){
	width: 160px;
	margin-top: 20px;
  text-align: center;
}
.midheadernavlast {
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 10;
}
.midheadernavlasten{
	position: absolute;
  top: 25px;
  right: 30px;
  z-index: 10;
}
.midnavfontapsn {
  color: white;
  margin: 0 10px;
  cursor: pointer;
}
.midheadernavmid {
  margin-top: 5px;
}
.mobilewraperwidth {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
	overflow: hidden;
}
ul,p{
  list-style: none;
	margin: 0;
	padding: 0;
}
.mobilenavtitle{
	background: url("../images/mobile.png") no-repeat 15px 15px;
	padding-left: 60px;
	padding-top: 5px;
	font-size: 600;
	color: #ee882a;
	font-size: 20px;
}
.mobileheadernavleft {
  text-align: left;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid white;
	float: none;
}
.mobilenavfont {
  color: black;
  cursor: pointer;
	margin-left: 15px;
	font-size: 600;
	text-shadow: 0.2px 0.2px 0.2px gray;
}
.mobileheadernavmid1{
	margin-top: 0px;
	width: 50px;
	right: 10px;
	top: 10px;
	position: absolute;
	z-index: 11
}
.mobileheadernavmid1 img{
	cursor: pointer;
	width: 24px
}
.mobilenavfont:hover {
  color: #ee882a;
}
.mobilerouteactive {
  color: #ee882a;
}
.mobileheadernavright {
  width: 50%;
  text-align: right;
	background: #f8efe7;
	position: absolute;
	right: -50%;
	top:0;
	height: 100%;
	transition: all 1s;
	z-index: 50;
}
.mobileheadernavlast {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
}
.mobilenavfontapsn {
  color: white;
  margin: 0 10px;
  cursor: pointer;
	margin-left: 15px;
}
.mobileheadernavmid {
  margin-top: 0px;
	width: 60px;
	margin-left: 10px;
	margin-top: 10px;
}
.mobileheadernavmid img{
	width: 100%;
}
.bodywidth {
  width: 100%;
}
.headernavlastb {
  position: absolute;
  top: 60px;
  right: 45px;
  z-index: 10;
}
</style>
