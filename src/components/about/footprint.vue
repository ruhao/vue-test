<template>
	<div>
		<Nav navtitle='发展足迹'></Nav>
		<div class="wraperwidth">
			<img src="../../../images/aboutfoot.jpg" class="wraperwidth-img"/>
		</div>
	</div>
</template>

<script>
import Nav from '../common/nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style scoped>
p,
img {
  margin: 0;
  padding: 0;
}

.wraperwidth {
  width: 1280px;
  margin: 0 auto;
  margin-top: 50px;
}
.wraperwidth-img{
  width: 100%;
}
</style>
