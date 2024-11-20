import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Courses from '../pages/Courses.vue';
import SingleCourse from '../pages/singleCourse.vue';
import Chapters from '../pages/Chapters.vue';
import LoginPage from '../pages/LoginPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout, // Use MainLayout as the parent
    children: [
      {
        path: '',
        name: 'Home',
        component: Home, // Renders in <router-view> inside MainLayout
      },
      {
        path: 'loginpage',
        name: 'LoginPage',
        component: LoginPage,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'courses',
        name: 'Courses',
        component: Courses,
      },
      {
        path: 'singleCourse',
        name: 'SingleCourse',
        component: SingleCourse,
      },
      {
        path: 'chapters',
        name: 'Chapters',
        component: Chapters,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
