import Vue from 'vue';
import VueRouter from 'vue-router';

import RockPaperScissors from '../components/RockPaperScissors';
import About from '../components/About';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: RockPaperScissors },
        { path: '/rps', component: RockPaperScissors },
        { path: '/about', component: About },
    ]
});

export default router;
