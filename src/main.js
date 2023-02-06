import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faCirclePlus,
  faCircleMinus,
  faChevronLeft,
  faTriangleExclamation,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faCirclePlus,
  faCircleMinus,
  faChevronLeft,
  faCircleCheck,
  faCircleQuestion,
  faTriangleExclamation,
  faPlus
);

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
