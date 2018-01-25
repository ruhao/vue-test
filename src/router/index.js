import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Contact from '@/components/contact/contact'
import Message from '@/components/message/message'
import internet from '@/components/internet/internet'
import CompanyServer from '@/components/internet/companyserver'
import Imarketing from '@/components/internet/marketing'
import ServerDetail from '@/components/internet/severdetail'
import Hr from '@/components/hr/hr'
import Strategy from '@/components/hr/strategy'
import Train from '@/components/hr/train'
import Advertises from '@/components/hr/advertises'
import News from '@/components/news/news'
import CompanyNews from '@/components/news/companynews'
import CompanyPhotos from '@/components/news/companyphotos'
import Marketing from '@/components/news/marketing'
import IndustryDynamics from '@/components/news/industrydynamics'
import PhotoDetail from '@/components/news/photodetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/news',
      components: {
        default: News
      },
      children: [{
        path: '/',
        components: {
          default: CompanyNews
        }
      }, {
        path: 'companyphotos',
        components: {
          default: CompanyPhotos
        }
      }, {
        path: 'marketing',
        components: {
          default: Marketing
        }
      }, {
        path: 'industrydynamics',
        components: {
          default: IndustryDynamics
        }
      }, {
        path: 'photodetail/:content',
        name: 'photodetail',
        components: {
          default: PhotoDetail
        }
      }]
    },
    {
      path: '/hr',
      components: {
        default: Hr
      },
      children: [{
        path: 'strategy',
        components: {
          default: Strategy
        }
      }, {
        path: 'train',
        components: {
          default: Train
        }
      }, {
        path: 'advertises',
        components: {
          default: Advertises
        }
      }]
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/internet',
      name: 'internet',
      component: internet,
      children: [{
        path: 'server',
        components: {
          default: CompanyServer
        }
      }, {
        path: '/',
        components: {
          default: Imarketing
        }
      }, {
        path: 'severdetail/:content',
        name: 'severdetail',
        components: {
          default: ServerDetail
        }
      }]
    }
  ]
})
