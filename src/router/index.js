import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Notfound from '@/components/error-pages/Notfound';
import SwimmingSpot from '@/components/swimming-spot/SwimmingSpot.component';
import SwimmingSpotDetails from '@/components/swimming-spot/SwimmingSpotDetails';
import SwimmingSpotForm from '@/components/swimming-spot/SwimmingSpotForm';
import Profile from '@/views/Profile';
import InputForm from '@/views/InputForm';
import { authGuard } from '@/auth/authGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/swimmingspot/list',
      name: 'SwimmingSpotList',
      component: SwimmingSpot,
    },
    {
      path: '/swimmingspot/:id',
      name: 'SwimmingSpotDetails',
      component: SwimmingSpotDetails,
    },
    {
      path: '/swimmingspot/add',
      name: 'SwimmingSpotForm',
      component: SwimmingSpotForm,
    },
    {
      path: '*',
      name: 'Notfound',
      component: Notfound,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard,
    },
    {
      path: '/addspot',
      name: 'addspot',
      component: InputForm,
    },
  ],
});
