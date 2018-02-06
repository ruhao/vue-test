<template>
	<div>
		<div><img class="headerbg" src="../../../images/products-ban.jpg"></div>
    <div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/hr/strategy'>
				<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src="../../../images/join1.jpg" id="hrimg1"/>
					<img src="../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/hr/train'>
				<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src="../../../images/join2.jpg" id="hrimg3"/>
					<img src="../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
			</div>
		</div>
		<div class="wraperwidth-box">
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../common/footer.vue'
export default {
  components: {
    Foot
  }
}
</script>

<style scoped>
.headerbg {
  width: 100%;
  min-width: 1420px;
}

.wraperwidth-box {
  width: 1420px;
  margin: 0 auto;
  margin-top: 30px;
}
.hrroute {
  text-align: center;
}
.heroutebox1 {
  display: inline-block;
  position: relative;
  height: 160px;
  width: 160px;
  margin: 50px;
  cursor: pointer;
  z-index: 11;
  overflow: hidden;
}
.heroutebox1 img:nth-of-type(1) {
  position: absolute;
  top: 0;
  left: 0;
}
.heroutebox1 img:nth-of-type(2) {
  position: absolute;
  top: 0px;
  left: 160px;
}
.heroutebox1 .imgchangq {
  opacity: 0;
  transition: all 0.5s;
}
.heroutebox1 .imgchangl {
  opacity: 1;
  transition: all 0.5s;
}
</style>
