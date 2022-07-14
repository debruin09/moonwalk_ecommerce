import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createPinia } from "pinia";
import router from "./router";

import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import VueFeather from "vue-feather";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const c = (x: any) => x as unknown as IconDefinition;

library.add(c(fas), c(far), faFacebook, faInstagram, faWhatsapp);

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .component(VueFeather.name, VueFeather)
  .component("fa", FontAwesomeIcon);

router.isReady().then(() => app.mount("#app"));
