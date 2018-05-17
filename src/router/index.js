import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footer from '@/components/footer'
import home from '@/components/section/home'
import my from '@/components/section/my'
import clas from '@/components/section/clas'
import car from '@/components/section/car'
import shopDetail from '@/components/section/shopDetail'
import clasDetail from '@/components/section/child/clasDetail'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'footer',
			component: footer
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/my',
			name: 'my',
			component: my
		},
		{
			path: '/car',
			name: 'car',
			component: car
		},
		{
			path: '/clas',
			name: 'clas',
			component: clas
		},
		{
			path: '/shopDetail',
			name: 'shopDetail',
			component: shopDetail
		},
		{
		path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		}
  ]
})
