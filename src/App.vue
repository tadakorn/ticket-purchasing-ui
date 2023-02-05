<template>
  <div class="d-flex flex-column" style="min-height: 100vh">
    <header>
      <NavBar />
    </header>
    <main class="mt-4 flex-grow-1">
      <div class="container-fluid container-md">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    RouterView,
    NavBar,
  },
};
</script>
