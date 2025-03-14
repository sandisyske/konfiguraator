import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import Auth from './components/Auth.vue';
import HouseViewer from './components/HouseViewer.vue';
import ProjectConfigurator from './components/ProjectConfigurator.vue';

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/auth', name: 'auth', component: Auth },
    { path: '/house', name: 'houseViewer', component: HouseViewer },
    { path: '/project', name: 'projectConfigurator', component: ProjectConfigurator }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
