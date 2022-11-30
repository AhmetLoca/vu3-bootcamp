import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style.css";

import appHeader from "@/components/Shared/appHeader.vue";

const app = createApp(App);
app.component("appHeader", appHeader);
app.use(router);
app.mount("#app");
