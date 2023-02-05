<template>
  <p>Sports</p>
  <div class="d-flex flex-column h-100 p-2 pb-1 text-white text-shadow-1 mt-3">
    <div class="row align-items-stretch g-4 py-2">
      <div
        class="col-sm-12 col-md-3"
        v-for="data in ticketStore.ticketList"
        :key="data.id"
      >
        <SportsTicketChild :data="data" />
      </div>
    </div>
  </div>

  <OrderDetailModal />
</template>

<script>
import SportsTicketChild from "./SportsTicketChild.vue";
import OrderDetailModal from "./OrderDetailModal.vue";
import { useTicketStore } from "../../stores/ticket";
export default {
  components: {
    SportsTicketChild,
    OrderDetailModal,
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
};
</script>
