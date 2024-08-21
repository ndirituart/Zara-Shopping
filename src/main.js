import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App)
app.use(router)
app.mount('#app')



// export { createApp } from 'vue';
// export { createRouter } from 'vue';
// export { createWebHistory } from 'vue';