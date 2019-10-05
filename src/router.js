import Vue from "vue"
import Router from "vue-router"
import AppRecommend from './views/recommend'
import AppSinger from './views/singer'
import AppRank  from './views/rank'
import AppSearch from './views/search'


Vue.use(Router);

export default new Router({
   routes:[
     {path:'/',redirect:'/recommend'},
     {
       path:'/recommend', component:AppRecommend
     },
     {
      path:'/singer', component:AppSinger
    },
    {
      path:'/rank',component:AppRank
    },
    {path:'/search',component:AppSearch}
   ]
});
