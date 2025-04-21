import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Auth from '../components/Auth.vue';

import ConfiguratorPage from '../views/ConfiguratorPage.vue';

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/auth', name: 'auth', component: Auth },

    { path: '/project', name: 'projectConfigurator', component: ConfiguratorPage }
];

const router = createRouter({
    history: createWebHistory('/konfiguraator/'),
    routes,
});

export default router;
