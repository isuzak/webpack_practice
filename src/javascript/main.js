import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import { createApp } from "vue";
import VueApp from './VueApp.vue';

import add from './add.ts';



const vueApp = createApp(VueApp);
vueApp.mount('#vue-root');

console.log(add(3, 9));

console.log('webpack');

my();
