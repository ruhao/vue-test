<template>
	<div class="bodywidth">
    <div v-if='this.$route.path.indexOf("en")==-1'>
		<div class="wraperwidth">
			<ul>
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
					<router-link class="navfont" to='/en' tag='span'>EN</router-link>
				</li>
			</ul>
		</div>
		<!-- <div class="headernavlast" v-if="this.width>=1600">
			<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
			<router-link class="navfont" to='/en' tag='span'>EN</router-link>
		</div>
		<div class="wraperwidth" v-else>
			<div class="headernavlastb">
				<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
				<router-link class="navfont" to='/en' tag='span'>EN</router-link>
			</div>
		</div> -->
		<div>
			<transition :name="transitionName">
				<router-view class="child-view"></router-view>
			</transition>
		</div>
    </div>
    <div v-else>
      <div class="wraperwidth">
			<ul>
				<li class="headernavleft">
					<router-link to='/en' tag='span' class="navfont" active-class="routeactive" exact>Home</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/enabout' tag='span' class="navfont" active-class="routeactive">About Us</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/enproduct' tag='span' class="navfont" active-class="routeactive">Business</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/eninternet' tag='span' class="navfont" active-class="routeactive">Network</router-link>
				</li>
				<li class="headernavmid">
					<img src="../images/logo.png"></li>
				<li class="headernavright">
					<router-link to='/ennews' tag='span' class="navfont" active-class="routeactive">News</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/hr' tag='span' class="navfont" active-class="routeactive">Human resources</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/enmessage' tag='span' class="navfont" active-class="routeactive">Online Message</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/encontact' tag='span' class="navfont" active-class="routeactive">Contact Us</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
					<router-link class="navfont" to='/' tag='span'>EN</router-link>
				</li>
			</ul>
		</div>
		<!-- <div class="headernavlast" v-if="this.width>=1600">
			<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
			<router-link class="navfont" to='/' tag='span'>EN</router-link>
		</div>
		<div class="wraperwidth" v-else>
			<div class="headernavlastb">
				<router-link to='/' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
				<router-link class="navfont" to='/' tag='span'>EN</router-link>
			</div>
		</div> -->
		<div>
			<transition :name="transitionName">
				<router-view class="child-view"></router-view>
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
  mounted () {
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
.wraperwidth {
  width: 100%;
  position: absolute;
  z-index: 10;
}
ul {
  margin-top: 30px;
  list-style: none;
	display: flex;
}
.headernavleft {
  width: 10%;
}
.navfont {
  color: white;
  cursor: pointer;
}
.navfont:hover {
  color: #ee882a;
}
.routeactive {
  color: #ee882a;
}
.headernavright {
  width: 10%;
	text-align: right;
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
  margin-top: -18px;
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
</style>
