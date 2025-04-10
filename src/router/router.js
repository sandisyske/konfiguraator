import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Auth from '../components/Auth.vue';
import HouseViewer from '../components/HouseViewer.vue';
import ConfiguratorPage from '../views/ConfiguratorPage.vue';

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/auth', name: 'auth', component: Auth },
    { path: '/house', name: 'houseViewer', component: HouseViewer },
    { path: '/project', name: 'projectConfigurator', component: ConfiguratorPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
