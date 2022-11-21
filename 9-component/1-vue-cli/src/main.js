import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style.css";
/* @ -> src */

import appHeader from "@/components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";

const app = createApp(App);

app.component("app-header", appHeader);
app.component("app-footer", appFooter);

app.mount("#app");
