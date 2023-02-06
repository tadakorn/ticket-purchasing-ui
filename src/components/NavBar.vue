<template>
  <div class="container">
    <nav class="navbar navbar-light navbar-expand-lg">
      <RouterLink to="/" class="navbar-brand">Ticket Purchasing</RouterLink>
      <div v-if="$route.name === 'checkout'">
        <div class="ms-5">Check Out</div>
      </div>
      <div class="ms-auto" v-if="$route.name === 'checkout'">
        Time Remaining <span class="text-center px-2">{{ timeout }}</span>
        <font-awesome-icon icon="fa-regular fa-circle-question" />
      </div>
    </nav>
  </div>
</template>

<script>
import { useTicketStore } from "../stores/ticket";

export default {
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  computed: {
    timeout() {
      let orderExpiredTimeout = this.ticketStore.orderExpiredTimeout;
      if (orderExpiredTimeout <= 0) {
        return "00:00";
      } else {
        let minutes = Math.floor(orderExpiredTimeout / 60);
        let remainingSeconds = orderExpiredTimeout % 60;
        return (
          minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds
        );
      }
    },
  },
};
</script>

<style scoped></style>
