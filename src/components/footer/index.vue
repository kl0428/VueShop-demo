<template>
	<div class="tabbar">

		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item v-for="(item, index) in tabArr" :key="index" :id="item.id">
				<img v-if="selected == item.id" slot="icon" :src="item.activeSrc">
				<img v-else slot="icon" :src="item.src">
				{{item.name}}
			</mt-tab-item>
		</mt-tabbar>

		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="home">
				<mt-cell> <home/> </mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="clas">
				<mt-cell> <clas/> </mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="car">
				<mt-cell>  <car/> </mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="my">
				<mt-cell> <my/> </mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>
		
	</div>
	
</template>
<script>
import { Tabbar, TabItem } from 'mint-ui';
import home from '../section/home'
import clas from '../section/clas'
import car from '../section/car'
import my from '../section/my'
export default {
	data () {
		return {
			selected: 'home',
			tabArr: [
				{'name':'首页','id':'home','src':'./static/tab/tab_btn_home@2x.png','activeSrc':'./static/tab/index.png'},
				{'name':'分类','id':'clas','src':'./static/tab/tab_btn_classification@2x.png','activeSrc':'./static/tab/tab_btn_classification_hl@2x.png'},
				{'name':'购物车','id':'car','src':'./static/tab/tab_btn_shopping-car@2x.png','activeSrc':'./static/tab/shopingCart.png'},
				{'name':'我的','id':'my','src':'./static/tab/tab_btn_user@2x.png','activeSrc':'./static/tab/my.png'}
			]
		}
	},
	components: {
		home,clas,car,my
	},
	mounted () {
		// 返回识别参数
		if(document.location.href.indexOf('?') != -1){
			this.selected = document.location.href.split('?')[1].split('=')[1];
		}
	},
	watch: {
		selected (val,oldval) {
			this.$router.push({
				path: "?tab="+val
			})	
		}
	}
}
</script>
<style>
.mint-cell-value{
	width:100vw
}
</style>


