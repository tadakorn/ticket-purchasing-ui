<template>
  <div
    class="card text-white ticket-card"
    data-bs-toggle="modal"
    data-bs-target="#ticketModal"
    @click="openModal"
  >
    <img :src="`/img/${data.img}.png`" class="card-img-top" alt="..." />
    <div class="card-img-overlay d-flex justify-content-start align-items-end">
      <div class="card-text rounded-2 text-white p-2">
        <div style="font-size: 16px; font-weight: 600">{{ data.title }}</div>
        <div style="font-size: 14px; font-weight: 400">{{ data.info }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useTicketStore } from "../../stores/ticket";

export default {
  props: {
    data: Object,
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  methods: {
    openModal() {
      let ticket = {
        img: this.data.img,
        title: this.data.title,
        detail: this.data.detail,
        priceTicket: this.data.priceTicket,
        seat: this.data.seat,
        totalSeat: this.data.totalSeat,
        priceTotalSeat: this.data.priceTotalSeat,
      };
      this.ticketStore.openModal(ticket);
    },
  },
};
</script>

<style scoped>
.card-text {
  background-color: #262626a6;
}

.card-img-overlay {
  padding: 0.5rem;
}

.ticket-card {
  cursor: pointer;
  position: relative;
}

.ticket-card {
  overflow: hidden;
}

.ticket-card img {
  transition: all 1s ease;
}

.ticket-card:hover img {
  transform: scale(1.2);
}
</style>
