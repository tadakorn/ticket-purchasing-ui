<template>
  <!-- card details-->
  <div class="card mt-4">
    <img
      :src="`/img/${ticketStore.currentTicket.img}.png`"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body mt-2">
      <h5 class="detail">{{ ticketStore.currentTicket.opponentTitle }}</h5>
      <div class="details text-secondary">
        <div>Mon • Feb 13, 2023 • 7:00 PM</div>
        <div>Spectrum Center - Charlotte, North Carolina</div>
        <div>{{ ticketStore.seat }} Tickets-Sec 202, Row N, Seats 18 - 19</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTicketStore } from "../../stores/ticket";
export default {
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
};
</script>

<style scoped>
.detail {
  font-size: 16px;
  font-weight: 600;
}
.details {
  font-size: 14px;
  font-weight: 400;
}
</style>
