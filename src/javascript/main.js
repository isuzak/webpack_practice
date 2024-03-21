import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import { createApp } from "vue";
import VueApp from './VueApp.vue';

const vueApp = createApp(VueApp);
vueApp.mount('#vue-root');

console.log('webpack');

my();
