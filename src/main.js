import Vue from 'vue';
import App from './App';
import Router from "vue-router";
import Home from './page/Home';
import Example from './page/example';
import People from './page/People';
import Call from './page/call';
import Company from './page/Company';
import School from './page/School';

Vue.use(Router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router : new Router({
  	mode : "history",
  	routes : [
  		{
  			path : "/",
  			component : Home
  		},
  		{
  			path : "/example",
  			component : Example
  		},
  		{
  			path : "/people",
  			component : People
  		},
  		{
  			path : "/call",
  			component : Call
  		},
  		{
  			path : "/company",
  			component : Company
  		},
  		{
  			path : "/school",
  			component : School
  		}
  	]

  }),
  render : h => h(App)
});
