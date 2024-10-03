import "./assets/main.css";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("AdminSidebar", Sidebar);
app.component("AdminHeader", Header);
app.component("AdminTable", Table);

app.use(createPinia());
app.use(router);

app.mount("#app");
