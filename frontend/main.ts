import { createApp } from "vue"
import App from "./App.vue"
import VueSidebarMenu from 'vue-sidebar-menu'


let app = createApp(App);
app.use(VueSidebarMenu);
app.mount("#root");
