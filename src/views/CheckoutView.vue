<template>
  <div class="row">
    <div class="col-12 col-md-7">
      <CheckoutTicket />
      <CheckoutPayment />
      <TicketInsurance />
    </div>
    <div class="col-12 col-md-5">
      <CheckoutTotal />
      <CheckoutDetails />
    </div>
  </div>
  <OrderExpiredModal v-if="ticketStore.showOrderExpiredModal" />
</template>

<script>
import { useTicketStore } from "../stores/ticket";
import OrderExpiredModal from "../components/checkout/OrderExpiredModal.vue";
import CheckoutTicket from "../components/checkout/CheckoutTicket.vue";
import CheckoutPayment from "../components/checkout/CheckoutPayment.vue";
import TicketInsurance from "../components/checkout/TicketInsurance.vue";
import CheckoutTotal from "../components/checkout/CheckoutTotal.vue";
import CheckoutDetails from "../components/checkout/CheckoutDetails.vue";

export default {
  components: {
    CheckoutTicket,
    CheckoutPayment,
    TicketInsurance,
    CheckoutTotal,
    CheckoutDetails,
    OrderExpiredModal,
  },
  setup() {
    const ticketStore = useTicketStore();
    return { ticketStore };
  },
  mounted() {
    this.initCheckout();
  },
  unmounted() {
    this.ticketStore.deleteExpiredInterval();
  },
  methods: {
    initCheckout() {
      let ticketReserve = localStorage.getItem("ticketReserve");
      if (ticketReserve === null) {
        this.$router.push("/");
      } else {
        ticketReserve = JSON.parse(ticketReserve);
        this.ticketStore.seat = parseInt(ticketReserve.seat);
        this.ticketStore.currentTicket = this.ticketStore.ticketList.filter(
          (obj) => {
            return obj.id === parseInt(ticketReserve.ticketId);
          }
        )[0];

        const orderExpired = parseInt(ticketReserve.orderExpired);
        this.ticketStore.setExpiredInterval(orderExpired);
      }
    },
  },
};
</script>
